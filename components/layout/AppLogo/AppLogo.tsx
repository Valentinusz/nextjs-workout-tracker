import React, { HTMLProps } from 'react';
import Link from 'next/link';
import { IconBarbell } from '@tabler/icons-react';
import clsx from 'clsx';
import { px } from '@mantine/core';

export type AppLogoProps = Omit<HTMLProps<HTMLAnchorElement>, 'href'>;

export default function AppLogo({ className, ...rest }: AppLogoProps) {
  return (
    <Link
      href="/"
      className={clsx('text-lg font-bold flex items-center gap-1', className)}
      {...rest}
    >
      <IconBarbell size={px('2rem')} />
      Workout tracker
    </Link>
  );
}
