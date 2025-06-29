import PrivateHeader from "@/components/layouts/Private-Header";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PrivateHeader />
      {children}
    </>
  );
}
