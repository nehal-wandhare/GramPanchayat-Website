import "./globals.css";

export const metadata = {
  title: "Gram Panchayat Website",
  description: "Official Gram Panchayat Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
