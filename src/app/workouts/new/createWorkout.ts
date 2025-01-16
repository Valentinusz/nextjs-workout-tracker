'use server'

import {redirect} from "next/navigation";
import {Routes} from "@/routing/routes";
import {createWorkout} from "@/api/workout-tracker-api";

export async function createWorkoutAction(): Promise<void> {
    console.log("asd")

    await createWorkout();

    redirect(Routes.WORKOUTS)
}
