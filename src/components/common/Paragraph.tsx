import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Paragraph({ children }: Props) {
  return <p className="text-light font-light tracking-wider leading-7">{children}</p>
}
