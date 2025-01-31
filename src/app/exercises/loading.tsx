import {Button, Skeleton, Title} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";
import Link from "next/link";
import {newExerciseRoute} from "@/routing/routes";

export default function ExercisesPageLoading() {
    return (
        <div className="flex items-center gap-xs">
            <Title>Exercises</Title>
            <Skeleton w={300} h={300}/>
        </div>
    )
}
