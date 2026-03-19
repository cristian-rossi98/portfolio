import { useMemo, useState } from 'react'
import { useI18n } from '../../app/providers/I18nProvider'
import { Section } from '../layout/Section'
import { Card } from '../ui/Card'
import { Icon } from '../ui/Icon'
import { Modal } from '../ui/Modal'

export function ProjectsSection() {
  const { content } = useI18n()
  const projects = content.projects
  const [activeDemoId, setActiveDemoId] = useState<string | null>(null)

  const activeDemo = useMemo(
    () => projects.items.find((project) => project.id === activeDemoId && project.demoVideo),
    [activeDemoId, projects.items],
  )

  return (
    <>
      <Section id="projects" title={projects.title} subtitle={projects.subtitle}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((p) => (
            <Card
              key={p.id}
              className="group card-surface-hover overflow-hidden"
            >
              {p.image ? (
                <div className="aspect-[16/10] overflow-hidden border-b border-[color:var(--app-border)] bg-[color:var(--app-surface)]">
                  <img
                    src={p.image.src}
                    alt={p.image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              ) : null}

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold tracking-tight text-[color:var(--app-fg)]">
                    {p.name}
                  </h3>
                </div>

                <p className="mt-2 text-pretty text-sm leading-7 text-[color:var(--app-fgMuted)]">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[color:var(--app-border)] bg-[color:var(--app-surface)] px-3 py-1 text-xs text-[color:var(--app-fgMuted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.links.map((l) => {
                    const isDemoLink = p.demoVideo && l.href === '#demo'

                    if (isDemoLink) {
                      return (
                        <button
                          key={`${p.id}-${l.label}`}
                          type="button"
                          aria-label={l.ariaLabel ?? l.label}
                          onClick={() => setActiveDemoId(p.id)}
                          className="focus-ring inline-flex items-center gap-2 rounded-xl border border-[color:var(--app-border)] bg-[color:var(--app-surface)] px-3 py-2 text-sm text-[color:var(--app-fg)] transition-[background-color,transform] duration-200 ease-out hover:bg-[color:var(--app-surface2)] motion-safe:hover:-translate-y-0.5"
                        >
                          {l.icon ? (
                            <span className="inline-flex size-4">
                              <Icon name={l.icon} className="size-4" />
                            </span>
                          ) : null}
                          <span>{l.label}</span>
                        </button>
                      )
                    }

                    return (
                      <a
                        key={l.href + l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={l.ariaLabel ?? l.label}
                        className="focus-ring inline-flex items-center gap-2 rounded-xl border border-[color:var(--app-border)] bg-[color:var(--app-surface)] px-3 py-2 text-sm text-[color:var(--app-fg)] transition-[background-color,transform] duration-200 ease-out hover:bg-[color:var(--app-surface2)] motion-safe:hover:-translate-y-0.5"
                      >
                        {l.icon ? (
                          <span className="inline-flex size-4">
                            <Icon name={l.icon} className="size-4" />
                          </span>
                        ) : null}
                        <span>{l.label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Modal
        open={Boolean(activeDemo?.demoVideo)}
        title={activeDemo ? `${activeDemo.name} — Demo` : 'Demo'}
        onClose={() => setActiveDemoId(null)}
        closeLabel={content.a11y.closeModal}
      >
        {activeDemo?.demoVideo ? (
          <div className="space-y-4">
            <video
              key={activeDemo.demoVideo}
              controls
              preload="metadata"
              className="w-full rounded-2xl border border-[color:var(--app-border)] bg-black"
            >
              <source src={activeDemo.demoVideo} type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        ) : null}
      </Modal>
    </>
  )
}