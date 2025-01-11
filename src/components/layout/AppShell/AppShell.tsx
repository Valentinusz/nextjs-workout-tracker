"use client";

import {
  AppShell as MantineAppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Burger,
} from "@mantine/core";
import { PropsWithChildren, ReactNode } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";

export interface AppShellProps extends PropsWithChildren {
  footer: ReactNode;
  headerContent: ReactNode;
}

export function AppShell({ children, footer, headerContent }: AppShellProps) {
  const [open, { toggle }] = useDisclosure();

  return (
    <MantineAppShell
      padding={16}
      navbar={{
        width: 300,
        breakpoint: "xl",
        collapsed: {
          desktop: !open,
          mobile: !open,
        },
      }}
      header={{
        height: 60,
      }}
      footer={{
        height: 60,
      }}
    >
      <Header>
        <Burger onClick={toggle} />
        {headerContent}
      </Header>
      <AppShellNavbar></AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
      {footer}
    </MantineAppShell>
  );
}
