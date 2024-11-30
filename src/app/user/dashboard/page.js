import { CardNavigator } from "@/components";

export default function DashboardUser() {
  return (
    <div className="gridMobile">
      <h1>Dashboard</h1>
      <div>
        <CardNavigator
          cards={[
            { title: "Principal", href: "/user/dashboard" },
            { title: "Solicitações", href: "/user/dashboard/requirements" },
            { title: "Dados pessoais", href: "/user/dashboard/data" },
            { title: "Fale conosco", href: "/user/dashboard/contact" },
          ]}
        />
      </div>
    </div>
  );
}
