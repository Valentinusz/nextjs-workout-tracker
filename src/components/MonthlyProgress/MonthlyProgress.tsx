"use client";

import { Calendar } from "@mantine/dates";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";
import { ActionIcon, Button } from "@mantine/core";

export function MonthlyProgress() {
  return (
    <>
      <div className="flex justify-between">
        <ActionIcon>
          <IconArrowLeft />
        </ActionIcon>
          <ActionIcon>
              <IconArrowRight/>
          </ActionIcon>
      </div>
      <div className="grid grid-cols-7 gap-[0.0625rem] bg-[var(--mantine-color-default-border)] border rounded">
        {Array.from({ length: 5 }).map((_, i) =>
          Array.from({ length: 7 }).map((_, j) => (
            <div
              key={`${i}-${j}`}
              className="h-12 w-12 bg-[var(--mantine-color-body)]"
            >
              {i * 7 + j + 1}
            </div>
          )),
        )}
      </div>
    </>
  );
}
