import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PillButton } from '@/components/concept/pill-button'
import { Marquee, StepList } from '@/components/concept/blocks'
import { BigStatement } from '@/components/concept/big-statement'
import { MINT, YELLOW, LAVENDER, NAVY, PEACH } from '@/components/concept/theme'

const steps = [
  { number: '01', title: 'Calculate', description: 'See how your home uses energy.' },
  { number: '02', title: 'Understand', description: 'See what your results mean.' },
  { number: '03', title: 'Clarify', description: 'Book a call with us for extra guidance.' },
  { number: '04', title: 'Choose', description: 'Access an installer if elected.' },
  { number: '05', title: 'Verify', description: 'Get an independent inspection after install.' },
]

export default function Home() {
  return (
    <div className="text-black">
      <SiteHeader />

      <main className="relative">
        {/* Sticky background: stays pinned while the sections below scroll over it */}
        <div className="sticky top-0 -mb-[100svh] h-svh w-full" aria-hidden="true">
          <Image
            src="/images/concept-hero-warehouse-canyon.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        </div>

        {/* Hero copy sits over the pinned image */}
        <section className="relative flex min-h-svh flex-col justify-end">
          <div className="flex flex-col items-start gap-6 px-6 pb-16 md:px-12 md:pb-24">
            <h1 className="max-w-4xl text-6xl leading-[0.95] font-bold uppercase tracking-tight text-white text-balance md:text-8xl lg:text-9xl">
              Solar, made clear.
            </h1>
            <p className="max-w-lg text-lg font-semibold text-white/90 md:text-xl">
              Independent guidance before you choose a system, and an independent inspection
              after it&apos;s installed.
            </p>
            <PillButton href="/calculator" variant="light">
              Explore your options
            </PillButton>
          </div>
          <div
            className="flex flex-wrap items-center justify-between gap-4 border-y-[3px] border-black px-6 py-4 md:px-12"
            style={{ backgroundColor: YELLOW }}
          >
            <p className="text-sm font-bold uppercase tracking-wide">
              Not sure where to start? See what a real report looks like.
            </p>
            <Link href="/the-report" className="text-sm font-bold uppercase tracking-wide underline">
              See a sample report
            </Link>
          </div>
        </section>

        {/* Everything below has solid backgrounds and scrolls over the pinned image */}
        <div className="relative">
          <BigStatement
            backgroundColor={PEACH}
            title="A quote gives you a price. Not a plan."
            body={<p>Understand what you&apos;re actually comparing before you choose.</p>}
          />

          <BigStatement
            backgroundColor={NAVY}
            dark
            eyebrow="System status"
            title={
              <>
                Don&apos;t hope. <span style={{ color: YELLOW }}>Insist.</span>
              </>
            }
            body={
              <p>
                We arrange an independent inspection to check the compliance, workmanship, safety,
                and functioning of your installation — then hand the report to you.
              </p>
            }
            action={
              <PillButton href="/installation-inspections" variant="light">
                How it works
              </PillButton>
            }
          />

          <section className="border-b-[3px] border-black" style={{ backgroundColor: LAVENDER }}>
            <div className="px-6 py-20 md:px-12 md:py-28">
              <p className="text-sm font-bold uppercase tracking-[0.2em]">The five stages</p>
              <h2 className="mt-4 max-w-5xl text-5xl leading-[0.95] font-bold uppercase tracking-tight text-balance md:text-7xl lg:text-8xl">
                Comprehensive inspections. Standard.
              </h2>
            </div>
            <StepList steps={steps} />
          </section>

          <BigStatement
            backgroundColor={YELLOW}
            eyebrow="Comparing quotes?"
            title="Talk to a human, not a sales script."
            body={<p>Book a 15-minute call for open, independent advice.</p>}
            action={
              <PillButton href="/contact-us" variant="dark">
                Book a chat
              </PillButton>
            }
          />

          <Marquee text="Stop guessing. Start verifying." />

          <BigStatement
            backgroundColor={LAVENDER}
            eyebrow="Transparency"
            title="Who pays us. And what for."
            body={
              <>
                <p>
                  If you ask us to make an installer introduction and proceed with that installer,
                  they pay Watts Better an introducer fee. Part of it funds your independent
                  inspection; the rest covers our advice and coordination.
                </p>
                <p className="mt-4">We never share your details unless you ask us to.</p>
              </>
            }
            action={
              <Link
                href="/how-we-are-paid"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide underline"
              >
                Read the full breakdown
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            }
          />

          <BigStatement
            backgroundColor={MINT}
            title="Start with your energy use."
            body={<p>A quick assessment to help you understand your solar and battery options.</p>}
            action={
              <PillButton href="/calculator" variant="dark">
                Start assessment
              </PillButton>
            }
          />
        </div>
      </main>

      <div className="relative">
        <SiteFooter />
      </div>
    </div>
  )
}
