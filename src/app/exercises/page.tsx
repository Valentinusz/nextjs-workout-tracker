import { Button, Title } from "@mantine/core";
import { Metadata } from "next";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { newExerciseRoute } from "@/routing/routes";

export const metadata: Metadata = {
  title: "Exercises",
};

export default function ExercisesPage() {
  return (
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
  );
}
