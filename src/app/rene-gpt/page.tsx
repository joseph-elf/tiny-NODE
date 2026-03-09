"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function GPTDemo() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const generate = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });

    const data = await res.json();
    setOutput(data.response);
  };

  return (
    <div className="space-y-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full"
      />
      <button onClick={generate} className="bg-black text-white px-4 py-2">
        Generate
      </button>

     
      <p>{output}</p>
       <div>
      <Link href="/">
              Home
      </Link>
    </div>
    </div>
  );
}