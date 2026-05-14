import "./globals.css";

export const metadata = {
  title: "Baoheyi Dumpling House",
  description: "Fresh handmade dumplings, noodles, rice bowls and frozen dumplings in Damansara Perdana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
