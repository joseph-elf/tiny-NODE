"use client";

//import dynamic from "next/dynamic";
import dynamic from "next/dynamic";

type PlotType = typeof import("react-plotly.js");

const Plot = dynamic(
  () => import("react-plotly.js").then(mod => mod.default),
  { ssr: false }
) as PlotType;

// Use any here, don't try to type the import

type LatexPlotProps = {
  x: number[];
  y: number[];
  title?: string;
  xLabel?: string;
  yLabel?: string;
};

export default function LatexPlot({
  x,
  y,
  title = "",
  xLabel = "",
  yLabel = "",
}: LatexPlotProps) {
  const data = [
    {
      x,
      y,
      type: "scatter",
      mode: "lines",
      line: { width: 2 },
    },
  ];

  const layout = {
    title: { text: title, font: { size: 20 }, xref: "paper", x: 0.5 },
    xaxis: { title: { text: xLabel }, showgrid: true, showline: true, mirror: true },
    yaxis: { title: { text: yLabel }, showgrid: true, showline: true, mirror: true },
    plot_bgcolor: "white",
    paper_bgcolor: "white",
  };

  return <Plot data={data} layout={layout} config={{ displayModeBar: false }} style={{ width: "100%", height: "400px" }} />;
}
