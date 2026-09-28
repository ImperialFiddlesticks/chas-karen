"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  MEMBER_COOKIE_MAX_AGE_SECONDS,
  MEMBER_COOKIE_NAME,
  getMemberPasswordHash,
  requireMemberPassword,
} from "@/lib/member-auth";

export type LoginState = {
  status: "idle" | "error";
  message: string;
};

export async function loginAction(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  const fromField = String(formData.get("from") ?? "/medlem");
  const from = fromField.startsWith("/medlem") ? fromField : "/medlem";

  if (!password) {
    return { status: "error", message: "Ange lösenordet." };
  }

  const expected = requireMemberPassword();
  if (password !== expected) {
    return { status: "error", message: "Fel lösenord. Försök igen." };
  }

  const hash = await getMemberPasswordHash();
  const store = await cookies();
  store.set(MEMBER_COOKIE_NAME, hash, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: MEMBER_COOKIE_MAX_AGE_SECONDS,
    path: "/",
  });

  redirect(from);
}

export async function logoutAction() {
  const store = await cookies();
  store.delete(MEMBER_COOKIE_NAME);
  redirect("/medlem/login");
}
