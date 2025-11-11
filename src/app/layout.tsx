import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'School Management',
  description: 'Project Exercise',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`h-screen flex`}>{children}</body>
    </html>
  );
}
