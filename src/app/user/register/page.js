import LogoAcessivel from "@/assets/img/+Acessível.png";
import Link from "next/link";
import Image from "next/image";
import { RegisterUserForm } from "@/components";

export default function SignupUser() {
  return (
    <div className="gridMobile">
      <Link href="/">
        <Image
          className="m-auto mt-4"
          src={LogoAcessivel}
          alt="Logo"
          width={100}
          height={100}
        />
      </Link>
      <div className="mt-3">
        <h1 className="text-2xl">Cadastrar-se</h1>
        <p className="my-3">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur.
        </p>
        <RegisterUserForm />
        <p className="text-center mt-3">
          Já está cadastrado no sistema? {""}
          <Link href="/user/login">Clique aqui para entrar!</Link>
        </p>
      </div>
    </div>
  );
}
