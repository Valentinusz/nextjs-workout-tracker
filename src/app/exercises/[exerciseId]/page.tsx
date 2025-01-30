import {Metadata} from "next";
import {getExerciseById} from "@/api/workout-tracker-api";
import {redirect} from "next/navigation";
import {error404Route} from "@/routing/routes";

export interface ExerciseDetailsPageProps {
    params: Promise<{
        exerciseId: number;
    }>
}

export async function generateMetadata({params}: ExerciseDetailsPageProps): Promise<Metadata> {
    const exerciseId = (await params).exerciseId;

    try {
        const {data} = await getExerciseById(exerciseId);

        return {
            title: `${data.name} - Exercises`
        }
    } catch {
        return {title: "Not found"};
    }
}

export default async function ExerciseDetailsPage({params}: ExerciseDetailsPageProps) {
    const exerciseId = (await params).exerciseId;

    try {
        const {data} = await getExerciseById(exerciseId);

        return <div>asd</div>
    } catch {
        redirect(error404Route)
    }
}
