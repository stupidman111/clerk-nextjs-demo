import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body
          className={`antialiased min-h-screen flex justify-center items-center`}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
