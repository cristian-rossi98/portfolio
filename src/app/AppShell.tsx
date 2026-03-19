import { useEffect } from 'react'
import { I18nProvider, useI18n } from './providers/I18nProvider'
import { ThemeProvider } from './providers/ThemeProvider'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { SkipLink } from '../components/layout/SkipLink'
import { Container } from '../components/layout/Container'
import { PageSections } from './PageSections'

function ShellInner() {
  const { content, locale } = useI18n()

  useEffect(() => {
    document.title = content.meta.title
    const el = document.querySelector('meta[name="description"]')
    if (el) el.setAttribute('content', content.meta.description)
    document.documentElement.lang = locale
  }, [content.meta.description, content.meta.title, locale])

  return (
    <div className="min-h-svh">
      <SkipLink label={content.a11y.skipToContent} />
      <Header />

      <main id="main" className="pt-2">
        <Container>
          <div aria-hidden="true" className="h-6 sm:h-8" />
        </Container>

        <PageSections />
      </main>

      <Footer />
    </div>
  )
}

export function AppShell() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <ShellInner />
      </I18nProvider>
    </ThemeProvider>
  )
}

