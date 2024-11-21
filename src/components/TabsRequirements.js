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
import { Textarea } from "./ui/textarea"

const TabsComponent = () => {
  return (
    <Tabs defaultValue="queixa">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="queixa">Queixa</TabsTrigger>
        <TabsTrigger value="necessidade">Necessidade</TabsTrigger>
      </TabsList>
      <TabsContent value="queixa">
        <Card>
          <CardHeader>
            <CardTitle>Cadastrar Queixa</CardTitle>
            <CardDescription>
              Cadastre uma queixa, sobre qualquer questão de acessibilidade!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="title">Titulo</Label>
              <Input id="title"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="local">Local</Label>
              <Input id="local" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="description">Descrição</Label>
              <Textarea placeholder="Descrição do problema" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Cadastrar Queixa!</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="necessidade">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you will be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default TabsComponent