import { useEffect, useRef, useState } from 'react'

export type UseInViewOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useInView<T extends HTMLElement>(options: UseInViewOptions = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -10% 0px', once = true } = options

  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [once, rootMargin, threshold])

  return { ref, isInView }
}
