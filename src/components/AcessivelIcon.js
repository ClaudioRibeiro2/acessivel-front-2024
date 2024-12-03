import { cva } from "class-variance-authority";
import Link from "next/link";

const iconVariants = cva(
  "font-black align-middle tracking-tighter text-3xl md:text-4xl lg:text-5xl",
    {
    variants: {
      textAlign: {
        center: 'text-center',
        left: 'text-left',
        right: 'text-right',
      }
    },
    defaultVariants: {
      textAlign: 'center'
    }
  }
);
export default function AcessivelIcon({ textAlign = 'center' }) {
  return (
    <div className={iconVariants({ textAlign })}>
      <Link href="/">
        <span className="text-blue-acessivel">+</span>
        <span className="text-yellow-acessivel">A</span>
        <span className="text-green-acessivel">c</span>
        <span className="text-blue-acessivel">e</span>
        <span className="text-yellow-acessivel">s</span>
        <span className="text-green-acessivel">s</span>
        <span className="text-blue-acessivel">í</span>
        <span className="text-yellow-acessivel">v</span>
        <span className="text-green-acessivel">e</span>
        <span className="text-blue-acessivel">l</span>
      </Link>
    </div>
  )
}