import type { Locale } from '../../types/content'

type Props = {
  locale: Locale
  className?: string
}

export function Flag({ locale, className }: Props) {
  const cls = ['h-3.5 w-5 overflow-hidden rounded-sm ring-1 ring-white/15', className ?? ''].join(
    ' ',
  )

  if (locale === 'pt-BR') {
    return (
      <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
        <rect width="20" height="14" fill="#0B8F3E" />
        <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#F7C948" />
        <circle cx="10" cy="7" r="2.6" fill="#1F3B82" />
      </svg>
    )
  }

  // EN (use US-style flag for a familiar cue)
  return (
    <svg viewBox="0 0 20 14" className={cls} aria-hidden="true">
      <rect width="20" height="14" fill="#ffffff" />
      <g fill="#d64545">
        <rect y="0" width="20" height="1.2" />
        <rect y="2.4" width="20" height="1.2" />
        <rect y="4.8" width="20" height="1.2" />
        <rect y="7.2" width="20" height="1.2" />
        <rect y="9.6" width="20" height="1.2" />
        <rect y="12.0" width="20" height="1.2" />
      </g>
      <rect width="8.5" height="7.2" fill="#1f3b82" />
    </svg>
  )
}

