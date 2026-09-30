import type { ReactNode } from 'react'

const TONES = {
  yellow: '#F5F65A',
  lavender: '#D8C4F7',
  mint: '#8AEFC1',
  peach: '#FFC98B',
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
    <section className="border-b-[3px] border-black" style={{ backgroundColor: TONES[tone] }}>
      <div className="px-6 pt-12 pb-14 md:px-12 md:pt-16 md:pb-20">
        <div className="border-b-[3px] border-black pb-5">
          <span className="text-sm font-bold uppercase tracking-[0.2em]">{eyebrow}</span>
        </div>
        <h1 className="mt-8 max-w-4xl text-4xl leading-[1.02] font-extrabold uppercase tracking-tight text-balance md:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed font-semibold">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
