"use client";

import React, { useEffect } from "react";
import styles from "@/app/main.module.scss";
import { cn } from "@/lib/utils";
import { useState, useCallback } from "react";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import LineChartCustom from "@/components/sections/line-chart-custom";
import ColumnChartCustom from "@/components/sections/column-chart-custom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateLast30DaysData } from "@/lib/custom-data";
import { DataPoint } from "@/lib/custom-data";
import {
  filterDataByDateRange,
  formatDate,
} from "@/actions/filter-data-by-date-ranger";

const Dashboard = () => {
  // Function get data custom

  const [data, useData] = useState<DataPoint[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await generateLast30DaysData();
      useData(res);
    };
    getData();
  }, []);

  if (!data) null;

  // Function filter data

  const [filterRange, setFilterRange] = useState<string>("7");
  const [filteredData, setFilteredData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const filtered = filterDataByDateRange(data, filterRange);
    setFilteredData(filtered);
  }, [filterRange, data]);

  return (
    <div className="flex flex-col gap-10 justify-start items-start p-4 w-full">
      <div className="w-full">
        <h3 className={cn(`${styles.h3} text-colors-text`)}>
          Good Morning, Master
        </h3>
        <p className={cn(`${styles.base} text-colors-text`)}>
          Here's what's happening with your store today.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4">
        {/* <DatePickerWithRange /> */}
        <Select onValueChange={setFilterRange}>
          <SelectTrigger className={cn("w-[150px]")}>
            <SelectValue placeholder="Last 7 days" />
          </SelectTrigger>
          <SelectContent className="z-100 bg-colors-static1">
            <SelectItem value="14">Last 14 days</SelectItem>
            <SelectItem value="21">Last 21 days</SelectItem>
            <SelectItem value="30">Last 1 month</SelectItem>
          </SelectContent>
        </Select>

        <div className="w-full flex md:flex-row flex-col gap-4">
          <div className="md:w-1/2 w-full">
            <LineChartCustom
              initialData={filteredData.map((d) => ({
                ...d,
                date: formatDate(d.date),
              }))}
            />
          </div>
          <div className="md:w-1/2 w-full">
            <ColumnChartCustom
              initialData={filteredData.map((d) => ({
                ...d,
                date: formatDate(d.date),
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
