"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: real users never fill this hidden field in.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "success", message: "Tack för ditt meddelande!" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Fyll i alla fält innan du skickar." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Ange en giltig e-postadress." };
  }
  if (message.length > 5000) {
    return { status: "error", message: "Meddelandet är för långt." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.error(
      "Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not configured."
    );
    return {
      status: "error",
      message: "Formuläret är inte konfigurerat just nu. Försök igen senare.",
    };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Chas Studentkår <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `Nytt meddelande från ${name} (kontaktformulär)`,
    text: `Namn: ${name}\nE-post: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Contact form: failed to send email via Resend", error);
    return {
      status: "error",
      message: "Något gick fel. Försök igen om en stund.",
    };
  }

  return {
    status: "success",
    message: "Tack för ditt meddelande! Vi hör av oss så snart vi kan.",
  };
}
