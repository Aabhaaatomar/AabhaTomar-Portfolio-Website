import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)
  const pos = useRef({ x: -300, y: -300 })
  const current = useRef({ x: -300, y: -300 })

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', move)

    let raf
    const animate = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.12
      current.current.y += (pos.current.y - current.current.y) * 0.12
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x - 250}px, ${current.current.y - 250}px, 0)`
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full z-0 hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(168,85,247,0.10) 0%, rgba(168,85,247,0.03) 40%, transparent 70%)',
        willChange: 'transform',
      }}
      aria-hidden="true"
    />
  )
}
