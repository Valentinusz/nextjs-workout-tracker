import '@mantine/core/styles.css';
import './globals.css';

import React from 'react';
import { Metadata } from 'next';
import { AppShell, AppShellMain, ColorSchemeScript, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/header/Header/Header';
import { theme } from '@/theme';

export const metadata: Metadata = {
  title: {
    template: '%s | Workouts',
    default: 'Workouts',
  },
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <title>Workouts</title>
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ModalsProvider>
            <AppShell header={{ height: 60 }} footer={{ height: 60 }}>
              <Header />
              <AppShellMain>{children}</AppShellMain>
              <Footer />
            </AppShell>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
