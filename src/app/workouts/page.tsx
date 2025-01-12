import {ActionIcon, Button, Title} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";
import Link from "next/link";
import {Routes} from "@/routing/routes";

export default function Home() {
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
