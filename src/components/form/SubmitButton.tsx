"use client";

import {Box, Button, ButtonProps, ElementProps, LoadingOverlay} from "@mantine/core";
import { useFormStatus } from "react-dom";

export type SubmitButtonProps = Omit<ButtonProps, "loading"> & ElementProps<'button', keyof ButtonProps>;

export function SubmitButton({children, ...rest}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
        <Button disabled={pending} {...rest}>
          {children}
        </Button>

  );
}
