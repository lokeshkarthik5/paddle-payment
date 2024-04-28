'use client'

import Image from "next/image";
import { PaddleLoader } from "@/components/PaddleLoader";

export default function Home() {
  return (
    <>
    <PaddleLoader />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome</h1>
      <button
      onClick={()=>{
        Paddle.Checkout.open({
          product:2342
        })
      }}
      >
        Buy Now
      </button>
    </main>
    </>
  );
}

