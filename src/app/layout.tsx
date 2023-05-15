import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

export const metadata = {
  title: "Water Monster Investment",
  description: "Generated by Water Monster",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
