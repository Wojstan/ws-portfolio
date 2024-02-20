import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'

export function AnimatedDeveloper() {
  const registerTextRef = useRef(null)
  const cursorRef = useRef(null)
  const aboutTextRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(TextPlugin)
    gsap.to(cursorRef.current, {
      opacity: 0,
      ease: 'power2.inOut',
      repeat: -1,
    })

    gsap.to(registerTextRef.current, {
      duration: 2,
      text: 'SOFTWARE ENGINEER />',
      delay: 0.5,
    })
  }, [aboutTextRef])

  return (
    <>
      <h3 className="text-sub text-2xl mb-10">
        {'<'}
        <span ref={registerTextRef}></span>
        <span ref={cursorRef}>_</span>
      </h3>

    </>
  )
}
