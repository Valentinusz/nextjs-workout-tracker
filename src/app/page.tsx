import {Card, Paper, Title} from "@mantine/core";
import {MonthlyProgress} from "@/components/MonthlyProgress/MonthlyProgress";

export default function Home() {
    return (
        <div className="flex">
            <Paper withBorder className="p-lg">
                <Title order={2}>Activity</Title>
                <MonthlyProgress/>
            </Paper>
        </div>
    );
}
