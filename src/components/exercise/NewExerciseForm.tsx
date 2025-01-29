"use client";

import { createExerciseAction } from "@/app/exercises/new/create-exercise.action";
import { SubmitButton } from "@/components/form/SubmitButton";
import { IconPlus } from "@tabler/icons-react";
import { FormEvent, useActionState, useCallback, useRef } from "react";
import { CreateExerciseFormState } from "@/types/CreateExerciseFormState";
import {Button, TextInput} from "@mantine/core";

const initialState = {
  errors: {},
}

export function NewExerciseForm() {
  const [state, formAction, pending] = useActionState(createExerciseAction, initialState);

  console.log(state);

  return (
    <form
      className="flex flex-col gap-md"
      action={formAction}
    >
      <TextInput
        label="Name"
        name="name"
        error={state?.errors?.name}
        withAsterisk
      />
      <SubmitButton
        type="submit"
        leftSection={<IconPlus />}
        className="mr-auto"
      >
        Create exercise
      </SubmitButton>
      <Button loading={pending}/>
    </form>
  );
}
