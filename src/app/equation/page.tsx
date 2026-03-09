import { InlineMath, BlockMath } from 'react-katex'
import Link from "next/link";


export default function Page() {
  return (
    <div className="p-8">
      <p>
        Einstein: <InlineMath math={'E = mc^2'} />
      </p>

      <BlockMath math={'\\int_0^1 x^2 dx = \\frac{1}{3}'} />
      
      <Link href="/">
              Home
      </Link>
    </div>
  )
}