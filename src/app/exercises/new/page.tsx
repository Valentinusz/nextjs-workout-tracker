import { Breadcrumbs, Text, TextInput, Title } from "@mantine/core";
import Link from "next/link";
import { Anchor } from "@mantine/core";
import { exercisesRoute } from "@/routing/routes";
import { IconPlus } from "@tabler/icons-react";
import { SubmitButton } from "@/components/form/SubmitButton";
import {createExercise} from "@/app/exercises/new/create-exercise";

export default function NewExercisePage() {
  return (
    <>
      <Breadcrumbs>
        <Anchor component={Link} href={exercisesRoute}>
          Exercises
        </Anchor>
        <Text>New</Text>
      </Breadcrumbs>
      <Title>New exercise</Title>
      <form className="flex flex-col gap-md" action={createExercise}>
        <TextInput label="Name" withAsterisk />
        <SubmitButton type="submit" leftSection={<IconPlus />} className="mr-auto">
          Create exercise
        </SubmitButton>
      </form>
    </>
  );
}
