import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode
  label: string
}

export function IconButton({ icon, label, className, ...props }: Props) {
  return (
    <button
      {...props}
      aria-label={label}
      className={[
        'focus-ring inline-flex size-10 items-center justify-center rounded-xl border border-[color:var(--app-border)] bg-[color:var(--app-surface)] text-[color:var(--app-fg)] transition-[background-color,transform] duration-200 ease-out hover:bg-[color:var(--app-surface2)] active:opacity-95 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0',
        className ?? '',
      ].join(' ')}
    >
      <span className="inline-flex size-5 items-center justify-center">{icon}</span>
    </button>
  )
}

