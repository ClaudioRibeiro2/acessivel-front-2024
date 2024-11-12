import Link from "next/link";

export default function AcessivelIcon() {
  return (
    <p className="font-black text-3xl md:text-4xl lg:text-5xl ">
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
    </p>
  )
}