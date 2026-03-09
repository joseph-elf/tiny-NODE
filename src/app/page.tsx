// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 py-28">
        <div className="space-y-8">
          <p className="text-sm text-neutral-400">👋 Hello, I’m</p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Joseph El-Forzli
          </h1>



          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl">
            I build software, hardware, and weird DIY projects.
            Full-stack developer focused on clean design and real-world builds.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/projects"
              className="rounded-xl bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition"
            >
              View Projects →
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-900 transition"
            >
              Contact Me
            </Link>

            <Link
              href="/curriculum_vitae"
              className="rounded-xl border border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-900 transition"
            >
              Curriculum Vitae
            </Link>

            <Link
              href="/rene-gpt"
              className="rounded-xl border border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-900 transition"
            >
              GPT Chateaubriand
            </Link>

            <Link
              href="/graph"
              className="rounded-xl border border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-900 transition"
            >
              Graphs
            </Link>

            <Link
              href="/equation"
              className="rounded-xl border border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-900 transition"
            >
              Equations
            </Link>

            <Link
              href="/ising"
              className="rounded-xl border border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-900 transition"
            >
              Ising
            </Link>


          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mx-auto max-w-5xl px-6 py-16 border-t border-neutral-900">
        <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-6">
          Tech I Use
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind",
            "Node",
            "Arduino",
            "Python",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2 text-sm text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>



      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-5xl px-6 py-20 border-t border-neutral-900">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>

          <Link
            href="/projects"
            className="text-sm text-neutral-400 hover:text-white"
          >
            See all →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 hover:bg-neutral-900 transition"
            >
              <div className="h-32 rounded-lg bg-neutral-800 mb-4" />

              <h3 className="font-medium mb-2">Project Title</h3>

              <p className="text-sm text-neutral-400">
                Short description of what this project does and what tech you
                used.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-5xl px-6 py-16 border-t border-neutral-900 text-sm text-neutral-500">
        © {new Date().getFullYear()} Your Name — Built with Next.js & Tailwind
      </footer>
    </main>
  );
}
