import { Breadcrumbs, Text, TextInput, Title } from "@mantine/core";
import Link from "next/link";
import { Anchor } from "@mantine/core";
import { exercisesRoute } from "@/routing/routes";
import { IconPlus } from "@tabler/icons-react";
import { SubmitButton } from "@/components/form/SubmitButton";
import {createExerciseAction} from "@/app/exercises/new/create-exercise.action";
import {NewExerciseForm} from "@/components/exercise/NewExerciseForm";

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
      <NewExerciseForm/>
    </>
  );
}
