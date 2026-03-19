import type { HTMLAttributes, ReactNode } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Card({ children, className, ...props }: Props) {
  return (
    <div {...props} className={['card-surface', className ?? ''].join(' ')}>
      {children}
    </div>
  )
}

