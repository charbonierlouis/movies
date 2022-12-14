/* eslint-disable jsx-a11y/html-has-lang */
import { ReactNode } from 'react';

import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
