"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  fields?: { name: string; email: string; message: string };
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const fields = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  // Honeypot: real users never fill this hidden field in.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return {
      status: "success",
      message: "Tack för ditt meddelande! Vi hör av oss så snart vi kan.",
    };
  }

  const errors: ContactState["errors"] = {};
  if (!fields.name) errors.name = "Fyll i ditt namn.";
  if (!EMAIL_PATTERN.test(fields.email))
    errors.email = "Fyll i en giltig e-postadress.";
  if (!fields.message) errors.message = "Skriv ett meddelande.";
  else if (fields.message.length > 5000)
    errors.message = "Meddelandet är för långt.";

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
      "Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not configured.",
    );
    return {
      status: "error",
      message: "Formuläret är inte konfigurerat just nu. Försök igen senare.",
      fields,
    };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Kontaktformulär Kårens Hemsida <onboarding@resend.dev>",
    to,
    replyTo: fields.email,
    subject: `Nytt meddelande från ${fields.name}`,
    text: `Namn: ${fields.name}\nE-post: ${fields.email}\n\n${fields.message}`,
  });

  if (error) {
    console.error("Contact form: failed to send email via Resend", error);
    return {
      status: "error",
      message: "Något gick fel. Försök igen om en stund.",
      fields,
    };
  }

  return {
    status: "success",
    message: "Tack för ditt meddelande! Vi hör av oss så snart vi kan.",
  };
}
