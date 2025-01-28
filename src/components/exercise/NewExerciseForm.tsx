'use client'

import { createExercise } from "@/app/exercises/new/create-exercise";
import { TextInput } from "@mantine/core";
import { SubmitButton } from "@/components/form/SubmitButton";
import { IconPlus } from "@tabler/icons-react";
import {useForm} from "react-hook-form";
import { useFormState } from "react-dom";
import { useRef } from "react";

export function NewExerciseForm() {
  //   https://www.youtube.com/watch?v=VLk45JBe8L8
  const [state, formAction] = useFormState(createExercise, {
      message: "",
  });

  const form = useForm({
      defaultValues: {
          name: ""
      }
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form className="flex flex-col gap-md" ref={formRef}         action={formAction}
          onSubmit={(evt) => {
              evt.preventDefault();
              form.handleSubmit(() => {
                  formAction(new FormData(formRef.current!));
              })(evt);
          }}>
      <TextInput label="Name" {...form.register("name", {required: "Name is required"})} withAsterisk />
      <SubmitButton
        type="submit"
        leftSection={<IconPlus />}
        className="mr-auto"
      >
        Create exercise
      </SubmitButton>
    </form>
  );
}
