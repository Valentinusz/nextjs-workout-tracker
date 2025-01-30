"use client";

import { createExerciseAction } from "@/app/exercises/new/create-exercise.action";
import { SubmitButton } from "@/components/form/SubmitButton";
import { IconPlus } from "@tabler/icons-react";
import { useActionState } from "react";
import {Button, TextInput} from "@mantine/core";

export interface FormState {
  errors: {
    name?: string[];
  };
  values: CreateExerciseFormFields;
}

export interface CreateExerciseFormFields {
  name: string;
}

const initialState: FormState = {
  errors: {},
  values: {
    name: ""
  }
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
        defaultValue={state?.values.name}
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
