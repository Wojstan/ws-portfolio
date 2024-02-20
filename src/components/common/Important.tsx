import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Important({ children }: Props) {
  return <strong className="text-sub">{children}</strong>
}
