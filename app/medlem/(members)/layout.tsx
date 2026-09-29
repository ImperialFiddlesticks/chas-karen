import MemberHeader from "../components/MemberHeader";

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MemberHeader />
      {children}
    </>
  );
}
