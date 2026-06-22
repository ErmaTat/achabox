import { useEffect, useRef } from 'react'

/**
 * Bidirectional scroll-reveal.
 * Adds 'in-view' when the element enters the viewport,
 * removes it when the element leaves — so animations replay on scroll-up.
 */
export function useInView(threshold = 0.15, rootMargin = '0px 0px -40px 0px') {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        } else {
          entry.target.classList.remove('in-view')
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
