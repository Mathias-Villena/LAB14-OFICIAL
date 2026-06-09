import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CanvasBackground from '@/components/CanvasBackground';
import { personalInfo } from '@/lib/data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.description,
  keywords: [
    'desarrollador web',
    'full stack',
    'next.js',
    'react',
    'typescript',
    'portafolio',
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: personalInfo.siteUrl,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    siteName: personalInfo.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Portafolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    images: ['/og-image.jpg'],
    creator: '@tuusuario',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white relative transition-colors duration-500">
        {/* Interactive Canvas Particle Background */}
        <CanvasBackground />

        {/* Background glow balls */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/5 dark:bg-indigo-900/10 blur-[120px] animate-drift-slow"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-500/5 dark:bg-purple-900/10 blur-[120px] animate-drift-fast"></div>
          <div className="absolute top-[30%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-cyan-500/5 dark:bg-cyan-950/10 blur-[100px] animate-pulse-glow"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}