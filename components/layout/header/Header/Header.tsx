import React from 'react';
import { AppShellHeader, Box, Button } from '@mantine/core';
import AppLogo from '@/components/layout/AppLogo/AppLogo';
import { HeaderLink } from '@/components/layout/header/HeaderLink/HeaderLink';
import openLoginModal from '@/components/login/open-login-modal';

export default function Header() {
  return (
    <AppShellHeader className="flex justify-center items-center w-full p-4 gap-4">
      <AppLogo />

      <Box visibleFrom="sm" className="flex justify-center items-center mr-auto">
        <HeaderLink href="workouts">Workouts</HeaderLink>
      </Box>

      <Box className="flex justify-center items-center gap-2" visibleFrom="xs">
        <Button variant="subtle" onClick={openLoginModal}>Login</Button>
        <Button variant="subtle">Register</Button>
      </Box>
    </AppShellHeader>
  );
}
