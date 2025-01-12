'use client'

import {
    ActionIcon, ActionIconProps,
    useComputedColorScheme,
    useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import classes from "./ColorSchemeToggleButton.module.scss";
import clsx from "clsx";

export type ColorSchemeToggleButtonProps = Omit<ActionIconProps, "onClick">

export function ColorSchemeToggleButton(props: ColorSchemeToggleButtonProps) {
  const colorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const { setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')} {...props}>
      {/* This workaround is required to prevent hydration error */}
      <IconSun className={clsx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={clsx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
