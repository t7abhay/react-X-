import React, { useState, useEffect } from "react";
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import "../styles/main.style.css";

export default function Theme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div
      className={`${
        isDark ? "dark " : ""
      }bg-pink-100 dark:bg-zinc-800 grid place-items-center h-screen w-full`}
    >
      <div className="bg-zinc-100 dark:bg-zinc-700 p-2 rounded-xl flex gap-2">
        <button
          className="bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg dark:text-white"
          onClick={() => setIsDark(false)}
          aria-label="Switch to light mode"
        >
          <LuSun />
        </button>
        <button
          className="bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg dark:text-white"
          onClick={() => setIsDark(true)}
          aria-label="Switch to dark mode"
        >
          <FaRegMoon />
        </button>
      </div>
    </div>
  );
}
