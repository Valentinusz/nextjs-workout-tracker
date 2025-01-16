import {
    Configuration,
    UserWorkoutApi,
    UserWorkoutApiFactory,
    WorkoutApi,
    WorkoutApiFactory
} from "@generated/workout-tracker-api";

const configuration = new Configuration({
    basePath: "http://localhost:5250",
});

export const {getWorkout, createWorkout} = WorkoutApiFactory(configuration);
export const {getWorkoutsOfUser} = UserWorkoutApiFactory(configuration);

