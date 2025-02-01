export const baseRoute = "/";
export const errorRoute = `${baseRoute}error`;
export const error404Route = `${errorRoute}/404`;
export const workoutsRoute = `${baseRoute}workouts`;
export const workoutDetailsRoute = (workoutId: number) => `${workoutsRoute}/${workoutId}`
export const exercisesRoute = `${baseRoute}exercises`;
export const exerciseDetailsRoute = (exerciseId: number) => `${exercisesRoute}/${exerciseId}`
export const newExerciseRoute = `${exercisesRoute}/new`;
