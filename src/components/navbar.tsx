// components/navbar.tsx
"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b bg-background sticky top-0">
      {/* Left: Sidebar Trigger */}
      <div className="flex items-center justify-center ">
        <SidebarTrigger className="mr-2 cursor-pointer" />
        <img
          src="/logo.png" // replace with your logo path
          alt="Logo"
          className="h-6 w-6 md:hidden"
        />
      </div>

      {/* Right: Theme Toggle */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
