import {Button} from "@mantine/core";
import {createWorkout} from "@/app/workouts/new/createWorkout";

export default function Page() {
    return (
        <form action={createWorkout}>
            <Button type="submit">Create workout</Button>
        </form>
    )
}
