import {ActionIcon, Paper, Title, Tooltip} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";
import Link from "next/link";
import {newWorkoutRoute, workoutDetailsRoute} from "@/routing/routes";
import {getWorkoutsOfUser} from "@/api/workout-tracker-api";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "My workouts"
}

export default async function Page() {
    const {data: workouts} = await getWorkoutsOfUser("100");

    return (
        <div className="flex flex-col gap-sm">
            <Title className="flex gap-sm items-center">
                My workouts
                {/*<Tooltip label="New workout">*/}
                    <ActionIcon variant="light" component={Link} href={newWorkoutRoute}><IconPlus/></ActionIcon>
                {/*</Tooltip>*/}
            </Title>
            <Title order={2}>
                Recent workouts
            </Title>
            {workouts.map(workout => (
                <Paper key={workout.id} withBorder component={Link} href={workoutDetailsRoute(workout.id)}>
                    #{workout.id}
                </Paper>
            ))}
        </div>
    );
}
