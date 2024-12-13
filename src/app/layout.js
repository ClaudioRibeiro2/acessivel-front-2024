"use client";

import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AcessivelIcon, AppSideBar } from "@/components";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
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
