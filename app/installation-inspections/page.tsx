import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { Eyebrow } from '@/components/eyebrow'
import { Callout } from '@/components/callout'
import { RelatedReading } from '@/components/related-reading'
import { ReportList, ReportP, ReportTwoCol } from '@/components/report-prose'

export const metadata: Metadata = {
  title: 'Independent inspection after installation — Watts Better',
  description:
    'If you proceed with an installer introduced through Watts Better, we arrange an independent inspection after the work is complete. You receive the report at no additional cost.',
}

const inspected = [
  {
    title: 'Solar panels',
    body: 'Placement, mounting and general condition, including any visible damage.',
  },
  {
    title: 'Inverter',
    body: 'Model, capacity, operating status and any monitoring information that is available.',
  },
  {
    title: 'Mounting and roof work',
    body: 'Rails, clamps, roof penetrations and sealing.',
  },
  {
    title: 'Wiring and connections',
    body: 'Cables, connectors, isolators and the connection to your switchboard.',
  },
  {
    title: 'Labelling',
    body: 'Whether the required labels and signs are in place.',
  },
  {
    title: 'System operation',
    body: 'Whether the system is working. Where data is available, early solar production is compared with what would be expected.',
  },
  {
    title: 'Relevant safety and compliance matters',
    body: 'The accessible parts of the installation are checked against the relevant requirements.',
  },
]

const steps = [
  'The installation is completed.',
  'We arrange the inspection.',
  'An independent inspector checks the accessible parts of the system.',
  'We send you the report.',
]

export default function InstallationInspectionsPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <PageHero eyebrow="After installation" title="Independent inspection after installation">
          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-start">
            <ReportP>
              We arrange an independent inspection of eligible installations after the work is
              complete.
            </ReportP>
            <div className="border border-rule bg-card p-8">
              <p className="font-display text-2xl leading-tight text-ink md:text-3xl">
                No additional cost to you
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                If you proceed with an installer introduced through Watts Better, you receive the
                inspection report at no additional cost.
              </p>
            </div>
          </div>
        </PageHero>

        <Section>
          <div className="grid gap-10 md:grid-cols-[0.8fr_1fr]">
            <div>
              <Eyebrow>Why</Eyebrow>
              <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
                Why we arrange an inspection
              </h2>
            </div>
            <ReportP>
              Some parts of a solar or battery installation are difficult for a homeowner to
              check. An independent inspection gives you a record of what was looked at and
              whether anything needs attention.
            </ReportP>
          </div>
        </Section>

        <Section bg="paper-dark" className="!py-0">
          <div className="py-16 md:py-24">
            <Eyebrow>What we inspect</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight text-ink md:text-4xl">
              What we inspect
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              <Image
                src="/images/inspection-panel.png"
                alt="Line-art illustration of a switchboard and inverter being inspected with a magnifying glass"
                width={560}
                height={560}
                className="w-full border border-rule"
              />
              <div className="grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
                {inspected.map((item) => (
                  <div key={item.title} className="bg-paper p-6">
                    <h3 className="font-display text-lg text-ink">{item.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <Eyebrow>What you receive</Eyebrow>
              <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
                What you receive
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                You receive a report showing:
              </p>
              <div className="mt-4">
                <ReportList
                  items={[
                    'the areas inspected',
                    'the findings',
                    'photographs where relevant',
                    'anything that needs attention',
                    'the overall inspection result',
                  ]}
                />
              </div>
            </div>
            <div>
              <Eyebrow>The steps</Eyebrow>
              <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
                How the inspection works
              </h2>
              <ol className="mt-6 flex flex-col gap-0 divide-y divide-rule border-y border-rule">
                {steps.map((step, i) => (
                  <li key={step} className="flex gap-5 py-5">
                    <span className="font-mono text-xs text-copper">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-display text-base text-ink">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Section>

        <Section bg="paper-dark">
          <ReportTwoCol
            leftTitle="What the installer is responsible for"
            leftItems={[
              'assessing your property',
              'designing the system',
              'choosing the equipment',
              'completing the installation',
              'providing certification',
              'meeting network requirements',
              'fixing installation problems',
            ]}
            rightTitle="What the inspection does not replace"
            rightItems={[
              "the installer's responsibilities",
              'required certification',
              'network approval',
              'government and electrical-safety requirements',
            ]}
          />
        </Section>

        <Section>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Eyebrow>The inspector</Eyebrow>
              <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
                Who carries out the inspection
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                We arrange inspections through TechSafe Australia.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-2xl leading-tight text-ink md:text-3xl">
                What you pay
              </h2>
              <ReportP>
                If you proceed with an installer introduced through Watts Better, the installer
                pays us a fee. Part of that fee covers the inspection and report.
              </ReportP>
              <Callout label="No separate invoice" tone="copper">
                You do not receive a separate inspection invoice from Watts Better.
              </Callout>
            </div>
          </div>
        </Section>

        <Section bg="paper-dark" className="text-center">
          <h2 className="mx-auto max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Questions about the inspection?
          </h2>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center gap-3 border border-ink bg-ink px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ink/85"
          >
            Contact us
            <ArrowRight className="size-4" />
          </Link>
        </Section>

        <RelatedReading keys={['the-industry', 'how-we-are-paid', 'the-report']} />
      </main>
      <SiteFooter />
    </div>
  )
}
