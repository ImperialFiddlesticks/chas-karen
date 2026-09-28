"use server";

import { cookies } from "next/headers";
import { Resend } from "resend";
import { MEMBER_COOKIE_NAME, isMember } from "@/lib/member-auth";
import { CATEGORIES, type SuggestionCategory } from "@/lib/suggestion-categories";

export type SuggestionState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"suggestion" | "category" | "email", string>>;
  fields?: {
    suggestion: string;
    category: string;
    name: string;
    email: string;
  };
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendSuggestion(
  _prevState: SuggestionState,
  formData: FormData,
): Promise<SuggestionState> {
  const store = await cookies();
  const authorized = await isMember(store.get(MEMBER_COOKIE_NAME)?.value);
  if (!authorized) {
    return {
      status: "error",
      message:
        "Du måste vara inloggad i medlemsområdet för att skicka förslag.",
    };
  }

  const fields = {
    suggestion: String(formData.get("suggestion") ?? "").trim(),
    category: String(formData.get("category") ?? "").trim(),
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
  };

  // Honeypot: real users never fill this hidden field in.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return {
      status: "success",
      message: "Tack för ditt förslag!",
    };
  }

  const errors: SuggestionState["errors"] = {};
  if (!fields.suggestion) errors.suggestion = "Skriv ditt förslag.";
  else if (fields.suggestion.length > 2000)
    errors.suggestion = "Förslaget är för långt (max 2000 tecken).";

  if (!CATEGORIES.includes(fields.category as SuggestionCategory))
    errors.category = "Välj en kategori.";

  if (fields.email && !EMAIL_PATTERN.test(fields.email))
    errors.email = "Ange en giltig e-postadress, eller lämna fältet tomt.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Kontrollera fälten och försök igen.",
      errors,
      fields,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.error(
      "Förslagslådan: RESEND_API_KEY eller CONTACT_TO_EMAIL är inte konfigurerat.",
    );
    return {
      status: "error",
      message: "Formuläret är inte konfigurerat just nu. Försök igen senare.",
      fields,
    };
  }

  const resend = new Resend(apiKey);

  const identityLines = [
    fields.name ? `Namn: ${fields.name}` : null,
    fields.email ? `E-post: ${fields.email}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const { error } = await resend.emails.send({
    from: "Förslagslådan Kårens Hemsida <onboarding@resend.dev>",
    to,
    ...(fields.email ? { replyTo: fields.email } : {}),
    subject: `Förslagslådan: ${fields.category}`,
    text: `${identityLines ? `${identityLines}\n\n` : ""}${fields.suggestion}`,
  });

  if (error) {
    console.error("Förslagslådan: failed to send email via Resend", error);
    return {
      status: "error",
      message: "Något gick fel. Försök igen om en stund.",
      fields,
    };
  }

  return {
    status: "success",
    message: "Tack för ditt förslag! Vi tar del av det.",
  };
}
