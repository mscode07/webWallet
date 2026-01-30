"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const SolanaWalletWallet = () => {
  const createSolanaWallet = () => {};
  const [isGenerated, setIsGenerated] = useState(false);
  return (
    <>
      <div>
        <div className="border border-gray-900 p-2 ">
          <p>Secret Recovery Phrase</p>
          <p>Keep this phrase safe and never share it with anyone.</p>
          <Button
            className="mt-4 hover:cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setIsGenerated(true);
            }}
          >
            Generate Wallet
          </Button>
          {isGenerated && (
            <div>
              <p className="mt-2 text-sm text-green-500">
                Phrase generated successfully!
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Your secret recovery phrase 👇
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-4 px-2 py-1 gap-1 border border-gray-800 text-sm">
                      <span>destroy</span>
                      <span>retire</span>
                      <span>mirror</span>
                      <span>gospel</span>
                      <span>cany</span>
                      <span>assed</span>
                      <span>field</span>
                      <span>wheel</span>
                      <span>gate</span>
                      <span>auction</span>
                      <span>borrow</span>
                      <span>join</span>
                      <span>predict</span>
                      <span>crop</span>
                      <span>select</span>
                      <span>photo</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
        {isGenerated && (
          <div>
            <div className="flex justify-between items-center mt-5 border border-gray-900 p-2">
              <p>Sonala Wallet</p>
              <div className="gap-2">
                <Button className="text-xs" onClick={createSolanaWallet}>
                  + Add Wallet
                </Button>
                <Button className="text-xs" variant={"destructive"}>
                  Delete
                </Button>
              </div>
            </div>
            <div>
              <div>
                <p>Wallet 1</p>
                <div>
                  <div>
                    <p>Public Key</p>
                    <p>
                      5Z47890123456789012345678901234567890123456789012345678901234567
                    </p>
                  </div>
                  <div>
                    <p>Private Key</p>
                    <p>
                      *********************************************************
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
