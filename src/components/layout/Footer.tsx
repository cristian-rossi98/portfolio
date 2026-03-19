import { useI18n } from '../../app/providers/I18nProvider'
import { Container } from './Container'
import { Icon } from '../ui/Icon'

export function Footer() {
  const { content } = useI18n()
  const footer = content.footer
  return (
    <footer id="footer" className="scroll-mt-header border-t border-[color:var(--app-border)] py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-base font-semibold tracking-tight text-[color:var(--app-fg)]">
              {footer.title}
            </h2>
            {footer.note ? (
              <p className="mt-2 text-sm leading-6 text-[color:var(--app-fgMuted)]">{footer.note}</p>
            ) : null}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
            {footer.links.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={l.ariaLabel ?? l.label}
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-[color:var(--app-border)] bg-[color:var(--app-surface)] px-3 py-2 text-sm text-[color:var(--app-fg)] transition-colors hover:bg-[color:var(--app-surface2)]"
              >
                {l.icon ? (
                  <span className="inline-flex size-4">
                    <Icon name={l.icon} className="size-4" />
                  </span>
                ) : null}
                <span>{l.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-[color:var(--app-border)] pt-6" />
        <div className="pt-4 text-center text-xs text-[color:var(--app-fgMuted)]">
          © {new Date().getFullYear()} Cristian Rossi. Feito com ♥ em Marília (SP), Brasil.
        </div>
      </Container>
    </footer>
  )
}

