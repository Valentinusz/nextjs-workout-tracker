import {Card, Paper, Title} from "@mantine/core";
import {MonthlyProgress} from "@/components/MonthlyProgress/MonthlyProgress";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Home"
};

export default async function Home() {
    return (
        <div className="flex">
            <Paper withBorder className="p-lg">
                <Title order={2}>Activity</Title>
                <MonthlyProgress/>
            </Paper>
        </div>
    );
}
