import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PillButton } from '@/components/concept/pill-button'
import { Marquee, StepList } from '@/components/concept/blocks'
import { BigStatement } from '@/components/concept/big-statement'
import { MINT, YELLOW, LAVENDER, NAVY, PEACH, PINK } from '@/components/concept/theme'

const steps = [
  { number: '01', title: 'We look at your electricity use', description: 'We use the information from your bill to understand how your home uses power during the day.' },
  { number: '02', title: 'We show you what solar could change', description: 'See how much solar you could use at home and how much could go back to the grid.' },
  { number: '03', title: 'You can try different options', description: 'Change the solar and battery sizes and see how they could affect your bill.' },
  { number: '04', title: 'We prepare your report', description: 'Your report brings together the results, the assumptions and the questions worth asking an installer.' },
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a1233]/75 via-[#2a1233]/35 to-transparent md:via-[#2a1233]/40 md:via-30% md:to-65%" />
        </div>

        {/* Hero copy sits over the pinned image */}
        <section className="relative flex min-h-svh flex-col justify-end">
          <div className="flex flex-col items-start px-6 pt-32 pb-16 md:px-12 md:pb-24">
            <h1 className="max-w-4xl text-4xl leading-[1.08] font-bold tracking-tight text-white text-balance sm:text-5xl lg:text-[3.5rem]">
              See what solar and batteries could do for your home
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed font-medium text-white/90 text-pretty md:mt-8 md:text-lg">
              Use your electricity bill to see how your home uses power, what solar could change
              and whether a battery could help.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-black hover:text-white"
              >
                Start with my electricity bill
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/the-report"
                className="text-sm font-semibold text-white/90 underline underline-offset-4 hover:text-white"
              >
                See an example report
              </Link>
            </div>
          </div>
          <div
            className="flex flex-wrap items-center justify-between gap-4 border-y-[3px] border-black px-6 py-4 md:px-12"
            style={{ backgroundColor: YELLOW }}
          >
            <p className="text-sm font-bold uppercase tracking-wide">
              Free to use. We will not pass your details to an installer unless you ask us to.
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
            eyebrow="Starting point"
            title="Start with your electricity bill"
            body={
              <p>
                Your bill can show when you use electricity, what you pay for it and how much
                power you buy from the grid.
              </p>
            }
          />

          <section className="border-b-[3px] border-black" style={{ backgroundColor: LAVENDER }}>
            <div className="px-6 py-20 md:px-12 md:py-28">
              <p className="text-sm font-bold uppercase tracking-[0.2em]">How it works</p>
              <h2 className="mt-4 max-w-5xl text-5xl leading-[0.95] font-bold uppercase tracking-tight text-balance md:text-7xl lg:text-8xl">
                How the assessment works
              </h2>
            </div>
            <StepList steps={steps} />
            <div className="border-t-[3px] border-black px-6 py-10 md:px-12">
              <PillButton href="/calculator" variant="dark">
                Start the assessment
              </PillButton>
            </div>
          </section>

          <BigStatement
            backgroundColor={PINK}
            dark
            eyebrow="Your report"
            title="What the report includes"
            body={
              <p>
                Your report can show when your home uses the most electricity, how much solar
                could be produced and used, whether a battery may help, how different options
                could affect your bills, and what still needs to be checked at your property.
              </p>
            }
            action={
              <PillButton href="/the-report" variant="light">
                See what is in the report
              </PillButton>
            }
          />

          <BigStatement
            backgroundColor={YELLOW}
            eyebrow="Talk it through"
            title="Talk through your report with us"
            body={
              <>
                <p>
                  Your electricity bill cannot show everything about your home. We can explain
                  the report, answer your questions and discuss anything that still needs to be
                  checked.
                </p>
                <p className="mt-4 text-base font-semibold">
                  This is not an installer sales appointment. It does not commit you to buying
                  anything.
                </p>
              </>
            }
            action={
              <PillButton href="/contact-us" variant="dark">
                Book a 15-minute call
              </PillButton>
            }
          />

          <Marquee text="See what your electricity bill says before you decide." />

          <BigStatement
            backgroundColor={MINT}
            eyebrow="If you want an introduction"
            title="If you want an installer introduction"
            body={
              <>
                <p>
                  You can use your own installer or continue researching. If you want an
                  introduction, we can put you in touch with one installer we are prepared to
                  recommend.
                </p>
                <p className="mt-4 text-base font-semibold">
                  We only share your details if you ask us to.
                </p>
              </>
            }
            action={
              <PillButton href="/how-introductions-work" variant="dark">
                How introductions work
              </PillButton>
            }
          />

          <BigStatement
            backgroundColor={NAVY}
            dark
            eyebrow="After installation"
            title="Independent inspection after installation"
            body={
              <>
                <p>
                  If you go ahead with an installer we introduce, we arrange an independent
                  inspector to check the finished installation and send you the report. It
                  doesn&apos;t cost you anything.
                </p>
                <p className="mt-4 text-white/85">
                  We&apos;re not aware of another solar business in Queensland that does this.
                </p>
              </>
            }
            action={
              <PillButton href="/installation-inspections" variant="light">
                How inspections work
              </PillButton>
            }
          />

          <BigStatement
            backgroundColor={LAVENDER}
            eyebrow="How we are paid"
            title="How we are paid"
            body={
              <p>
                You do not pay us for the assessment, report or conversation. If you ask us to
                introduce you to an installer and proceed with that installer, the installer pays
                us a fee.
              </p>
            }
            action={
              <Link
                href="/how-we-are-paid"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide underline"
              >
                Read how we are paid
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            }
          />

          <BigStatement
            backgroundColor={PEACH}
            title="Start the assessment"
            body={<p>See what your electricity bill says before you decide what to do next.</p>}
            action={
              <PillButton href="/calculator" variant="dark">
                Start with your electricity bill
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
