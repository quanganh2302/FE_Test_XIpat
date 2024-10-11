"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { DataPoint } from "@/lib/custom-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A linear line chart";

interface ChartWithFilterProps {
  initialData: DataPoint[];
}

const chartConfig = {
  desktop: {
    label: "Customer",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const LineChartCustom: React.FC<ChartWithFilterProps> = ({ initialData }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart </CardTitle>
        <CardDescription>
          {initialData[0]?.date} - {initialData[initialData.length - 1]?.date}{" "}
           - 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={initialData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              className="stroke-colors-accent"
              dataKey="customer"
              type="linear"
              stroke="var(--accent)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartCustom;
