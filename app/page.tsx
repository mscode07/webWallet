"use client";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Coins, Moon, Sun, Wallet } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SolanaWalletWallet } from "@/app/components/SolanaWallet";
import { useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [solanaWallet, setSolanaWallet] = useState(false);
  const [ethWallet, setEthWallet] = useState(false);
  return (
    <div>
      <div className="flex flex-col  min-h-screen w-4/6 mx-auto bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100 px-5 ">
        <div className="">
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
          {solanaWallet || ethWallet ? (
            <>
              <div className="flex items-center justify-center mt-5">
                <SolanaWalletWallet />
              </div>
            </>
          ) : (
            <>
              <div className="">
                <p className="font-bold text-4xl my-2">
                  Welcome to Wallit, supports multiple blockchains
                </p>
                <p className="text-gray-300 text-xl">
                  <span className="text-blue-500 font-bold">
                    The-All-in-One{" "}
                  </span>
                  Wallet Crypto Wallet
                </p>
              </div>
              <div className="my-5 gap-3 flex">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setSolanaWallet(true);
                  }}
                  className="flex items-center gap-2 hover:cursor-pointer"
                >
                  <img src="/solana.svg" alt="Solana" className="w-4 h-4" />
                  Solana
                </Button>

                {/* <Dialog>
              <DialogTrigger>
                <Button className="flex items-center gap-2 hover:cursor-pointer">
                  <img src="/solana.svg" alt="Solana" className="w-4 h-4" />
                  Solana
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <p className="flex items-center gap-3">
                      <Coins />
                      <p className="text-2xl">Create Solana Wallet</p>
                    </p>
                  </DialogTitle>
                  <DialogDescription>
                    <SolanaWalletWallet />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog> */}

                <Button
                  variant={"outline"}
                  className="flex items-center gap-2 hover:cursor-pointer"
                >
                  <img src="/eth.svg" alt="Solana" className="w-4 h-4" />
                  Ethereum
                </Button>
              </div>
            </>
          )}
          {/* <div className="">
            <p className="font-bold text-4xl my-2">
              Welcome to Wallit, supports multiple blockchains
            </p>
            <p className="text-gray-300 text-xl">
              <span className="text-blue-500 font-bold">The-All-in-One </span>
              Wallet Crypto Wallet
            </p>
          </div>
          <div className="my-5 gap-3 flex">
            <Button
              onClick={(e) => {
                e.preventDefault();
                setSolanaWallet(true);
              }}
              className="flex items-center gap-2 hover:cursor-pointer"
            >
              <img src="/solana.svg" alt="Solana" className="w-4 h-4" />
              Solana
            </Button>

            <Button
              variant={"outline"}
              className="flex items-center gap-2 hover:cursor-pointer"
            >
              <img src="/eth.svg" alt="Solana" className="w-4 h-4" />
              Ethereum
            </Button>
          </div> */}
          {/* {solanaWallet && (
            <div className="flex items-center justify-center mt-5">
              <SolanaWalletWallet />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
