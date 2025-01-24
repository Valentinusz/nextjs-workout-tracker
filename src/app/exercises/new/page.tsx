import { Breadcrumbs, Button, Text, TextInput, Title } from "@mantine/core";
import Link from "next/link";
import { Anchor } from "@mantine/core";
import { exercisesRoute } from "@/routing/routes";
import { IconPlus } from "@tabler/icons-react";

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
      <form className="flex flex-col gap-md">
        <TextInput label="Name" withAsterisk />
        <Button leftSection={<IconPlus />} className="mr-auto">Create exercise</Button>
      </form>
    </>
  );
}
