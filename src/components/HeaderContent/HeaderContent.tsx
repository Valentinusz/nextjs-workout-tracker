import {Anchor, Button} from "@mantine/core";
import Link from "next/link";

export function HeaderContent() {
  return (
    <>
        <Anchor component={Link} href="/">
            Home
        </Anchor>
      <Anchor component={Link} href="/workouts">
        Workouts
      </Anchor>
    </>
  );
}
