import { CardNavigator } from "@/components";

export default function DashboardUser() {
  return (
    <div className="gridMobile">
      <h1 className="text-2xl font-black text-center my-5">DASHBOARD</h1>
      <div>
        <CardNavigator
          cards={[
            { title: "Solicitações", href: "/user/dashboard/requirements" },
            { title: "Dados pessoais", href: "/user/dashboard/data" },
            { title: "Fale conosco", href: "/user/dashboard/contact" },
          ]}
        />
      </div>
    </div>
  );
}
