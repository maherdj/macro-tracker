"use client";

import { PieChart } from "@mui/x-charts";
import React, { useState } from "react";

export default function DailyOverview() {
  const data = [
    { label: "Group A", value: 400 },
    { label: "Group B", value: 300 },
    { label: "Group C", value: 300 },
    { label: "Group D", value: 200 },
  ];
  return (
    <div className="flex items-center justify-center p-7 m-7 border-4  rounded-xl ">
      <PieChart
        series={[
          {
            data,
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 90,
            cx: 300,
            cy: 200,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: 0, color: "gray" },
          },
        ]}
        margin={{ right: 5 }}
        width={600}
        height={400}
        slotProps={{
          legend: { hidden: true },
        }}
      />
    </div>
  );
}
