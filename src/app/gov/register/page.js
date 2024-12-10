import Link from "next/link";
import { AcessivelIcon, RegisterUserForm } from "@/components";
import govImage from "@/assets/img/conta_govbr_v2.jpg";
import Image from "next/image";

export default function SignupUser() {
  return (
    <div className="gridMobile">
      <AcessivelIcon/>
      <div className="mt-3">
        <h1 className="text-2xl">Cadastrar-se</h1>
        {/* <p className="my-3">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur.
        </p> */}
        <Image
          className="m-auto my-4 rounded-md w-full"
          src={govImage}
          alt="Logo"
          width={300}
          height={200}
        />
        <RegisterUserForm />
        <p className="text-center mt-3">
          Já está cadastrado no sistema? {""}
          <Link href="/user/login">Clique aqui para entrar!</Link>
        </p>
      </div>
    </div>
  );
}
