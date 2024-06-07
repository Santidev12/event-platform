import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const poppins = Poppins({
   subsets: ["latin"] ,
   weight: ['400', '500', '600', '700'],
   variable: '--font-poppins'
  });

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event managment",
  icons: {
    icon: '/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={poppins.variable}>
        
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
