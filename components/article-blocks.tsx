import { Eyebrow } from '@/components/eyebrow'
import { Callout } from '@/components/callout'
import { PullQuote } from '@/components/pull-quote'
import { ReportList, ReportLead, ReportP, ReportTwoCol } from '@/components/report-prose'

export type ArticleBlock =
  | { type: 'lead'; text: string }
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'callout'; label: string; text: string; tone?: 'copper' | 'oxblood' }
  | { type: 'twocol'; leftTitle: string; leftItems: string[]; rightTitle: string; rightItems: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'sources'; items: string[] }

export function ArticleBlocks({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="flex flex-col gap-8">
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
                className="mt-4 scroll-mt-28 font-display text-2xl leading-tight text-ink md:text-3xl"
              >
                {block.text}
              </h2>
            )
          case 'list':
            return <ReportList key={i} items={block.items} />
          case 'quote':
            return (
              <PullQuote key={i} cite={block.cite}>
                {block.text}
              </PullQuote>
            )
          case 'callout':
            return (
              <Callout key={i} label={block.label} tone={block.tone}>
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
          case 'table':
            return (
              <div key={i} className="overflow-x-auto border border-rule">
                <table className="w-full text-left text-[13px] md:text-[14px]">
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
              <div key={i} className="border-t border-rule pt-8">
                <Eyebrow>Sources</Eyebrow>
                <ul className="mt-4 flex flex-col gap-2">
                  {block.items.map((s, si) => (
                    <li key={si} className="text-[13px] leading-relaxed text-ink-soft">
                      {s}
                    </li>
                  ))}
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
