"use server";

import { z } from "zod";
import { CreateExerciseFormFields } from "@/components/exercise/NewExerciseForm";
import { createExercise } from "@/api/workout-tracker-api";
import { redirect } from "next/navigation";
import { exerciseDetailsRoute } from "@/routing/routes";

const schema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .nonempty("Name cannot be empty")
    .min(5, "Name must be at least 5 characters long"),
});

export async function createExerciseAction(_: unknown, data: FormData) {
  const values: CreateExerciseFormFields = {
    name: data.get("name") as string,
  };

  const validated = schema.safeParse(values);

  if (!validated.success) {
    return {
      values: {
        name: data.get("name") as string,
      },
      errors: validated.error.flatten().fieldErrors,
    };
  }

  const { data: responseData } = await createExercise({
    name: validated.data.name,
  });

  redirect(exerciseDetailsRoute(responseData.id));
}
