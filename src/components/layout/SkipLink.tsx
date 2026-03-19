export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#main"
      className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:border focus:border-[color:var(--app-border)] focus:bg-[color:var(--app-surface2)] focus:px-4 focus:py-2 focus:text-sm focus:text-[color:var(--app-fg)]"
    >
      {label}
    </a>
  )
}

