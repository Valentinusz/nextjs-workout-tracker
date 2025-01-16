import {ActionIcon, Button, Title} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";
import Link from "next/link";
import {Routes} from "@/routing/routes";
import {getWorkoutsOfUser} from "@/api/workout-tracker-api";

export default async function Page() {
    const workouts = await getWorkoutsOfUser("100");

    console.log(workouts)

    return (
        <>
            <Title>
                My workouts
                <ActionIcon variant="light" component={Link} href={Routes.NEW_WORKOUT}><IconPlus/></ActionIcon>
            </Title>
            <Title order={2}>
                Recent
            </Title>
        </>


    );
}
