import Link from "next/link";


export default function Page() {
  return (
    <main>
  <h1 className="text-4xl">Curriculum Vitae</h1>
    <div>

      <a
      href="https://github.com/joseph-elf"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl bg-blue-500 text-black px-6 py-3 font-medium hover:opacity-90 transition"
    >
      Visit my GitHub
    </a>
    <br />


      <Link href="/">
              Home
      </Link>
    </div>
    </main>
  );
}