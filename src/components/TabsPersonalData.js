import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const TabsPersonalData = () => {
  return (
    <Tabs defaultValue="personal-data">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="personal-data">Dados pessoais</TabsTrigger>
        <TabsTrigger value="address">Endereço</TabsTrigger>
        <TabsTrigger value="cadpcd">Vincule seu CadPCD</TabsTrigger>
      </TabsList>
      <TabsContent value="personal-data">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Dados pessoais</CardTitle>
            <CardDescription className="text-base">
              Faça alterações em seus dados pessoais aqui. Clique em salvar quando terminar.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label className="text-base" htmlFor="title">Nome</Label>
              <Input id="name" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="local">Sobrenome</Label>
              <Input id="surname" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="description">Email</Label>
              <Input id="email" type="email" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Cpf</Label>
              <Input id="cpf" type="text" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Data de nascimento</Label>
              <Input id="birth" type="date" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Senha</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Confirmar senha</Label>
              <Input id="confirm-password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Salvar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="address">
        <Card>
          <CardHeader>
            <CardTitle>Endereço</CardTitle>
            <CardDescription>
               Altere ou adicione seu endereço aqui. Clique em salvar quando terminar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label className="text-base" htmlFor="title">CEP</Label>
              <Input id="cep" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="local">Logradouro</Label>
              <Input id="public-place" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="description">Nome do logradouro</Label>
              <Input id="name-public-place" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Número</Label>
              <Input id="number" type="number" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Cidade</Label>
              <Input id="city" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Estado</Label>
              <Input id="state" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Bairro</Label>
              <Input id="neighborhood" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Salvar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="cadpcd">
        <Card>
          <CardHeader>
            <CardTitle>CadPCD</CardTitle>
            <CardDescription>
              Vincule seu CadPCD aqui. Clique em salvar quando terminar.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label className="text-base" htmlFor="title">CadPCD</Label>
              <Input id="cadpcd" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Salvar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default TabsPersonalData