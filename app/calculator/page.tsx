import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Eyebrow } from '@/components/eyebrow'

export const metadata: Metadata = {
  title: 'See what your electricity bill says about solar — Watts Better',
  description:
    'Use your bill to understand when your home uses electricity, what solar could change and whether a battery may help.',
}

export default function CalculatorPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <div className="border-b border-rule bg-paper">
          <div className="mx-auto max-w-[1400px] px-5 pt-10 pb-6 md:px-8">
            <Eyebrow>Start the assessment</Eyebrow>
            <h1 className="mt-3 text-balance font-display text-3xl leading-tight md:text-5xl">
              See what your electricity bill says about solar
            </h1>
            <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Use your bill to understand when your home uses electricity, what solar could change
              and whether a battery may help.
            </p>
            <p className="mt-4 text-base text-foreground">You will be able to:</p>
            <ul className="mt-2 flex max-w-2xl list-disc flex-col gap-1 pl-5 text-base leading-relaxed text-muted-foreground">
              <li>see how your home uses electricity during the day</li>
              <li>compare solar and battery options</li>
              <li>see how different choices could affect your bill</li>
              <li>receive a report about your results</li>
            </ul>
            <p className="mt-4 text-base text-foreground">
              You do not need to know anything about solar to begin.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Free to use. We will not pass your details to an installer unless you ask us to.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[1400px] px-0 py-0 md:px-8 md:py-10">
          <div className="h-[900px] w-full overflow-hidden border-0 border-rule bg-paper md:border">
            <iframe
              src="https://4p6j5dq8mm.zite.so/"
              title="Watts Better assessment"
              className="size-full"
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
