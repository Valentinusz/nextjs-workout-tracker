import { Anchor, AppShellHeader } from "@mantine/core";
import Link from "next/link";
import { ColorSchemeToggleButton } from "@/components/theme/ColorSchemeToggleButton";
import { PropsWithChildren } from "react";

export type HeaderProps = PropsWithChildren

export function Header({ children }: HeaderProps) {
  return (
    <AppShellHeader className="flex items-center px-md">
      {children}
      <Anchor component={Link} href="/">
        Home
      </Anchor>
      <Anchor component={Link} href="/workouts">
        Workouts
      </Anchor>
      <ColorSchemeToggleButton />
    </AppShellHeader>
  );
}
