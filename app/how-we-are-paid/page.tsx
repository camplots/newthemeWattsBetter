import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Section } from '@/components/section'
import { Eyebrow } from '@/components/eyebrow'
import { Callout } from '@/components/callout'
import { FaqList } from '@/components/faq-list'
import { RelatedReading } from '@/components/related-reading'
import { ReportList, ReportP } from '@/components/report-prose'

export const metadata: Metadata = {
  title: 'How we are paid — Watts Better',
  description:
    'You do not pay us for the assessment, report or conversation. If you proceed with an installer we introduced, the installer pays us a fee.',
}

export default function HowWeArePaidPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="How we are paid"
          title="How we are paid"
          intro="We want you to understand how the service works before you decide whether to use it."
        />

        <Section className="!py-0">
          <div className="grid gap-14 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
            <Image
              src="/images/concept-fee-ledger.png"
              alt="Illustration of a ledger with a fee split into two portions"
              width={520}
              height={520}
              className="h-fit w-full border border-rule"
            />
            <div className="flex flex-col gap-10">
              <div>
                <Eyebrow>What you pay</Eyebrow>
                <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
                  What you pay
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  You do not pay us for:
                </p>
                <div className="mt-4">
                  <ReportList
                    items={[
                      'the assessment',
                      'the report',
                      'the conversation',
                      'the photo capture',
                      'the eligible inspection after installation',
                    ]}
                  />
                </div>
              </div>
              <div>
                <Eyebrow tone="oxblood">When the installer pays us</Eyebrow>
                <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
                  When the installer pays us
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  If you ask us to introduce you to an installer and then proceed with that
                  installer, the installer pays us a fee.
                </p>
                <Callout label="If you do not proceed" tone="copper" className="mt-6">
                  If you do not proceed, we do not receive that fee.
                </Callout>
              </div>
            </div>
          </div>
        </Section>

        <Section bg="paper-dark">
          <Eyebrow>What the fee covers</Eyebrow>
          <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
            What the fee covers
          </h2>
          <div className="mt-6 flex max-w-2xl flex-col gap-4">
            <ReportP>Part of the fee covers the independent inspection and report.</ReportP>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              The rest covers the assessment, report, conversation, photo capture and work
              involved in arranging the introduction.
            </p>
          </div>
        </Section>

        <Section>
          <Eyebrow>What you decide</Eyebrow>
          <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
            What you decide
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">You decide:</p>
          <div className="mt-4 max-w-2xl">
            <ReportList
              items={[
                'whether to request an introduction',
                'when to request it',
                'what information we share',
                'whether to speak with the installer',
                'whether to accept the quote',
                'whether to proceed with the work',
              ]}
            />
          </div>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            Requesting an introduction does not commit you to a quote, purchase or installation.
          </p>
        </Section>

        <Section bg="paper-dark">
          <Eyebrow>What we do not get paid for</Eyebrow>
          <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
            What we do not get paid for
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">We do not receive:</p>
          <div className="mt-4 max-w-2xl">
            <ReportList
              items={[
                'manufacturer commissions',
                'distributor commissions',
                'a margin on panels, inverters or batteries',
                'payment for sending your details to several installers',
                'payment for each quote you request',
              ]}
            />
          </div>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            We do not sell your details to an installer network.
          </p>
        </Section>

        <Section>
          <Eyebrow>One introduction</Eyebrow>
          <h2 className="mt-5 font-display text-2xl leading-tight text-ink md:text-3xl">
            Why we introduce one installer
          </h2>
          <div className="mt-6 flex max-w-2xl flex-col gap-4">
            <ReportP>
              We do not send your details to several installers. If you ask for an introduction,
              we make one introduction to an installer we are prepared to recommend.
            </ReportP>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              You can still use your own installer or seek other quotes.
            </p>
          </div>
        </Section>

        <Section bg="paper-dark">
          <FaqList
            title="Common questions"
            items={[
              {
                q: 'Will I pay more because the installer pays you?',
                a: "We do not charge you a separate fee. You should still review the installer's quote carefully and compare it with other quotes if you wish.",
              },
              {
                q: 'Do you get paid if I do not proceed?',
                a: 'No. We receive the fee only if you proceed with the installer we introduced.',
              },
              {
                q: 'Can I use my own installer?',
                a: 'Yes. You can use the report with any installer you choose.',
              },
              {
                q: 'What happens if you advise me not to install?',
                a: 'You keep your report. You can decide to wait, make changes to your home or seek another opinion.',
              },
              {
                q: 'Does the installer choose the inspector?',
                a: 'No. The inspection is arranged independently.',
              },
              {
                q: 'Do you share my information without asking?',
                a: 'No. We only share your information with an installer if you request an introduction and approve what is shared.',
              },
              {
                q: 'How much is the installer fee?',
                a: 'Between $600 and $800, depending on the system. The installer pays this fee to Watts Better.',
              },
            ]}
          />
        </Section>

        <Section className="text-center">
          <h2 className="mx-auto max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Start the assessment
          </h2>
          <Link
            href="/calculator"
            className="mt-8 inline-flex items-center gap-3 border border-ink bg-ink px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ink/85"
          >
            Start with your electricity bill
            <ArrowRight className="size-4" />
          </Link>
        </Section>

        <RelatedReading keys={['how-introductions-work', 'about-us', 'installation-inspections']} />
      </main>
      <SiteFooter />
    </div>
  )
}
