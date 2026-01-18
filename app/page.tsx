"use client";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Wallet } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div className="flex flex-col  min-h-screen w-4/6 mx-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-5 ">
        <div>
          <div className="flex items-center">
            <header className="">
              <div className="flex gap-2 text-2xl font-bold items-center my-10">
                <Wallet />
                WallIt
              </div>
            </header>
            <div className="ml-auto">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-5"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-gray-700" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-200" />
                )}
              </button>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              ></ThemeProvider>
            </div>
          </div>
          <div className="">
            <p className="font-bold text-4xl my-2">
              Welcome to Wallit, supports multiple blockchains
            </p>
            <p className="text-gray-300 text-xl">
              You'll use this wallet to send and receive crypto and NGTs
            </p>
          </div>
          <div className="my-5 gap-3 flex">
            <Button className="hover:cursor-pointer ">Solana</Button>
            <Button variant={"outline"} className="hover:cursor-pointer">
              Ethereum
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
