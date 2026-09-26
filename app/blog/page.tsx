import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { Eyebrow } from '@/components/eyebrow'
import { RelatedReading } from '@/components/related-reading'
import { Badge } from '@/components/ui/badge'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Knowledge — Watts Better',
  description: 'Understanding bills, tariffs, usage patterns, payback, batteries and Queensland specifics.',
}

const categories = [
  { number: '01', title: 'Your numbers', description: 'Understanding bills, tariffs, usage patterns and payback.' },
  { number: '02', title: 'PV and batteries', description: 'Understanding system sizing, battery value and solar-only options.' },
  {
    number: '03',
    title: 'Queensland',
    description: 'Local rebates, feed-in tariffs, accreditation and Brisbane-specific considerations.',
  },
  {
    number: '04',
    title: 'Inspection and quality',
    description: 'Installation standards, documentation, workmanship and independent inspection.',
  },
]

export default function BlogPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Learn"
          fileNumber="KN-01"
          title="Knowledge"
          intro="Understanding bills, tariffs, usage patterns, payback, batteries and Queensland specifics."
        />

        {categories.map((category, ci) => (
          <Section key={category.title} bg={ci % 2 === 0 ? 'paper' : 'paper-dark'}>
            <div className="flex flex-col gap-2 border-b border-rule pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>{category.number} · {category.title}</Eyebrow>
                <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
                  {category.title}
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft">{category.description}</p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
              {articles
                .filter((a) => a.category === category.title)
                .map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col gap-3 bg-paper p-6 transition-colors hover:bg-paper-dark"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <Badge variant="secondary" className="w-fit font-mono text-[10px] uppercase tracking-[0.1em]">
                        {article.date ?? 'Coming soon'}
                      </Badge>
                      <ArrowUpRight
                        className="size-4 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-display text-lg leading-snug text-ink">{article.title}</h3>
                    <p className="text-[13px] leading-relaxed text-ink-soft">{article.standfirst}</p>
                  </Link>
                ))}
            </div>
          </Section>
        ))}

        <RelatedReading keys={['the-industry', 'the-report', 'tools']} />
      </main>
      <SiteFooter />
    </div>
  )
}
