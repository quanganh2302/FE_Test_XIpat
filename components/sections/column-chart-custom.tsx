"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { DataPoint } from "@/lib/custom-data";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

interface ChartWithFilterProps {
  initialData: DataPoint[];
}

const chartConfig = {
  desktop: {
    label: "Customer",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const ColumnChartCustom: React.FC<ChartWithFilterProps> = ({ initialData }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>
          {initialData[0]?.date} - {initialData[initialData.length - 1]?.date}{" "}
          - 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={initialData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar className="fill-colors-accent" dataKey="customer" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ColumnChartCustom;
