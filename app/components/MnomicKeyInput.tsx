import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Keypair } from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeedSync, validateMnemonic } from "bip39";
import bs58 from "bs58";
import { derivePath } from "ed25519-hd-key";
import { useState } from "react";
import nacl from "tweetnacl";

interface HdKeyring {
  publicKey: string;
  privateKey: string;
  mnemonic: string;
  derivationPath: string;
}
interface MnomicKeyInputProps {
  pathTypes: string;
}

export const MnomicKeyInput = ({ pathTypes }: MnomicKeyInputProps) => {
  const [mnemonicInput, setMnemonicInput] = useState<string>("");
  console.log("pathType ?????????", pathTypes);

  const generateWalletFromMnemonic = (
    pathType: string,
    mnemonic: string,
    accountIndex: number,
  ): HdKeyring | null => {
    try {
      const seedBuffer = mnemonicToSeedSync(mnemonic);
      const path = `m/44'/${pathType}'/0'/${accountIndex}'`;
      const drivedSeed = derivePath(path, seedBuffer.toString("hex")).key;

      const { secretKey } = nacl.sign.keyPair.fromSeed(drivedSeed);
      const keyPair = Keypair.fromSecretKey(secretKey);
      let privateKeyEncoded = bs58.encode(secretKey);
      let publicKeyEncoded = keyPair.publicKey.toBase58();

      return {
        publicKey: publicKeyEncoded,
        privateKey: privateKeyEncoded,
        mnemonic,
        derivationPath: path,
      };
    } catch (error) {
      throw new Error("Faild to generate Wallet");
    }
  };

  const handleWalletGeneration = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let mnemonic = mnemonicInput.trim();
    if (mnemonic.trim().split(" ").length > 12) {
      if (mnemonic) {
        if (!validateMnemonic(mnemonic)) {
          throw new Error("Invalid mnemonic phrase");
        }
        const wallet = generateWalletFromMnemonic(pathTypes, mnemonic, 0);
        console.log("Generated Wallet from Mnemonic: ", wallet);
      }
    } else {
      mnemonic = generateMnemonic();
      const wallet = generateWalletFromMnemonic(pathTypes, mnemonic, 0);
      console.log("Generated Wallet from New Mnemonic: ", wallet);
      console.log("New Mnemonic: ", wallet?.mnemonic);
      console.log("New Public: ", wallet?.publicKey);
      console.log("New Private: ", wallet?.privateKey);
    }
    const words = mnemonic.split(" ");
    console.log("mnemonic words array: ", words);
    // setMnemonicInput(words);
  };
  return (
    <>
      <div>
        <div className=" p-4 w-xl">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <p className="text-3xl">Enter your Mnemonic Key</p>
          </label>
          <p className="text-red-800 mb-4">Save these words in a safe place.</p>
          <Input
            className="w-full"
            placeholder="Enter your secret phrase"
            value={mnemonicInput}
            onChange={(e) => setMnemonicInput(e.target.value)}
          />
          <div className="mt-4">
            <Button onClick={handleWalletGeneration}>Generate</Button>
          </div>
        </div>
      </div>
    </>
  );
};
