import { ChevronDown } from 'lucide-react'
import { NAVY } from '@/components/concept/theme'

export function Marquee({ text }: { text: string }) {
  return (
    <section
      className="overflow-hidden py-5"
      style={{ backgroundColor: NAVY }}
      aria-hidden="true"
    >
      <div className="flex animate-[marquee_22s_linear_infinite] gap-8 whitespace-nowrap text-2xl font-bold uppercase tracking-tight text-white will-change-transform">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="flex items-center gap-8">
            {text}
            <span className="text-copper-soft">★</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export function StepList({
  steps,
  bg,
}: {
  steps: { number: string; title: string; description: string }[]
  bg?: string
}) {
  return (
    <ul className="border-t border-rule" style={bg ? { backgroundColor: bg } : undefined}>
      {steps.map((step, i) => (
        <li
          key={step.number}
          className={`flex items-center justify-between gap-4 border-rule px-6 py-5 md:px-12 ${
            i !== steps.length - 1 ? 'border-b' : ''
          }`}
        >
          <div className="flex items-center gap-5">
            <span className="text-lg font-bold tabular-nums text-ink">{step.number}</span>
            <div>
              <p className="text-lg font-bold uppercase tracking-wide text-ink">{step.title}</p>
              <p className="hidden text-sm font-medium text-ink-soft md:block">{step.description}</p>
            </div>
          </div>
          <ChevronDown className="size-5 shrink-0 text-ink-soft" strokeWidth={2.5} />
        </li>
      ))}
    </ul>
  )
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-rule bg-card p-7 shadow-sm">
      <p className="text-5xl font-bold tabular-nums text-ink md:text-6xl">{value}</p>
      <p className="mt-3 text-sm leading-relaxed font-semibold text-ink-soft">{label}</p>
    </div>
  )
}

export function ChecklistCard({
  title,
  items,
  bg = 'var(--card)',
}: {
  title: string
  items: string[]
  bg?: string
}) {
  return (
    <div className="rounded-2xl border border-rule p-7 shadow-sm" style={{ backgroundColor: bg }}>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-ink">{title}</p>
      <ul className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed font-medium text-ink">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-oxblood" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function FaqBlock({
  items,
}: {
  items: { q: string; a: string }[]
}) {
  return (
    <div className="border-t border-rule">
      {items.map((item, i) => (
        <div
          key={item.q}
          className={`px-6 py-6 md:px-12 ${i !== items.length - 1 ? 'border-b border-rule' : ''}`}
        >
          <p className="text-lg font-bold uppercase tracking-wide text-ink">{item.q}</p>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed font-medium text-ink-soft">{item.a}</p>
        </div>
      ))}
    </div>
  )
}
