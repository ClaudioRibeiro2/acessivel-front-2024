import { AcessivelIcon, LoginUserForm } from "@/components/index";
import Image from "next/image";
import DogImage from "@/assets/img/dog.jpg";
import Link from "next/link";

export default function LoginUser() {
  return (
    <div className="gridMobile">
      <div className="flex">
        <AcessivelIcon textAlign="left"/>
      </div>
      <div className="mt-3 ">
        <h1 className="text-2xl">Entrar</h1>
        <p className="my-3">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur.
        </p>
        <Image
          className="m-auto my-4 rounded-md w-full"
          src={DogImage}
          alt="Logo"
          width={300}
          height={200}
        />
        <LoginUserForm />
        <p className="text-center mt-3">
          Não faz parte ainda? {""}
          <Link href="/user/register">Clique aqui para se cadastrar!</Link>
        </p>
      </div>
    </div>
  );
}
