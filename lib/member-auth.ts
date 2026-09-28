export const MEMBER_COOKIE_NAME = "chas_member";
export const MEMBER_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 180; // 180 days

export function requireMemberPassword(): string {
  const password = process.env.MEMBER_PASSWORD;
  if (!password) {
    throw new Error(
      "MEMBER_PASSWORD är inte satt. Sätt miljövariabeln för att aktivera medlemsområdet.",
    );
  }
  return password;
}

async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function getMemberPasswordHash(): Promise<string> {
  return sha256Hex(requireMemberPassword());
}

// Shared by proxy.ts (reads the cookie via NextRequest) and Server Actions
// (read it via next/headers `cookies()`) so both sides use identical logic.
export async function isMember(
  cookieValue: string | undefined,
): Promise<boolean> {
  if (!cookieValue) return false;
  const expected = await getMemberPasswordHash();
  return cookieValue === expected;
}
