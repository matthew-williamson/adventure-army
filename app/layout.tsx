import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation/navigation";
import { Stack } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adventure Army",
  description: "Let's go on an adventure!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ maxWidth: 1200, margin: "auto" }}
      >
        <Stack spacing={1}>
          <Navigation />
          {children}
        </Stack>
      </body>
    </html>
  );
}
