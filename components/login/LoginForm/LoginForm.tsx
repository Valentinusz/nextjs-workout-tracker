import { Button, TextInput } from '@mantine/core';
import classes from './LoginForm.module.scss';

export default function LoginForm() {
  return (
    <form className={classes.form}>
      <TextInput label="Username" />
      <TextInput label="Password" />
      <Button type="submit"  className={classes.submitButton}>Login</Button>
    </form>
  );
}
