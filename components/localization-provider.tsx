"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type LocaleData = Record<string, any>
type SupportedLocales = "pt-BR" | "en-US" | "es-ES"

interface LocalizationContextType {
  locale: SupportedLocales
  t: (path: string) => string
  changeLocale: (newLocale: SupportedLocales) => Promise<void>
  localeData: LocaleData
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined)

export function useLocalization() {
  const context = useContext(LocalizationContext)
  if (context === undefined) {
    throw new Error("useLocalization must be used within a LocalizationProvider")
  }
  return context
}

interface LocalizationProviderProps {
  children: ReactNode
  defaultLocale?: SupportedLocales
}

export function LocalizationProvider({ children, defaultLocale = "pt-BR" }: LocalizationProviderProps) {
  const [locale, setLocale] = useState<SupportedLocales>(defaultLocale)
  const [localeData, setLocaleData] = useState<LocaleData>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadLocaleData(locale)
  }, [locale])

  async function loadLocaleData(locale: SupportedLocales) {
    setLoading(true)
    try {
      // In a real app, this would be a dynamic import or API call
      const data = await import(`../localization/${locale}.json`)
      setLocaleData(data)
    } catch (error) {
      console.error(`Failed to load locale data for ${locale}`, error)
      // Fallback to default locale if the requested one fails
      if (locale !== defaultLocale) {
        loadLocaleData(defaultLocale)
      }
    } finally {
      setLoading(false)
    }
  }

  function getNestedValue(obj: any, path: string): string {
    const keys = path.split(".")
    let current = obj

    for (const key of keys) {
      if (current === undefined || current === null) {
        return path // Return the path if we can't traverse further
      }
      current = current[key]
    }

    return current !== undefined && current !== null ? String(current) : path // Return the path if the value is undefined
  }

  const t = (path: string): string => {
    if (loading) return path
    return getNestedValue(localeData, path)
  }

  const changeLocale = async (newLocale: SupportedLocales) => {
    setLocale(newLocale)
  }

  return (
    <LocalizationContext.Provider value={{ locale, t, changeLocale, localeData }}>
      {children}
    </LocalizationContext.Provider>
  )
}

