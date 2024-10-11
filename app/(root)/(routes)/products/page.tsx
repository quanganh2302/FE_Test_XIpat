"use client";
import React from "react";
import styles from "@/app/main.module.scss";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import IndexTableWithViewsSearchFilterSorting from "@/components/sections/data-table";
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
const Products = () => {
  return (
    <div className="w-full sm:p-10 p-4 ">
      <AppProvider i18n={{ en }}>
        <div className="w-full flex justify-between items-center">
          <h2 className={cn(`${styles.h2}`)}>Products</h2>
          <Button className="">Add product</Button>
        </div>
        <div className="sm:max-w-full max-w-[280px]  mt-10">
          <IndexTableWithViewsSearchFilterSorting></IndexTableWithViewsSearchFilterSorting>
        </div>
      </AppProvider>
    </div>
  );
};

export default Products;
