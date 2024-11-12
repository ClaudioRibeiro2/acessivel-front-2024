import { AddressUserForm } from "@/components";

export default async function AddressPage() {
  let data = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  let address = await data.json();
  console.log(address);

  return (
    <div className="gridMobile">
      <AddressUserForm />
    </div>
  );
}
