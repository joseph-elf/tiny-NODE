// import {IsingGrid} from "../../components/IsingGrid";
// import Link from "next/link";


import { IsingCanvas } from "../../components/IsingGrid";
import Link from "next/link";

export default function Page() {
  return (
    <main style={{ padding: "20px" }}>
      <IsingCanvas />
      <div style={{ marginTop: "20px" }}>
        <Link href="/">Home</Link>
      </div>
    </main>
  );
}


// size={50}       
