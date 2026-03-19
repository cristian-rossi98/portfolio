import { useI18n } from '../../app/providers/I18nProvider'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'

export function HeroSection() {
  const { content } = useI18n()
  const hero = content.hero

  return (
    <section id="hero" className="scroll-mt-header pt-24 sm:pt-28">
      <div className="bg-premium">
        <Container>
          <div className="grid gap-10 pb-12 sm:pb-14 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-7">
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-[color:var(--app-fgMuted)] sm:text-lg">
                {hero.eyebrow}
              </p>

              <h1 className="text-premium-headline mt-5 pb-[0.15em] text-balance text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block">{hero.headline}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-[color:var(--app-fgMuted)] sm:text-lg">
                {hero.subheadline}
              </p>
              <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-[color:var(--app-fgMuted)] sm:text-base">
                {hero.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={hero.ctas.primary.href}
                  target={hero.ctas.primary.href.startsWith('http') ? '_blank' : '_blank'}
                  rel="noreferrer"
                  className="inline-flex"
                >
                  <Button variant="primary" leftIcon={hero.ctas.primary.icon ? <Icon name={hero.ctas.primary.icon} /> : undefined}>
                    {hero.ctas.primary.label}
                  </Button>
                </a>

                <div className="flex items-center gap-2 sm:ml-1">
                  {hero.socials.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded-xl border border-[color:var(--app-border)] bg-[color:var(--app-surface)] px-3 py-2 text-sm transition-[background-color,transform] duration-200 ease-out hover:bg-[color:var(--app-surface2)] motion-safe:hover:-translate-y-0.5"
                      aria-label={s.ariaLabel ?? s.label}
                    >
                      {s.icon ? (
                        <span className="inline-flex size-4">
                          <Icon name={s.icon} className="size-4" />
                        </span>
                      ) : null}
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="card-surface relative overflow-hidden p-5 sm:p-6 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-10 opacity-70 [mask-image:radial-gradient(closest-side,black,transparent)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-white/5 to-transparent dark:from-white/5" />
                  <div className="absolute left-[-20%] top-1/2 h-10 w-[60%] -translate-y-1/2 rotate-12 bg-black/5 blur-sm motion-safe:animate-shimmer dark:bg-white/10" />
                </div>

                <div className="relative">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[color:var(--app-border)] bg-[color:var(--app-surface2)]">
                    <img
                      src={hero.portrait.src}
                      alt={hero.portrait.alt}
                      className="h-full w-full object-cover object-center"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
