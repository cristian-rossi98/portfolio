import { useEffect, useMemo, useRef, useState } from 'react'
import { useI18n } from '../../app/providers/I18nProvider'
import { useActiveSection } from '../../lib/useActiveSection'
import { SECTION_ORDER } from '../../lib/sections'
import { useScrolled } from '../../lib/useScrolled'
import type { SectionId } from '../../types/content'
import { Container } from './Container'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { IconButton } from '../ui/IconButton'
import { Flag } from '../ui/Flag'
import { useTheme } from '../../app/providers/ThemeProvider'
import type { Theme } from '../../lib/theme'
import { FaMoon, FaSun } from 'react-icons/fa6'

type Props = {
  onNavigate?: (id: SectionId) => void
}

export function Header({ onNavigate }: Props) {
  const { content, locale, setLocale } = useI18n()
  const { theme, setTheme } = useTheme()
  const scrolled = useScrolled(12)
  const sectionIds = useMemo(() => SECTION_ORDER.filter((id) => id !== 'footer'), [])
  const active = useActiveSection({ sectionIds, headerOffsetPx: 104 })
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement | null>(null)
  const [themeOpen, setThemeOpen] = useState(false)
  const themeRef = useRef<HTMLDivElement | null>(null)

  const headerCls = scrolled
    ? 'border-[color:var(--app-border)] bg-[color:var(--app-header-bg)] shadow-[var(--app-header-shadow)] supports-[backdrop-filter]:bg-[color:var(--app-header-bg)]/95'
    : 'border-transparent bg-[color:var(--app-header-bgTransparent)] shadow-none supports-[backdrop-filter]:bg-[color:var(--app-header-bgTransparent)]/92'

  const navItems = content.header.nav
  const currentLocaleLabel =
    content.header.language.options.find((o) => o.locale === locale)?.label ?? locale

  useEffect(() => {
    if (!langOpen) return
    const onDown = (e: MouseEvent) => {
      if (!langRef.current) return
      if (e.target instanceof Node && !langRef.current.contains(e.target)) setLangOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLangOpen(false)
    }
    window.addEventListener('mousedown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [langOpen])

  useEffect(() => {
    if (!themeOpen) return
    const onDown = (e: MouseEvent) => {
      if (!themeRef.current) return
      if (e.target instanceof Node && !themeRef.current.contains(e.target)) setThemeOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setThemeOpen(false)
    }
    window.addEventListener('mousedown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [themeOpen])

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-40 border-b transition-colors',
          'supports-[backdrop-filter]:backdrop-blur',
          headerCls,
        ].join(' ')}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-3 sm:h-[72px]">
            <div className="flex items-center gap-3">
              <a
                href="#hero"
                className="focus-ring inline-flex size-10 items-center justify-center rounded-xl border border-[color:var(--app-border)] bg-[color:var(--app-surface)] text-sm font-semibold tracking-tight text-[color:var(--app-fg)] transition-colors hover:bg-[color:var(--app-surface2)]"
                aria-label={content.header.nav[0]?.label ?? 'Home'}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
                  onNavigate?.('hero')
                }}
              >
                {content.header.brandMark}
              </a>

              <nav className="hidden md:block" aria-label="Primary">
                <ul className="flex items-center gap-1">
                  {navItems.map((item) => {
                    const isActive = item.id === active
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={[
                            'focus-ring inline-flex items-center rounded-xl px-3 py-2 text-sm transition-colors',
                            'text-[color:var(--app-fg)]',
                            isActive
                              ? 'bg-[color:var(--app-surface2)]'
                              : 'text-[color:var(--app-fgMuted)] hover:bg-[color:var(--app-surface2)] hover:text-[color:var(--app-fg)]',
                          ].join(' ')}
                          aria-current={isActive ? 'page' : undefined}
                          onClick={(e) => {
                            e.preventDefault()
                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                            onNavigate?.(item.id)
                          }}
                        >
                          {item.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2">
                <a
                  className="focus-ring inline-flex items-center gap-2 rounded-xl border border-[color:var(--app-border)] bg-[color:var(--app-surface)] px-3 py-2 text-sm transition-colors hover:bg-[color:var(--app-surface2)]"
                  href={content.header.emailCta.href}
                >
                  <span className="inline-flex size-4">
                    <Icon name="email" />
                  </span>
                  <span>{content.header.emailCta.label}</span>
                </a>

                <div className="relative" ref={themeRef}>
                  {/* <button
                    type="button"
                    className="focus-ring inline-flex items-center gap-2 rounded-xl border border-[color:var(--app-border)] bg-[color:var(--app-surface)] px-3 py-2 text-sm transition-colors hover:bg-[color:var(--app-surface2)]"
                    aria-label="Theme"
                    aria-haspopup="menu"
                    aria-expanded={themeOpen}
                    onClick={() => setThemeOpen((v) => !v)}
                  >
                    <span className="inline-flex size-4 items-center justify-center text-[14px]">
                      {theme === 'dark' ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
                    </span>
                    <span className="min-w-[54px]">{theme === 'dark' ? 'Dark' : 'Light'}</span>
                    <span aria-hidden="true" className="text-[color:var(--app-fgMuted)]">
                      ▾
                    </span>
                  </button> */}

                  {themeOpen ? (
                    <div
                      role="menu"
                      aria-label="Theme"
                      className="card-surface absolute right-0 top-[calc(100%+10px)] w-[220px] overflow-hidden p-1"
                    >
                      {(['dark', 'light'] as Theme[]).map((opt) => {
                        const active = opt === theme
                        return (
                          <button
                            key={opt}
                            type="button"
                            role="menuitem"
                            className={[
                              'focus-ring flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors',
                              'text-[color:var(--app-fg)]',
                              active
                                ? 'bg-[color:var(--app-surface2)]'
                                : 'text-[color:var(--app-fgMuted)] hover:bg-[color:var(--app-surface2)] hover:text-[color:var(--app-fg)]',
                            ].join(' ')}
                            onClick={() => {
                              setTheme(opt)
                              setThemeOpen(false)
                            }}
                          >
                            <span className="flex items-center gap-2">
                              <span className="inline-flex size-4 items-center justify-center text-[14px]">
                                {opt === 'dark' ? (
                                  <FaMoon aria-hidden="true" />
                                ) : (
                                  <FaSun aria-hidden="true" />
                                )}
                              </span>
                              <span>{opt === 'dark' ? 'Dark' : 'Light'}</span>
                            </span>
                            {active ? (
                              <span aria-hidden="true">✓</span>
                            ) : (
                              <span aria-hidden="true" className="opacity-0">
                                ✓
                              </span>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  ) : null}
                </div>

                <div className="relative" ref={langRef}>
                  <button
                    type="button"
                    className="focus-ring inline-flex items-center gap-2 rounded-xl border border-[color:var(--app-border)] bg-[color:var(--app-surface)] px-3 py-2 text-sm transition-colors hover:bg-[color:var(--app-surface2)]"
                    aria-label={content.header.language.label}
                    aria-haspopup="menu"
                    aria-expanded={langOpen}
                    onClick={() => {
                      setLangOpen((v) => !v)
                    }}
                  >
                    <Flag locale={locale} />
                    <span className="min-w-[44px]">{currentLocaleLabel}</span>
                    <span aria-hidden="true" className="text-[color:var(--app-fgMuted)]">
                      ▾
                    </span>
                  </button>

                  {langOpen ? (
                    <div
                      role="menu"
                      aria-label={content.header.language.label}
                      className="card-surface absolute right-0 top-[calc(100%+10px)] w-[220px] overflow-hidden p-1"
                    >
                      {content.header.language.options.map((opt) => {
                        const active = opt.locale === locale
                        return (
                          <button
                            key={opt.locale}
                            type="button"
                            role="menuitem"
                            className={[
                              'focus-ring flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors',
                              'text-[color:var(--app-fg)]',
                              active
                                ? 'bg-[color:var(--app-surface2)]'
                                : 'text-[color:var(--app-fgMuted)] hover:bg-[color:var(--app-surface2)] hover:text-[color:var(--app-fg)]',
                            ].join(' ')}
                            onClick={() => {
                              setLocale(opt.locale)
                              setLangOpen(false)
                            }}
                          >
                            <span className="flex items-center gap-2">
                              <Flag locale={opt.locale} />
                              <span>{opt.label}</span>
                            </span>
                            {active ? <span aria-hidden="true">✓</span> : <span aria-hidden="true" className="opacity-0">✓</span>}
                          </button>
                        )
                      })}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="md:hidden">
                <IconButton
                  icon={<span aria-hidden="true">≡</span>}
                  label={content.a11y.openNavigation}
                  onClick={() => setMobileOpen(true)}
                />
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen ? (
        <div
          className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setMobileOpen(false)
          }}
        >
          <div className="mx-auto mt-4 w-[min(92vw,420px)] card-surface motion-safe:animate-[floaty_8s_ease-in-out_infinite] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out">
            <div className="flex items-center justify-between border-b border-[color:var(--app-border)] px-4 py-3">
              <div className="text-sm font-semibold text-[color:var(--app-fg)]">{content.header.brandMark}</div>
              <Button variant="ghost" onClick={() => setMobileOpen(false)}>
                {content.a11y.closeNavigation}
              </Button>
            </div>
            <div className="p-2">
              <ul className="flex flex-col">
                {navItems.map((item) => {
                  const isActive = item.id === active
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={[
                          'focus-ring flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors',
                          'text-[color:var(--app-fg)]',
                          isActive
                            ? 'bg-[color:var(--app-surface2)]'
                            : 'text-[color:var(--app-fgMuted)] hover:bg-[color:var(--app-surface2)] hover:text-[color:var(--app-fg)]',
                        ].join(' ')}
                        aria-current={isActive ? 'page' : undefined}
                        onClick={(e) => {
                          e.preventDefault()
                          setMobileOpen(false)
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                          onNavigate?.(item.id)
                        }}
                      >
                        <span>{item.label}</span>
                        <span aria-hidden="true" className="text-[color:var(--app-fgMuted)]">
                          →
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-2 grid grid-cols-2 gap-2 p-2">
                <a className="focus-ring card-surface-hover card-surface flex items-center justify-center gap-2 px-3 py-2 text-sm" href={content.header.emailCta.href}>
                  <span className="inline-flex size-4">
                    <Icon name="email" />
                  </span>
                  <span>{content.header.emailCta.label}</span>
                </a>
                <button
                  type="button"
                  className="focus-ring card-surface-hover card-surface flex items-center justify-center gap-2 px-3 py-2 text-sm"
                  onClick={() => setLocale(locale === 'en' ? 'pt-BR' : 'en')}
                >
                  <Flag locale={locale} />
                  <span>{currentLocaleLabel}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

