"use client";

import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSideBar } from "@/components";
import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"]  
})

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboardRoute = pathname?.includes("dashboard");

  return (
    <html lang="pt-br">
      <body
        className={roboto.className}
      >
        <SidebarProvider>
          {isDashboardRoute && <AppSideBar />}
          <main>
            {isDashboardRoute && <SidebarTrigger />}
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
