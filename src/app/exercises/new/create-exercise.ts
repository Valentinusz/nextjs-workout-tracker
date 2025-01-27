'use server'

export async function createExercise(formData: FormData) {
    console.log(formData);

    await new Promise(resolve => setTimeout(resolve, 5000))

    return;
}
