import type { ReactNode } from 'react';
import cx from 'classnames';
import { headers } from 'next/headers';
import { Open_Sans, Pacifico } from 'next/font/google';
import parser from 'accept-language-parser';
import { YandexMetrika } from '../components';
import './style.css';

const pacifico = Pacifico({
  variable: '--font-pacifico',
  weight: '400',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  weight: '300',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  const currentHeaders = await headers();
  const acceptLanguage = currentHeaders.get('accept-language');
  const [top] = parser.parse(acceptLanguage);
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang={top?.code ?? 'ru'} className={cx(pacifico.variable, openSans.variable)}>
      <body>
        {children}

        {!isDev && <YandexMetrika />} 
      </body>
    </html>
  );
}

export const metadata = {
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
  },
};
