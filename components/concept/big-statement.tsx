import type { ReactNode } from 'react'

type BigStatementProps = {
  eyebrow?: string
  title: ReactNode
  body?: ReactNode
  action?: ReactNode
  backgroundColor: string
  dark?: boolean
  headingLevel?: 'h2' | 'h3'
  compact?: boolean
}

export function BigStatement({
  eyebrow,
  title,
  body,
  action,
  backgroundColor,
  dark = false,
  headingLevel = 'h2',
  compact = false,
}: BigStatementProps) {
  const Heading = headingLevel
  const containerSize = compact
    ? 'gap-5 py-16 md:gap-6 md:py-24'
    : 'gap-6 py-20 md:gap-8 md:py-32'
  const headingSize = compact
    ? 'max-w-3xl text-3xl leading-[1.05] md:text-4xl lg:text-5xl'
    : 'max-w-5xl text-5xl leading-[0.95] md:text-7xl lg:text-8xl'
  return (
    <section
      className={`border-b-[3px] border-black ${dark ? 'text-white' : 'text-black'}`}
      style={{ backgroundColor }}
    >
      <div className={`flex flex-col items-start px-6 md:px-12 ${containerSize}`}>
        {eyebrow ? (
          <p
            className={`text-sm font-bold uppercase tracking-[0.2em] ${dark ? 'text-[#8AEFC1]' : ''}`}
          >
            {eyebrow}
          </p>
        ) : null}
        <Heading className={`font-bold uppercase tracking-tight text-balance ${headingSize}`}>
          {title}
        </Heading>
        {body ? (
          <div
            className={`max-w-xl text-lg leading-relaxed font-medium md:text-xl ${dark ? 'text-white/85' : ''}`}
          >
            {body}
          </div>
        ) : null}
        {action}
      </div>
    </section>
  )
}
