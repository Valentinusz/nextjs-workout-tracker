export const baseRoute = "/";
export const workoutsRoute = `${baseRoute}workouts`;
export const newWorkoutRoute = `${workoutsRoute}/new`;
export const workoutDetailsRoute = (workoutId: number) => `${workoutsRoute}/${workoutId}`


export const exercisesRoute = `${baseRoute}exercises`;
export const newExerciseRoute = `${exercisesRoute}/new`;
