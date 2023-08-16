import { useEffect, useState } from 'react'

export default function useViewportWidth() {
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    setViewportWidth(window.innerWidth)
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth
      setViewportWidth(newWidth)
    }
    window.addEventListener('resize', updateWindowDimensions)
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  return viewportWidth
}
