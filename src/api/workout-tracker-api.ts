import {Configuration, WorkoutApi} from "@generated/workout-tracker-api";

const configuration = new Configuration({
    basePath: "http://localhost:5250",
});

export const workoutTrackerApi = new WorkoutApi(configuration);
