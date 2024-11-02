import { HTMLProps } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import classes from './HeaderLink.module.scss';

export type HeaderLinkProps = LinkProps & HTMLProps<HTMLAnchorElement>;

export function HeaderLink({ children, className, ...rest }: HeaderLinkProps) {
  return (
    <Link className={clsx(classes.headerLink, className)} {...rest}>
      {children}
    </Link>
  );
}
