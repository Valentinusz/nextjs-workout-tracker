import {Anchor, Button, Text, Title} from "@mantine/core";
import {IconMoodPuzzled} from "@tabler/icons-react";
import Link from "next/link";
import {baseRoute} from "@/routing/routes";

export default function Error404Page() {
  return (
    <div className="flex flex-col items-center py-xl gap-md">
      <Title>404</Title>
      <Title order={2}>Not found</Title>
        <IconMoodPuzzled size={128}/>
        <Text>The page you are looking for doesn&#39;t exist.</Text>
        <Text>If you believe this to be the error submit a report.</Text>
        <Anchor component={Link} href={baseRoute}>Take me home</Anchor>
    </div>
  );
}
