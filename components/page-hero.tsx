import type { ReactNode } from 'react'

const TONES = {
  yellow: '#F0D98C',
  lavender: '#D9D2EE',
  mint: '#B9E3C9',
  peach: '#F3C89A',
} as const

export function PageHero({
  eyebrow,
  title,
  intro,
  fileNumber,
  tone = 'yellow',
  children,
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  fileNumber?: string
  tone?: keyof typeof TONES
  children?: ReactNode
}) {
  return (
    <section style={{ backgroundColor: TONES[tone] }}>
      <div className="px-6 pt-12 pb-14 md:px-12 md:pt-16 md:pb-20">
        <div className="border-b border-ink/20 pb-5">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-ink">{eyebrow}</span>
        </div>
        <h1 className="mt-8 max-w-4xl text-4xl leading-[1.02] font-extrabold uppercase tracking-tight text-balance text-ink md:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed font-semibold text-ink">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
