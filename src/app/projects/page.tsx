import Link from "next/link";
import Image from "next/image";



export default function Page() {
  return (
    <main>
  <h1 className="text-4xl">Projects</h1>
    <div>
      <Link href="/">
              Home
      </Link>
    </div>
    <Image
      src="/projects/schrodinger/009.png"
      alt="Robot arm project"
      width={800}
      height={500}
      className="rounded-xl bg-blue-500 text-black px-6 py-3 font-medium hover:opacity-50 transition"
    />

    <video
      src="/projects/schrodinger/output.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="rounded-xl w-full"
    />



    </main>
  );
}