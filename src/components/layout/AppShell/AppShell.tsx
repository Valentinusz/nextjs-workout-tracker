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
import { HeaderContent } from "@/components/layout/HeaderContent/HeaderContent";

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
      <AppShellHeader className="flex items-center px-md gap-sm">
        <Burger onClick={toggle} opened={open} />
        {headerContent}
      </AppShellHeader>
      <AppShellNavbar></AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
      {footer}
    </MantineAppShell>
  );
}
