// "use client";

// import { useEffect, useState } from "react";

// interface IsingGridProps {
//   size?: number; // lattice size
// }

// export function IsingGrid({ size = 50 }: IsingGridProps) {
//   const [grid, setGrid] = useState<number[][]>([]);

//   // Initialize the lattice
//   useEffect(() => {
//     const initial = Array.from({ length: size }, () =>
//       Array.from({ length: size }, () => (Math.random() < 0.5 ? 1 : -1))
//     );
//     setGrid(initial);
//   }, [size]);

//   // Single Monte Carlo step (for demo, flips randomly)
//   const step = () => {
//     if (!grid || grid.length === 0) return;
//     setGrid(prevGrid =>
//       prevGrid.map(row =>
//         row.map(spin => (Math.random() < 0.5 ? -spin : spin))
//       )
//     );
//   };

//   return (
//     <div>
//       <button
//         onClick={step}
//         style={{ marginBottom: "10px", padding: "5px 10px", cursor: "pointer" }}
//       >
//         Step
//       </button>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: `repeat(${size}, 10px)`,
//           gridAutoRows: "10px",
//         }}
//       >
//         {grid.length > 0 &&
//           grid.flat().map((spin, idx) => (
//             <div
//               key={idx}
//               style={{
//                 width: 10,
//                 height: 10,
//                 backgroundColor: spin === 1 ? "red" : "blue",
//               }}
//             />
//           ))}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";

// export function IsingCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const temperatureRef = useRef<number>(2.2);
//   const speedRef = useRef<number>(1);
//   const animationRef = useRef<number | null>(null);

//   const [displayTemp, setDisplayTemp] = useState(2.2);
//   const [size, setSize] = useState(150);
//   const [displaySpeed, setDisplaySpeed] = useState(1);

//   useEffect(() => {
//     const J = 1;
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;

//     canvas.width = size;
//     canvas.height = size;

//     const spins = new Int8Array(size * size);
//     for (let i = 0; i < spins.length; i++) {
//       spins[i] = Math.random() < 0.5 ? 1 : -1;
//     }

//     function index(x: number, y: number) {
//       return ((x + size) % size) + ((y + size) % size) * size;
//     }

//     function metropolisSweep() {
//       const T = temperatureRef.current;

//       for (let n = 0; n < size * size; n++) {
//         const x = Math.floor(Math.random() * size);
//         const y = Math.floor(Math.random() * size);
//         const i = index(x, y);

//         const s = spins[i];
//         const neighbors =
//           spins[index(x + 1, y)] +
//           spins[index(x - 1, y)] +
//           spins[index(x, y + 1)] +
//           spins[index(x, y - 1)];

//         const dE = 2 * J * s * neighbors;

//         if (dE <= 0 || Math.random() < Math.exp(-dE / T)) {
//           spins[i] = -s;
//         }
//       }
//     }

//     function draw() {
//       const image = ctx.createImageData(size, size);
//       for (let i = 0; i < spins.length; i++) {
//         const color = spins[i] === 1 ? 255 : 0;
//         image.data[i * 4] = color;
//         image.data[i * 4 + 1] = 0;
//         image.data[i * 4 + 2] = 255 - color;
//         image.data[i * 4 + 3] = 255;
//       }
//       ctx.putImageData(image, 0, 0);
//     }

//     function animate() {
//       const sweepsPerFrame = speedRef.current;

//       for (let i = 0; i < sweepsPerFrame; i++) {
//         metropolisSweep();
//       }

//       draw();
//       animationRef.current = requestAnimationFrame(animate);
//     }

//     animate();

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [size]);

//   return (
//     <div>
//       <h2>2D Ising Model</h2>

//       {/* Temperature */}
//       <div style={{ marginBottom: "10px" }}>
//         Temperature: {displayTemp.toFixed(2)}
//         <br />
//         <input
//           type="range"
//           min="0.5"
//           max="4"
//           step="0.01"
//           value={displayTemp}
//           onChange={(e) => {
//             const newTemp = parseFloat(e.target.value);
//             temperatureRef.current = newTemp;
//             setDisplayTemp(newTemp);
//           }}
//           style={{ width: "300px" }}
//         />
//       </div>

//       {/* Grid Size */}
//       <div style={{ marginBottom: "10px" }}>
//         Grid Size:
//         <select
//           value={size}
//           onChange={(e) => setSize(parseInt(e.target.value))}
//           style={{ marginLeft: "10px" }}
//         >
//           <option value={50}>50 x 50</option>
//           <option value={100}>100 x 100</option>
//           <option value={150}>150 x 150</option>
//           <option value={200}>200 x 200</option>
//           <option value={300}>300 x 300</option>
//           <option value={500}>500 x 500</option>
//           <option value={1000}>1000 x 1000</option>
//         </select>
//       </div>

//       {/* Speed Slider */}
//       <div style={{ marginBottom: "10px" }}>
//         Speed (sweeps/frame): {displaySpeed}
//         <br />
//         <input
//           type="range"
//           min="1"
//           max="20"
//           step="1"
//           value={displaySpeed}
//           onChange={(e) => {
//             const newSpeed = parseInt(e.target.value);
//             speedRef.current = newSpeed;
//             setDisplaySpeed(newSpeed);
//           }}
//           style={{ width: "300px" }}
//         />
//       </div>

//       <canvas
//         ref={canvasRef}
//         style={{
//           border: "1px solid black",
//           imageRendering: "pixelated",
//           width: "500px",
//         }}
//       />
//     </div>
//   );
// }












"use client";

import { useEffect, useRef, useState } from "react";

export function IsingCanvas() {



  const canvasRef = useRef<HTMLCanvasElement>(null);
  const temperatureRef = useRef<number>(2.2);
  const speedRef = useRef<number>(1);
  const animationRef = useRef<number | null>(null);
  const pausedRef = useRef<boolean>(false);
  const fieldRef = useRef<number>(0); // H = 0 initially
  const [displayField, setDisplayField] = useState(0);
  const [displayTemp, setDisplayTemp] = useState(2.2);
  const [size, setSize] = useState(500);
  const [displaySpeed, setDisplaySpeed] = useState(1);

  const lastTimeRef = useRef<number>(performance.now());
  const [displayFPS, setDisplayFPS] = useState(0);
  const frameTimeRef = useRef<number>(16);

  const smoothedFrameRef = useRef<number>(16);
  const [displayLoad, setDisplayLoad] = useState(0);

  const boltzmannTableRef = useRef<Record<number, number>>({});

  const spinsRef = useRef<Int8Array | null>(null);

  


  // Build Boltzmann lookup table
  const buildBoltzmannTable = (T: number, H: number) => {
    const table: Record<number, number> = {};
    const neighbors = [-8, -4, 0, 4, 8];
    for (let n of neighbors) {
      table[n + 2 * H] = Math.exp(-(n + 2 * H) / T); // s_i = +1
      table[-n - 2 * H] = Math.exp(-(-n - 2 * H) / T); // s_i = -1
    }
    return table;
  };

  // Precompute Boltzmann factors
  useEffect(() => {
    boltzmannTableRef.current = buildBoltzmannTable(temperatureRef.current, fieldRef.current);
  }, [displayTemp, displayField]);

  // Helper: draw current spins on canvas
  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas || !spinsRef.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;
    const image = ctx.createImageData(size, size);
    const spins = spinsRef.current;

    const posColor = [255, 255, 255]; // white
    const negColor = [0, 0, 0];       // black
    for (let i = 0; i < spins.length; i++) {
      const color = spins[i] === 1 ? posColor : negColor;
      image.data[i * 4] = color[0]; //r
      image.data[i * 4 + 1] = color[1]; //v
      image.data[i * 4 + 2] = color[2]; //b
      image.data[i * 4 + 3] = 255; //a
    }
    ctx.putImageData(image, 0, 0);
  };

  // Initialize spins
  const initRandomSpins = () => {
    const spins = new Int8Array(size * size);
    for (let i = 0; i < spins.length; i++) spins[i] = Math.random() < 0.5 ? 1 : -1;
    spinsRef.current = spins;
    draw(); // immediately draw
  };

  const initAlignedSpins = () => {
    const spins = new Int8Array(size * size);
    spins.fill(1);
    spinsRef.current = spins;
    draw(); // immediately draw
  };

  // Initialize spins whenever size changes
  useEffect(() => {
    initRandomSpins();
  }, [size]);

  useEffect(() => {
    const J = 1;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = size;
    canvas.height = size;

    function index(x: number, y: number) {
      return ((x + size) % size) + ((y + size) % size) * size;
    }
  // Metropolis sweep
  const metropolisSweep = () => {
    const spins = spinsRef.current!;
    const T = temperatureRef.current;
    const H = fieldRef.current;

    const index = (x: number, y: number) => ((x + size) % size) + ((y + size) % size) * size;

    for (let n = 0; n < size * size; n++) {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);
      const i = index(x, y);

      const s = spins[i];
      const neighbors =
        spins[index(x + 1, y)] +
        spins[index(x - 1, y)] +
        spins[index(x, y + 1)] +
        spins[index(x, y - 1)];

      const dE = 2 * J * s * neighbors + 2 * H * s;

      if (dE <= 0 || Math.random() < boltzmannTableRef.current[dE]) {
        spins[i] = -s;
      }
    }
  };

    function animate() {
      const frameStart = performance.now();


    if (!pausedRef.current) {
      for (let i = 0; i < speedRef.current; i++) {
        metropolisSweep();
      }
      draw();
    }

      const frameEnd = performance.now();
      const computeTime = frameEnd - frameStart;

      // Smooth it
      const alpha = 0.05;
      smoothedFrameRef.current =
        alpha * computeTime + (1 - alpha) * smoothedFrameRef.current;

      // 16.67ms = 60 FPS budget
      const load = smoothedFrameRef.current / 16.67;

      setDisplayLoad(load);

    animationRef.current = requestAnimationFrame(animate);

    }

    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [size]);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "top",justifyContent: "space-between", gap: "10px" }}>
      <h2>2D Ising Model</h2>

  
      {/* Grid Size */}
      <div style={{ marginBottom: "10px" }}>
        Grid Size:
        <select
          value={size}
          onChange={(e) => setSize(parseInt(e.target.value))}
          style={{ marginLeft: "10px" }}
        >
          <option value={50}>50 x 50</option>
          <option value={100}>100 x 100</option>
          <option value={150}>150 x 150</option>
          <option value={200}>200 x 200</option>
          <option value={300}>300 x 300</option>
          <option value={500}>500 x 500</option>
          <option value={1000}>1000 x 1000</option>
          <option value={2000}>2000 x 2000</option>
        </select>
      </div>
    </div>

      {/* Speed Slider */}
      <div style={{ marginBottom: "10px" }}>
        Speed (sweeps/frame): {displaySpeed}
        <br />
        <input
          type="range"
          min="1"
          max="20"
          step="1"
          value={displaySpeed}
          onChange={(e) => {
            const newSpeed = parseInt(e.target.value);
            speedRef.current = newSpeed;
            setDisplaySpeed(newSpeed);
          }}
          style={{ width: "100%",maxWidth: "100vw",}}
        />
      </div>


      <div style={{ marginTop: "10px",marginBottom: "10px",width: "100%",        // take full container width
      maxWidth: "100vw",    // never exceed viewport width
      height: "auto",       // keep square ratio
      display: "block", }}>

      <div
        style={{
          height: "18px",
          background: "#ddd",
          borderRadius: "9px",
          overflow: "hidden",
          width: "100%"
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${Math.min(displayLoad, 1) * 100}%`,
            background:
              displayLoad < 0.6
                ? "#4caf50"
                : displayLoad < 0.9
                ? "#ff9800"
                : "#f44336",
            transition: "none",
          }}
        >
          <div style={{ fontSize: "12px", marginTop: "0px",marginLeft: "3px"}}>
            {(displayLoad * 100).toFixed(0)}%
          </div>
        </div>
  
      </div>
    </div>



      <canvas
        ref={canvasRef}
        style={{
    border: "1px solid black",
    imageRendering: "pixelated",
    width: "100%",        // take full container width
    maxWidth: "100vw",    // never exceed viewport width
    height: "auto",       // keep square ratio
    display: "block",
  }}
      />




      {/* Temperature */}
      <div style={{ marginBottom: "10px" }}>
        Temperature: {displayTemp.toFixed(2)}
        <br />
        <input
          type="range"
          min="0.5"
          max="4"
          step="0.01"
          value={displayTemp}
          onChange={(e) => {
            const newTemp = parseFloat(e.target.value);
            temperatureRef.current = newTemp;
            setDisplayTemp(newTemp);
          }}
          style={{ width: "100%",maxWidth: "100vw", }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
          External Field: {displayField.toFixed(2)}
          <br />
          <input
            type="range"
            min="-0.5"
            max="0.5"
            step="0.01"
            value={displayField}
            onChange={(e) => {
              const H = parseFloat(e.target.value);
              fieldRef.current = H;
              setDisplayField(H);
            }}
            style={{ width: "100%",maxWidth: "100vw",}}
          />
        </div>


      {/* Controls */}
      <div style={{ marginBottom: "10px" }}>
        <button
          onClick={() => (pausedRef.current = !pausedRef.current)}
          style={{ marginRight: "10px" }}
        >
          {pausedRef.current ? "Resume" : "Pause"}
        </button>
        <button onClick={initRandomSpins} style={{ marginRight: "10px" }}>
          Random Reinit
        </button>
        <button onClick={initAlignedSpins}>Aligned Init</button>
      </div>

      
    </div>
  );
}
