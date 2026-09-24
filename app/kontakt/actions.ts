"use server";

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

  const errors: ContactState["errors"] = {};
  if (!fields.name) errors.name = "Fyll i ditt namn.";
  if (!EMAIL_PATTERN.test(fields.email))
    errors.email = "Fyll i en giltig e-postadress.";
  if (!fields.message) errors.message = "Skriv ett meddelande.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Kontrollera fälten och försök igen.",
      errors,
      fields,
    };
  }

  // TODO: Deliver the message (e.g. email via Resend, or save to a database).
  console.log("Contact form submission", fields);

  return {
    status: "success",
    message: "Tack för ditt meddelande! Vi hör av oss så snart vi kan.",
  };
}
