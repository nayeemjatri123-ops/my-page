import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahady AI — LinkedIn Personal Brand Agent",
  description: "AI workspace for Mahady's LinkedIn profile, content and publishing workflow."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
