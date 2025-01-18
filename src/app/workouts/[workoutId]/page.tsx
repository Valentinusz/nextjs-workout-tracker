import {ActionIcon, Breadcrumbs, Button, Title} from "@mantine/core";
import {IconLock, IconPlus} from "@tabler/icons-react";


export default async function WorkoutDetailsPage({params}: {params: Promise<{ workoutId:number }>}) {
    const { workoutId } = await params;
    const sets = [];

    return (
        <div className="flex flex-col gap-md">
            <Title className="flex gap-sm items-center">Workout #{workoutId}
                <Button className="ml-auto" leftSection={<IconPlus/>}>New set</Button>
                <Button color="red" leftSection={<IconLock/>}>End workout</Button>
            </Title>
            <section>
                <Title order={2}>
                    Sets
                </Title>
            </section>
        </div>
    )
}
