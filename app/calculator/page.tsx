import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Eyebrow } from '@/components/eyebrow'

export const metadata: Metadata = {
  title: 'Start the assessment — Watts Better',
  description:
    'Start with your electricity bill. Enter the details from your bill and we will show you how your home uses electricity.',
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
              Start with your electricity bill
            </h1>
            <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Enter the details from your bill and we will show you how your home uses electricity.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Takes about five minutes.</p>
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
