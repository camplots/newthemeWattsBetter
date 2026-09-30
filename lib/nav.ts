export const primaryNav = [
  { label: 'How it works', href: '/how-introductions-work' },
  { label: 'Your report', href: '/the-report' },
  { label: 'After installation', href: '/installation-inspections' },
  { label: 'How we are paid', href: '/how-we-are-paid' },
  { label: 'About us', href: '/about-us' },
] as const

export const footerNav = {
  products: [
    { label: 'Your report', href: '/the-report' },
    { label: 'Start your assessment', href: '/calculator' },
    { label: 'After installation', href: '/installation-inspections' },
  ],
  company: [
    { label: 'About us', href: '/about-us' },
    { label: 'How we are paid', href: '/how-we-are-paid' },
    { label: 'How it works', href: '/how-introductions-work' },
    { label: 'Contact us', href: '/contact-us' },
  ],
  learn: [
    { label: 'Knowledge', href: '/blog' },
    { label: 'Tools', href: '/tools' },
    { label: 'The Industry', href: '/the-industry' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/privacy#terms' },
  ],
} as const

export type PageKey =
  | 'home'
  | 'the-report'
  | 'installation-inspections'
  | 'how-introductions-work'
  | 'how-we-are-paid'
  | 'about-us'
  | 'the-industry'
  | 'contact-us'
  | 'tools'
  | 'blog'
  | 'privacy'
  | 'calculator'

interface RelatedItem {
  label: string
  href: string
  description: string
  tag: string
}

const registry: Record<PageKey, RelatedItem> = {
  home: {
    label: 'See what solar and batteries could do for your home',
    href: '/',
    description: 'Start here to see what solar and batteries could do for your home.',
    tag: 'Start',
  },
  'the-report': {
    label: 'Your report',
    href: '/the-report',
    description: 'How your electricity bill becomes a report you can use.',
    tag: 'Product',
  },
  'installation-inspections': {
    label: 'After installation',
    href: '/installation-inspections',
    description: 'Why the finished installation gets an independent inspection.',
    tag: 'Product',
  },
  'how-introductions-work': {
    label: 'How it works',
    href: '/how-introductions-work',
    description: 'One installer, only if you ask for one.',
    tag: 'Process',
  },
  'how-we-are-paid': {
    label: 'How we are paid',
    href: '/how-we-are-paid',
    description: 'Who pays Watts Better, and what for.',
    tag: 'Transparency',
  },
  'about-us': {
    label: 'About us',
    href: '/about-us',
    description: 'Who Watts Better is and what we do.',
    tag: 'Company',
  },
  'the-industry': {
    label: 'The Industry',
    href: '/the-industry',
    description: 'What the compliance data actually says about batteries.',
    tag: 'Learn',
  },
  'contact-us': {
    label: 'Contact us',
    href: '/contact-us',
    description: 'Questions about your options? Start here.',
    tag: 'Company',
  },
  tools: {
    label: 'Tools',
    href: '/tools',
    description: 'Calculators and resources for your decision.',
    tag: 'Learn',
  },
  blog: {
    label: 'Knowledge',
    href: '/blog',
    description: 'Bills, tariffs, batteries and Queensland specifics.',
    tag: 'Learn',
  },
  privacy: {
    label: 'Privacy & Terms',
    href: '/privacy',
    description: 'How your information is collected, used and shared.',
    tag: 'Legal',
  },
  calculator: {
    label: 'Start your assessment',
    href: '/calculator',
    description: 'Start your assessment with your electricity bill.',
    tag: 'Product',
  },
}

export function getRelated(keys: PageKey[]): RelatedItem[] {
  return keys.map((k) => registry[k])
}
