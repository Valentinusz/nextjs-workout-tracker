import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import { PropsWithChildren } from "react";
import {ColorSchemeScript, mantineHtmlProps, MantineProvider} from "@mantine/core";
import { AppShell } from "@/components/layout/AppShell/AppShell";
import { Footer } from "@/components/layout/Footer/Footer";
import { ModalsProvider } from "@mantine/modals";
import {Notifications} from "@mantine/notifications";
import {HeaderContent} from "@/components/layout/header/HeaderContent";

export type LayoutProps = PropsWithChildren;

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript/>
      </head>
      <body>
        <MantineProvider>
          <ModalsProvider>
            <AppShell footer={<Footer />} headerContent={<HeaderContent/>}>{children}</AppShell>
            <Notifications/>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
