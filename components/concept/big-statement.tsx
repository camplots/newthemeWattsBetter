import type { ReactNode } from 'react'

type BigStatementProps = {
  eyebrow?: string
  title: ReactNode
  body?: ReactNode
  action?: ReactNode
  backgroundColor: string
  dark?: boolean
  headingLevel?: 'h2' | 'h3'
}

export function BigStatement({
  eyebrow,
  title,
  body,
  action,
  backgroundColor,
  dark = false,
  headingLevel = 'h2',
}: BigStatementProps) {
  const Heading = headingLevel
  return (
    <section
      className={`border-b-[3px] border-black ${dark ? 'text-white' : 'text-black'}`}
      style={{ backgroundColor }}
    >
      <div className="flex flex-col items-start gap-6 px-6 py-20 md:gap-8 md:px-12 md:py-32">
        {eyebrow ? (
          <p
            className={`text-sm font-bold uppercase tracking-[0.2em] ${dark ? 'text-[#8AEFC1]' : ''}`}
          >
            {eyebrow}
          </p>
        ) : null}
        <Heading className="max-w-5xl text-5xl leading-[0.95] font-bold uppercase tracking-tight text-balance md:text-7xl lg:text-8xl">
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
