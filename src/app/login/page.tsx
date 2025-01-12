import { signup } from "@/app/actions/auth";
import {Button, PasswordInput, TextInput} from "@mantine/core";

export default function Page() {
  return (
    <form action={signup} className="flex flex-col gap-md">
      <TextInput label="Name" placeholder="Name" name="name" />
      <TextInput label="Email" type="email" name="email" />
      <PasswordInput label="Password" name="password" />
      <Button type="submit">Sign Up</Button>
    </form>
  );
}
