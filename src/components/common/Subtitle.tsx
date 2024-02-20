import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Subtitle({ children }: Props) {
  return <h2 className="text-center font-extrabold uppercase text-sub tracking-[4px] mb-4">{children}</h2>
}
