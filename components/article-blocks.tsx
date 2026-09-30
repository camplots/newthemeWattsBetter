import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from 'cn'
import { Eyebrow } from '@/components/eyebrow'
import { Callout } from '@/components/callout'
import { PullQuote } from '@/components/pull-quote'
import { FaqList } from '@/components/faq-list'
import { ReportList, ReportLead, ReportP, ReportTwoCol } from '@/components/report-prose'

export type ArticleBlock =
  | { type: 'lead'; text: string }
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'h3'; text: string }
  | { type: 'label'; text: string }
  | { type: 'note'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'checklist'; items: string[] }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'callout'; label: string; text: string; tone?: 'copper' | 'oxblood' | string }
  | { type: 'twocol'; leftTitle: string; leftItems: string[]; rightTitle: string; rightItems: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'sources'; items: ({ label: string; href?: string } | string)[] }
  | { type: 'findings'; items: { title: string; text: string }[] }
  | { type: 'levers'; items: { title: string; text: string }[] }
  | {
      type: 'cards'
      items: { label: string; value?: string; sub?: string; lines: string[]; positive: boolean }[]
    }
  | { type: 'equation'; parts: ({ op: string } | { value: string; label: string })[] }
  | { type: 'faq'; items: { q: string; a: string }[] }
  | { type: 'cta'; text: string; links: { label: string; href?: string }[] }

export function ArticleBlocks({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'lead':
            return <ReportLead key={i}>{block.text}</ReportLead>
          case 'p':
            return <ReportP key={i}>{block.text}</ReportP>
          case 'h2':
            return (
              <h2
                id={block.id}
                key={i}
                className="mt-10 scroll-mt-28 border-t border-rule pt-10 font-display text-2xl leading-tight text-ink first:mt-0 first:border-t-0 first:pt-0 md:text-3xl"
              >
                {block.text}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i} className="mt-2 font-display text-xl leading-snug text-ink">
                {block.text}
              </h3>
            )
          case 'label':
            return (
              <p key={i} className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-copper">
                {block.text}
              </p>
            )
          case 'note':
            return (
              <p key={i} className="border-t border-rule pt-5 text-[13px] italic leading-relaxed text-ink-soft">
                {block.text}
              </p>
            )
          case 'list':
            return <ReportList key={i} items={block.items} />
          case 'checklist':
            return (
              <ul key={i} className="flex flex-col divide-y divide-rule border-y border-rule">
                {block.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-3 py-3 text-[15px] leading-relaxed text-ink md:text-base">
                    <Check className="mt-1 size-4 shrink-0 text-copper" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          case 'quote':
            return (
              <PullQuote key={i} cite={block.cite}>
                {block.text}
              </PullQuote>
            )
          case 'callout':
            return (
              <Callout
                key={i}
                label={block.label}
                tone={block.tone === 'oxblood' ? 'oxblood' : 'copper'}
                className="my-2"
              >
                {block.text}
              </Callout>
            )
          case 'twocol':
            return (
              <ReportTwoCol
                key={i}
                leftTitle={block.leftTitle}
                leftItems={block.leftItems}
                rightTitle={block.rightTitle}
                rightItems={block.rightItems}
              />
            )
          case 'findings':
            return (
              <ol key={i} className="flex flex-col border-t border-rule">
                {block.items.map((item, ii) => (
                  <li key={ii} className="flex gap-5 border-b border-rule py-5">
                    <span className="font-mono text-sm text-copper">{String(ii + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="font-display text-lg leading-snug text-ink">{item.title}</p>
                      {item.text && (
                        <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{item.text}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            )
          case 'levers':
            return (
              <div key={i} className="grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
                {block.items.map((item, ii) => (
                  <div key={ii} className="bg-paper p-6">
                    <p className="font-display text-lg leading-snug text-ink">{item.title}</p>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{item.text}</p>
                  </div>
                ))}
              </div>
            )
          case 'cards':
            return (
              <div
                key={i}
                className={cn(
                  'grid gap-px overflow-hidden border border-rule bg-rule',
                  block.items.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2',
                )}
              >
                {block.items.map((item, ii) => (
                  <div key={ii} className={cn('flex flex-col gap-3 p-6', item.positive ? 'bg-paper' : 'bg-paper-dark')}>
                    <p
                      className={cn(
                        'font-mono text-[11px] uppercase tracking-[0.14em]',
                        item.positive ? 'text-copper' : 'text-oxblood',
                      )}
                    >
                      {item.label}
                    </p>
                    {item.value && <p className="font-display text-3xl leading-none text-ink">{item.value}</p>}
                    {item.sub && (
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">{item.sub}</p>
                    )}
                    {item.lines.map((line, li) => (
                      <p key={li} className="text-[14px] leading-relaxed text-ink-soft">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )
          case 'equation':
            return (
              <div key={i} className="flex flex-col items-stretch gap-3 border border-rule bg-paper-dark p-6 sm:flex-row sm:items-center">
                {block.parts.map((part, pi) =>
                  'op' in part ? (
                    <span key={pi} className="text-center font-display text-2xl text-copper" aria-hidden="true">
                      {part.op}
                    </span>
                  ) : (
                    <div key={pi} className="flex flex-1 flex-col gap-1 text-center">
                      <span className="font-display text-3xl text-ink">{part.value}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft">
                        {part.label}
                      </span>
                    </div>
                  ),
                )}
              </div>
            )
          case 'faq':
            return (
              <div key={i} className="mt-4">
                <FaqList title="Frequently asked questions" items={block.items} />
              </div>
            )
          case 'cta':
            return (
              <div key={i} className="my-4 border-l-[3px] border-copper bg-ink-deep p-6 text-paper md:p-8">
                {block.text && <p className="font-display text-xl leading-snug">{block.text}</p>}
                {block.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {block.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href ?? '/calculator'}
                        className="group inline-flex items-center gap-2 bg-copper px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:bg-copper-soft"
                      >
                        {link.label}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          case 'table':
            return (
              <div key={i} className="overflow-x-auto border border-rule">
                <table className="w-full text-left text-[13px] md:text-[14px]">
                  {block.headers.length > 0 && (
                    <thead className="bg-paper-dark">
                      <tr>
                        {block.headers.map((h) => (
                          <th
                            key={h}
                            className="border-b border-rule px-4 py-3 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft whitespace-nowrap"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-rule last:border-b-0">
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-3 leading-relaxed text-ink-soft">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case 'sources':
            return (
              <div key={i} className="border-t border-rule pt-6">
                <Eyebrow>Sources</Eyebrow>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {block.items.map((item, si) => {
                    const label = typeof item === 'string' ? item : item.label
                    const href = typeof item === 'string' ? undefined : item.href
                    return (
                      <li key={si} className="text-[13px] leading-relaxed text-ink-soft">
                        {href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-rule underline-offset-2 transition-colors hover:text-copper hover:decoration-copper"
                          >
                            {label}
                          </a>
                        ) : (
                          label
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
