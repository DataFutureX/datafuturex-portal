import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll to hash targets after SPA navigation (header-aware). */
export function HashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const id = decodeURIComponent(hash.replace(/^#/, ''))
    const scrollToTarget = () => {
      const el = document.getElementById(id)
      if (!el) return false
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return true
    }

    if (scrollToTarget()) return

    const t1 = window.setTimeout(scrollToTarget, 50)
    const t2 = window.setTimeout(scrollToTarget, 200)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [pathname, hash])

  return null
}
