'use server'

import {z} from "zod";

const schema = z.object({
    name: z.string({
        required_error: 'Name is required',
    }).nonempty("Name is required"),
})

export type CreateExerciseFormState = typeof schema;

export async function createExerciseAction(previousState, data: FormData) {
    const validatedFields = schema.safeParse({
        name: data.get('name'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
}
