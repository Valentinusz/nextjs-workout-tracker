"use client";

import { Calendar } from "@mantine/dates";
import { IconArrowLeft, IconArrowRight, IconPlus } from "@tabler/icons-react";
import { ActionIcon, Button, Select, Tooltip } from "@mantine/core";
import { first } from "rxjs";
import { useState } from "react";
import Link from "next/link";
import {Routes} from "@/routing/routes";

function getDaysInMonth(date: Date) {
  const lastMonthLastDay =
    date.getMonth() === 0
      ? new Date(date.getFullYear() - 1, 12, 0).getDate()
      : new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  let firstDayOfMonthInWeek =
    new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;

  if (firstDayOfMonthInWeek === -1) {
    firstDayOfMonthInWeek = 6;
  }

  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();
  console.log(
    "Month:",
    date.getMonth(),
    "Days in month:",
    daysInMonth,
    "Last day of last month: ",
    lastMonthLastDay,
  );

  const totalItems = daysInMonth + firstDayOfMonthInWeek > 35 ? 42 : 35;

  return [
    ...Array.from({ length: firstDayOfMonthInWeek })
      .map((_, i) => lastMonthLastDay - i)
      .toReversed(),
    ...Array.from({ length: daysInMonth }).map((_, i) => i + 1),
    ...Array.from({
      length: totalItems - daysInMonth - firstDayOfMonthInWeek,
    }).map((_, i) => i + 1),
  ];
}

export function MonthlyProgress() {
  const [month, setMonth] = useState<number>(new Date().getMonth());

  return (
    <>
      <div className="flex justify-between">
        <ActionIcon
          variant="transparent"
          onClick={() => setMonth((value) => value - 1)}
        >
          <IconArrowLeft />
        </ActionIcon>
        {month + 1}
        <ActionIcon
          variant="transparent"
          onClick={() => setMonth((value) => value + 1)}
        >
          <IconArrowRight />
        </ActionIcon>
      </div>
      <div className="grid grid-cols-7">
        {getDaysInMonth(new Date(new Date().getFullYear(), month, 1)).map(
          (day, i) => (
            <div
              key={`${day}-${i}`}
              className="flex flex-col w-16 h-16 bg-[var(--mantine-color-body)] hover:bg-[var(--mantine-color-default-hover)] rounded px-1"
            >
              {day}
              <Tooltip label="Add workout" position="bottom">
                <ActionIcon variant="subtle" component={Link} href={Routes.NEW_WORKOUT}>
                  <IconPlus />
                </ActionIcon>
              </Tooltip>
            </div>
          ),
        )}
      </div>
    </>
  );
}
