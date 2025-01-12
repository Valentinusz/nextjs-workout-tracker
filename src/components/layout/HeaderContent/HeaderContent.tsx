import {Anchor, AppShellHeader, Button} from "@mantine/core";
import Link from "next/link";
import { ColorSchemeToggleButton } from "@/components/theme/ColorSchemeToggleButton";
import { PropsWithChildren } from "react";

export type HeaderProps = PropsWithChildren;

export function HeaderContent({ children }: HeaderProps) {
  console.log(children);

  return (
    <>
      {children}
      <Button variant="transparent" component={Link} href="/">
        Home
      </Button>
      <Button variant="transparent" component={Link} href="/workouts">
        Workouts
      </Button>
      <ColorSchemeToggleButton variant="light" className="ml-auto" />
        <Button variant="light" component={Link} href="/login">Login</Button>
        <Button variant="light">Register</Button>
    </>
  );
}
