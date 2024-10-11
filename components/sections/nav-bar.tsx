"use client";

import React from "react";
import styles from "@/app/main.module.scss";
import { cn } from "@/lib/utils";
import { House, Settings, FolderKanban } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const route = useRouter();
  return (
    <div className="h-screen sm:w-2/12 bg-colors-static1 sm:p-4 p-1 flex flex-col justify-between ">
      <div className="w-full flex flex-col ">
        <div
          onClick={() => route.push("/dashboard")}
          className={cn(
            `sm:w-full w-12 h-12 rounded-[50px] p-4 flex justify-start items-center gap-4 opacity-60 hover:opacity-100 cursor-pointer duration-300,
            ${
              pathname === "/dashboard"
                ? "bg-colors-secondary20 opacity-100"
                : ""
            } ,
            ${styles.navLink}`
          )}
        >
          <House className="w-5 h-5 text-colors-accent" />
          <p className="sm:block hidden">Dashboard</p>
        </div>
        <div
          onClick={() => route.push("/products")}
          className={cn(
            `sm:w-full w-12 h-12 rounded-[50px] p-4 flex justify-start items-center gap-4 opacity-60 hover:opacity-100 cursor-pointer duration-300,
            ${
              pathname === "/products"
                ? "bg-colors-secondary20 opacity-100"
                : ""
            } ,
            ${styles.navLink}`
          )}
        >
          <FolderKanban className="w-5 h-5 text-colors-accent" />
          <p className="sm:block hidden">Products</p>
        </div>
      </div>
      <div
        onClick={() => route.push("/settings")}
        className={cn(
          `sm:w-full w-12 h-12 rounded-[50px] p-4 flex justify-start items-center gap-4 opacity-60 hover:opacity-100 cursor-pointer duration-300,
            ${
              pathname === "/settings"
                ? "bg-colors-secondary20 opacity-100"
                : ""
            } ,
            ${styles.navLink}`
        )}
      >
        <Settings className="w-5 h-5 text-colors-accent" />
        <p className="sm:block hidden">Settings</p>
      </div>
    </div>
  );
};

export default NavBar;
