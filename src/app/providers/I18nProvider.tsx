/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useMemo, useState } from 'react'
import { contentEn } from '../../content/en'
import { contentPtBR } from '../../content/pt-BR'
import { getInitialLocale, persistLocale } from '../../lib/i18n'
import type { Locale, PortfolioContent } from '../../types/content'

type I18nContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  content: PortfolioContent
}

const I18nContext = createContext<I18nContextValue | null>(null)

const contentByLocale: Record<Locale, PortfolioContent> = {
  en: contentEn,
  'pt-BR': contentPtBR,
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      return getInitialLocale()
    } catch {
      return 'en'
    }
  })

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    persistLocale(next)
  }

  const value = useMemo<I18nContextValue>(() => {
    return { locale, setLocale, content: contentByLocale[locale] }
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

