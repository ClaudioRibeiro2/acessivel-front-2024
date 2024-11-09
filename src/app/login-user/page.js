import { LoginUserForm } from "@/components/index";
import Image from "next/image";
import LogoAcessivel from "@/assets/img/+Acessível.png";
import Link from "next/link";

export default function LoginUser() {
  return (
    <div className="gridMobile">
      <Image
        className="m-auto mt-4"
        src={LogoAcessivel}
        alt="Logo"
        width={100}
        height={100}
      />
      <div className="mt-3 ">
        <h1 className="text-2xl">Entrar</h1>
        <p className="my-3">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur.
        </p>
        <LoginUserForm />
        <p className="text-center mt-3">
          Não faz parte ainda? {""}
          <Link href="/register-user">Clique aqui para se cadastrar!</Link>
        </p>
      </div>
    </div>
  );
}
