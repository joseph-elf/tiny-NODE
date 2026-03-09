import LatexPlot from "../../components/LatexPlot";
import Link from "next/link";


export default function Home() {
  const xValues = [0, 1, 2, 3, 4,5,6,7,8,9,10];
  const yValues = xValues.map((x) => x ** 2);

  return (
    <main className="p-10">
      <LatexPlot
        x={xValues}
        y={yValues}
        title="$f(x) = x^2$"
        xLabel="$x$"
        yLabel="$f(x)$"
      />

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


