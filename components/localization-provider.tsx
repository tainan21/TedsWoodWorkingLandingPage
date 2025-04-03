"use client";
// components/localization-provider.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Idiomas suportados
type Locale = "pt-BR" | "en-US" | "es-ES";

// Traduções
type Translations = {
  [key in Locale]: {
    [key: string]: string;
  };
};

// Contexto de localização
interface LocalizationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  isRTL: boolean;
  alternateUrls: Record<string, string>;
}

const translations: Translations = {
  "pt-BR": {
    "common.home": "Início",
    "common.about": "Sobre",
    "common.contact": "Contato",
    "landing.title": "TED Woodworking Plans - Projetos de Marcenaria Premium",
    "landing.subtitle": "Mais de 16.000 planos detalhados para todos os níveis",
    "cta.getAccess": "Obter Acesso",
    "cta.learnMore": "Saiba Mais",
  },
  "en-US": {
    "common.home": "Home",
    "common.about": "About",
    "common.contact": "Contact",
    "landing.title": "TED Woodworking Plans - Premium Woodworking Projects",
    "landing.subtitle": "Over 16,000 detailed plans for all skill levels",
    "cta.getAccess": "Get Access",
    "cta.learnMore": "Learn More",
  },
  "es-ES": {
    "common.home": "Inicio",
    "common.about": "Acerca de",
    "common.contact": "Contacto",
    "landing.title": "TED Woodworking Plans - Proyectos de Carpintería Premium",
    "landing.subtitle": "Más de 16.000 planes detallados para todos los niveles",
    "cta.getAccess": "Obtener Acceso",
    "cta.learnMore": "Saber Más",
  },
};

// Crie o contexto
const LocalizationContext = createContext<LocalizationContextType | undefined>(
  undefined
);

// Hook personalizado para usar o contexto
export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error(
      "useLocalization must be used within a LocalizationProvider"
    );
  }
  return context;
};

// Provedor de localização
export const LocalizationProvider: React.FC<{
  children: React.ReactNode;
  defaultLocale?: Locale;
}> = ({ children, defaultLocale = "pt-BR" }) => {
  const pathname = usePathname();

  // Use a rota para determinar o idioma inicial ou use o padrão
  const getInitialLocale = (): Locale => {
    // Verifica se estamos no navegador
    if (typeof window !== "undefined") {
      // Verifica URL para prefixo de idioma
      if (pathname.startsWith("/en")) return "en-US";
      if (pathname.startsWith("/es")) return "es-ES";

      // Verifica localStorage para preferência salva
      const savedLocale = localStorage.getItem("preferred-locale");
      if (
        savedLocale === "en-US" ||
        savedLocale === "pt-BR" ||
        savedLocale === "es-ES"
      ) {
        return savedLocale;
      }

      // Verifica o idioma do navegador
      const browserLang = navigator.language;
      if (browserLang.startsWith("en")) return "en-US";
      if (browserLang.startsWith("es")) return "es-ES";
    }

    // Retorna o idioma padrão
    return defaultLocale;
  };

  const [locale, setLocale] = useState<Locale>(defaultLocale);

  // Inicializa o idioma após a montagem do componente
  useEffect(() => {
    setLocale(getInitialLocale());
  }, []);

  // Atualiza o localStorage quando o idioma muda
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-locale", locale);
    }
  }, [locale]);

  // Função de tradução
  const t = (key: string): string => {
    return translations[locale][key] || key;
  };

  // Verificação de idiomas RTL (direita para esquerda)
  const isRTL = false; // Nenhum dos idiomas atuais é RTL, mas pode ser expandido no futuro

  // Gera URLs alternativas para uso em SEO
  const pathWithoutLang = pathname.replace(/^\/(en|es)/, "");

  const alternateUrls = {
    "pt-BR": `https://www.tedsplan.shop${pathWithoutLang}`,
    "en-US": `https://www.tedsplan.shop/en${pathWithoutLang}`,
    "es-ES": `https://www.tedsplan.shop/es${pathWithoutLang}`,
  };

  return (
    <LocalizationContext.Provider
      value={{ locale, setLocale, t, isRTL, alternateUrls }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

// Componente para inserir hrefLang tags para SEO
export const HrefLangTags: React.FC = () => {
  const { alternateUrls } = useLocalization();

  return (
    <>
      <link rel="alternate" hrefLang="pt-BR" href={alternateUrls["pt-BR"]} />
      <link rel="alternate" hrefLang="en-US" href={alternateUrls["en-US"]} />
      <link rel="alternate" hrefLang="es-ES" href={alternateUrls["es-ES"]} />
      <link rel="alternate" hrefLang="x-default" href={alternateUrls["pt-BR"]} />
    </>
  );
};

export default LocalizationProvider;