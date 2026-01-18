import nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

export function solanaPublicKeyFromMnemonic() {
  const memecoin =
    "destroy retire cany assed field wheel gate auction borrow join predict";

  const seed = mnemonicToSeedSync(memecoin);

  for (let i = 0; i < 10; i++) {
    const path = `m/44'/501'/${i}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
  }
}
