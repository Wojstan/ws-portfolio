import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  light?: boolean
  id?: string
  className?: string
}

export function Section({ id, children, light, className = '' }: Props) {
  return (
    <section
      id={id}
      className={`${className} sm:h-screen ${light && 'sm:bg-[#f5f5f5]'} flex items-center justify-center text-justify sm:text-center py-8`}
    >
      <div className="max-w-screen-xl m-auto">{children}</div>
    </section>
  )
}
