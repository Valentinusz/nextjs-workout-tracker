import Link from 'next/link';
import { AppShellFooter } from '@mantine/core';
import AppLogo from '@/components/layout/AppLogo/AppLogo';
import classes from './Footer.module.scss';

const links = [
  {
    link: 'contact',
    label: 'Contact',
  },
  {
    link: 'privacy',
    label: 'Privacy policy',
  },
];

export default function Footer() {
  return (
    <AppShellFooter className={classes.footer}>
      <AppLogo className={classes.appLogo} />
      {links.map(({ label, link }) => (
        <Link key={label} href={link} className={classes.footerLink}>
          {label}
        </Link>
      ))}
    </AppShellFooter>
  );
}
