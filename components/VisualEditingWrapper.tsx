'use client'

import { useEffect } from 'react'
import { enableVisualEditing } from '@sanity/visual-editing'

export default function VisualEditingWrapper() {
  useEffect(() => {
    const cleanup = enableVisualEditing({
      zIndex: 9999,
    })
    return () => cleanup()
  }, [])

  return null
}
