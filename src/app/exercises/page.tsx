import { Button, Pagination, Paper, Title } from "@mantine/core";
import { Metadata } from "next";
import { IconFileOff, IconMoodEmpty, IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import {exerciseDetailsRoute, newExerciseRoute} from "@/routing/routes";
import { getExercises } from "@/api/workout-tracker-api";

export const metadata: Metadata = {
  title: "Exercises",
};

export default async function ExercisesPage() {
  const { data } = await getExercises(0, 20);

  return (
    <div className="flex flex-col gap-md">
      <div className="flex items-center gap-xs">
        <Title>Exercises</Title>
        <Button
          leftSection={<IconPlus />}
          variant="light"
          component={Link}
          href={newExerciseRoute}
        >
          New
        </Button>
      </div>
      {data.content?.length === 0 ? (
        <Paper
          className="flex flex-col gap-md p-xl items-center justify-center"
          withBorder
          shadow="lg"
        >
          <Title order={2}>No exercises</Title>
          <IconFileOff size={64} />
          <Button className="mx-auto">New exercise</Button>
        </Paper>
      ) : (
        data.content?.map((exercise) => (
          <Paper className="p-md" key={exercise.id} withBorder component={Link} href={exerciseDetailsRoute(exercise.id)}>
            <Title order={2}> {exercise.name}</Title>
          </Paper>
        ))
      )}
      <Pagination className="mx-auto" total={data.totalPages} />
    </div>
  );
}
