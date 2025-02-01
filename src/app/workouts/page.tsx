import { Button, Paper, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { workoutDetailsRoute } from "@/routing/routes";
import { getWorkoutsOfUser } from "@/api/workout-tracker-api";
import { Metadata } from "next";
import { createWorkoutAction } from "@/app/workouts/create-workout.action";

export const metadata: Metadata = {
  title: "My workouts",
};

export default async function Page() {
  const { data: workouts } = await getWorkoutsOfUser(100);

  return (
    <div className="flex flex-col gap-sm">
      <Title className="flex gap-sm items-center">
        My workouts
        <form className="ml-auto" action={createWorkoutAction}>
          <Button leftSection={<IconPlus />} type="submit">
            New workout
          </Button>
        </form>
      </Title>
      <Title order={2}>Recent workouts</Title>
      {workouts.map((workout) => (
        <Paper
          key={workout.id}
          withBorder
          component={Link}
          href={workoutDetailsRoute(workout.id)}
        >
          #{workout.id}
        </Paper>
      ))}
    </div>
  );
}
