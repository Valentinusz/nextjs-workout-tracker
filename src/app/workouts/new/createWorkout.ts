'use server'

import {workoutTrackerApi} from "@/api/workout-tracker-api";
import {redirect} from "next/navigation";
import {Routes} from "@/routing/routes";

export async function createWorkout(): Promise<void> {
    console.log("asd")

    await workoutTrackerApi.createWorkout()

    redirect(Routes.WORKOUTS)
}
