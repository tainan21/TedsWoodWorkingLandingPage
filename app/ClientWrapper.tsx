// components/ClientWrapper.tsx
"use client";

import { useEffect } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import "../lib/i18n"; // Importa as traduções
import { Suspense } from "react";

interface Props {
  children: React.ReactNode;
}

const ClientWrapper = ({ children }: Props) => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-out", once: true });
  }, []);

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={false} 
      disableTransitionOnChange
    >
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        {children}
      </Suspense>
    </ThemeProvider>
  );
};

export default ClientWrapper;
