import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export function Paragraph({ children, className = '' }: Props) {
  return <p className={`text-light text-sm font-light tracking-wider leading-6 sm:leading-7 ${className}`}>{children}</p>
}
