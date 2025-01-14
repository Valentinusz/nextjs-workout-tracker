import {Button, Title} from "@mantine/core";
import {createWorkout} from "@/app/workouts/new/createWorkout";
import {DateInput, DatePicker} from "@mantine/dates";

export default function Page() {
    return (
        <>
            <Title>New workout</Title>
            <form action={createWorkout} className="flex flex-col gap-md">
                <DateInput/>
                <Button type="submit">Create workout</Button>
            </form>
        </>

    )
}
