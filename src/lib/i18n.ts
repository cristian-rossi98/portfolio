import type { Locale } from '../types/content'

const STORAGE_KEY = 'portfolio:locale'

export function getInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'pt-BR') return stored
  const preferred = navigator.language
  if (preferred.toLowerCase().startsWith('pt')) return 'pt-BR'
  return 'en'
}

export function persistLocale(locale: Locale) {
  localStorage.setItem(STORAGE_KEY, locale)
}

