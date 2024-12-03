"use client";

import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AcessivelIcon, AppSideBar } from "@/components";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboardRoute = pathname?.includes("dashboard");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          {isDashboardRoute && <AppSideBar />}
          <main>
            <div className="flex justify-between px-5">
              <AcessivelIcon />
              {isDashboardRoute && <SidebarTrigger />}
            </div>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
