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
import { Footer } from "@/components/Footer/Footer";

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
      <AppShellHeader className="flex items-center px-md">
        <Burger onClick={toggle} />
        {headerContent}
      </AppShellHeader>
      <AppShellNavbar></AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
      <AppShellFooter>{footer}</AppShellFooter>
    </MantineAppShell>
  );
}
