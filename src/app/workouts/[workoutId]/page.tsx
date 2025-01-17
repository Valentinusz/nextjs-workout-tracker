import {Breadcrumbs, Title} from "@mantine/core";


export default async function WorkoutDetailsPage({params}: {params: Promise<{ workoutId:number }>}) {
    const { workoutId } = await params;

    return (
        <Title>Workout #{workoutId}</Title>
    )
}
