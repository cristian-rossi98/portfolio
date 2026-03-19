import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  leftIcon?: ReactNode
}

const variantClass: Record<Variant, string> = {
  primary:
    'bg-[color:var(--app-fg)] text-[color:var(--app-bg)] hover:opacity-90 active:opacity-85 border border-[color:var(--app-border)] motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 transition-transform',
  secondary:
    'bg-[color:var(--app-surface)] text-[color:var(--app-fg)] hover:bg-[color:var(--app-surface2)] active:opacity-95 border border-[color:var(--app-border)] motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 transition-transform',
  ghost:
    'bg-transparent text-[color:var(--app-fg)] hover:bg-[color:var(--app-surface2)] active:opacity-90 border border-transparent',
}

export function Button({ variant = 'secondary', leftIcon, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={[
        'focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-[background-color,color,box-shadow,transform] duration-200 ease-out',
        variantClass[variant],
        className ?? '',
      ].join(' ')}
    >
      {leftIcon ? <span className="inline-flex size-4 items-center">{leftIcon}</span> : null}
      <span>{props.children}</span>
    </button>
  )
}

