import type { ReactNode } from 'react'
import type { SectionId } from '../../types/content'
import { Container } from './Container'

type Props = {
  id: SectionId
  title: string
  subtitle?: string
  children: ReactNode
}

export function Section({ id, title, subtitle, children }: Props) {
  const titleId = `${id}-title`
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="section-divider scroll-mt-header py-14 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="mb-8 sm:mb-10">
          <h2
            id={titleId}
            className="text-balance text-2xl font-semibold tracking-tight text-[color:var(--app-fg)] sm:text-3xl lg:text-[34px]"
          >
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-pretty text-sm leading-7 text-[color:var(--app-fgMuted)] sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  )
}

