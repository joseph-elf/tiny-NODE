import Link from "next/link";

export default function Page() {
  return (
    <main >
  <h1 className="text-4xl">Contact Me</h1>
    <p >
      Joseph El-Forzli 
      josephelforzli@gmail.com
    </p>
    <div>
      <Link
              href="/"

            >
              Home
      </Link>
    </div>
    </main>

);
}