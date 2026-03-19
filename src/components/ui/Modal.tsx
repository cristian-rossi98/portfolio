import { useEffect, useId, useRef } from 'react'

function getFocusable(container: HTMLElement): HTMLElement[] {
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ]
  return Array.from(container.querySelectorAll<HTMLElement>(selectors.join(','))).filter(
    (el) => !el.hasAttribute('aria-hidden'),
  )
}

type Props = {
  open: boolean
  title: string
  onClose: () => void
  closeLabel: string
  children: React.ReactNode
}

export function Modal({ open, title, onClose, closeLabel, children }: Props) {
  const titleId = useId()
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    restoreFocusRef.current = document.activeElement as HTMLElement | null

    const prevOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'

    const panel = panelRef.current
    if (panel) {
      const focusables = getFocusable(panel)
        ; (focusables[0] ?? panel).focus()
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const panel = panelRef.current
      if (!panel) return
      const focusables = getFocusable(panel)
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      } else if (e.shiftKey && (active === first || active === panel)) {
        e.preventDefault()
        last.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.documentElement.style.overflow = prevOverflow
      restoreFocusRef.current?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-end justify-center bg-[color:var(--app-overlay)] p-3 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="w-full max-w-3xl overflow-hidden rounded-2xl border border-[color:var(--app-border)] bg-[color:var(--app-modal-bg)] shadow-[var(--app-shadowLift)] motion-safe:animate-[floaty_7s_ease-in-out_infinite]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[color:var(--app-border)] bg-[color:var(--app-modal-header-bg)] px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <h3
              id={titleId}
              className="truncate text-base font-semibold tracking-tight text-[color:var(--app-fg)]"
            >
              {title}
            </h3>
          </div>
          <button
            type="button"
            className="focus-ring inline-flex rounded-lg px-2 py-1 text-sm text-[color:var(--app-fgMuted)] hover:bg-[color:var(--app-surface2)]"
            onClick={onClose}
            aria-label={closeLabel}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="max-h-[78vh] overflow-auto bg-[color:var(--app-modal-bg)] px-5 py-5 sm:px-6">{children}</div>
      </div>
    </div>
  )
}

