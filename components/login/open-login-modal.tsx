'use client';

import { modals } from '@mantine/modals';
import LoginForm from '@/components/login/LoginForm/LoginForm';

export default function openLoginModal() {
  modals.open({
    title: 'Login',
    children: <LoginForm />,
  });
}
