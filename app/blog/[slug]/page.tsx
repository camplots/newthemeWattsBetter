import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { Eyebrow } from '@/components/eyebrow'
import { ArticleBlocks } from '@/components/article-blocks'
import { ReportToc } from '@/components/report-prose'
import { articles } from '@/lib/articles'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return { title: `${article.title} — Watts Better`, description: article.standfirst }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const index = articles.findIndex((a) => a.slug === slug)
  if (index === -1) notFound()
  const article = articles[index]

  const toc = article.blocks.flatMap((b) => (b.type === 'h2' ? [{ id: b.id, label: b.text }] : []))
  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category && !a.comingSoon)
    .slice(0, 3)
  const faqs = article.blocks.find((block) => block.type === 'faq')
  const faqJsonLd = faqs?.type === 'faq'
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null

  return (
    <div>
      <SiteHeader />
      <main>
        {faqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
        <PageHero
          eyebrow={`Knowledge · ${article.category}`}
          fileNumber={`KN-${String(index + 1).padStart(2, '0')}`}
          title={article.title}
          intro={article.standfirst}
        >
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-black/60">
            Watts Better · {article.date ?? 'Coming soon'} · General information only
          </p>
        </PageHero>

        <Section>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-copper"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            All articles
          </Link>
          <div className="mt-10 flex gap-16">
            {toc.length > 2 && <ReportToc items={toc} />}
            <article className="min-w-0 max-w-3xl flex-1">
              {article.comingSoon && (
                <p className="mb-8 font-display text-2xl leading-snug text-ink">
                  The full article is being written. In the meantime, your own numbers are the best guide.
                </p>
              )}
              <ArticleBlocks blocks={article.blocks} />
            </article>
          </div>
        </Section>

        {related.length > 0 && (
          <section className="border-t border-rule bg-paper-dark">
            <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
              <Eyebrow>More in {article.category}</Eyebrow>
              <div className="mt-8 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-3">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="group flex flex-col gap-3 bg-paper p-6 transition-colors hover:bg-paper-dark"
                  >
                    <ArrowUpRight className="size-4 self-end text-ink-soft transition-colors group-hover:text-copper" />
                    <p className="font-display text-lg leading-snug text-ink">{a.title}</p>
                    <p className="text-[13px] leading-relaxed text-ink-soft">{a.standfirst}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
