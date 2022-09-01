/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'web-monorepo-boilerplate',
  titleTemplate: '%s | web-monorepo-boilerplate',
  defaultTitle: 'web-monorepo-boilerplate',
  description: 'Next.js + chakra-ui + TypeScript template',
  canonical: 'https://web-monorepo-boilerplate.sznm.dev',
  openGraph: {
    url: 'https://web-monorepo-boilerplate.sznm.dev',
    title: 'web-monorepo-boilerplate',
    description: 'Next.js + chakra-ui + TypeScript template',
    images: [
      {
        url: 'https://og-image.sznm.dev/**web-monorepo-boilerplate**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
        alt: 'web-monorepo-boilerplate.sznm.dev og-image',
      },
    ],
    site_name: 'web-monorepo-boilerplate',
  },
  twitter: {
    handle: '@sebpalluel',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
