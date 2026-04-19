import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Md. Moshiur Rahman – CV",
  description: "Personal CV of Md. Moshiur Rahman – CS Instructor & Researcher at NIET, Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
