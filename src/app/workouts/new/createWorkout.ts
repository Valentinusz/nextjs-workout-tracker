'use server'

import {redirect} from "next/navigation";
import {createWorkout} from "@/api/workout-tracker-api";
import {workoutDetailsRoute} from "@/routing/routes";

export async function createWorkoutAction(): Promise<void> {
    console.log("asd")

    const {data} = await createWorkout();

    redirect(workoutDetailsRoute(data.id))
}
