import {ActionIcon, Breadcrumbs, Button, Title} from "@mantine/core";
import {IconLock, IconPlus} from "@tabler/icons-react";
import {Metadata} from "next";

interface Props {
    params: Promise<{ workoutId: number }>
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    return {
        title: `Workout #${(await params).workoutId}`,
    }
}

export default async function WorkoutDetailsPage({params}: Props) {
    const {workoutId} = await params;
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
