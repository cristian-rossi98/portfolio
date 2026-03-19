import { useEffect, useMemo, useState } from 'react'
import type { SectionId } from '../types/content'

type Options = {
  sectionIds: SectionId[]
  headerOffsetPx?: number
}

export function useActiveSection({ sectionIds, headerOffsetPx = 96 }: Options) {
  const [active, setActive] = useState<SectionId>(sectionIds[0] ?? 'hero')

  const idsKey = useMemo(() => sectionIds.join(','), [sectionIds])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const visibleRatios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          visibleRatios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0)
        }

        // Pick the most visible section. If equal, pick the one closest to top.
        let bestId: SectionId = active
        let bestRatio = -1
        let bestTop = Number.POSITIVE_INFINITY

        for (const el of elements) {
          const ratio = visibleRatios.get(el.id) ?? 0
          if (ratio <= 0) continue
          const top = el.getBoundingClientRect().top
          if (ratio > bestRatio || (ratio === bestRatio && top < bestTop)) {
            bestRatio = ratio
            bestTop = top
            bestId = el.id as SectionId
          }
        }

        if (bestRatio > 0) setActive(bestId)
      },
      {
        root: null,
        rootMargin: `-${headerOffsetPx}px 0px -50% 0px`,
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
      },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey, headerOffsetPx])

  return active
}

