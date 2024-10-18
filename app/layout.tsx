import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation/navigation";
import { Box, Stack } from "@mui/material";
import Footer from "./footer/footer";

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
        style={{ padding: 0, margin: 0, backgroundColor: 'rgba(255, 170, 136, 0.3)' }}
      >
        <Stack sx={{ justifyContent: 'space-between', minHeight: '100vh !important'}}>
          <Box>
            <Navigation />
            {children}
          </Box>
          <Footer />
        </Stack>
      </body>
    </html>
  );
}
