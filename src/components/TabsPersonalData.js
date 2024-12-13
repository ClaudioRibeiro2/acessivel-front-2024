"use client"

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
import { TablePersonalData } from "./TablePersonalData"
import { v4 as uuidv4 } from "uuid"
import { stringify } from "postcss"
import { useEffect, useState } from "react"

const  TabsPersonalData = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const [deficiencias, setDeficiencias] = useState([]);
  useEffect(()=> {
    const localStorageItem = localStorage.getItem("deficiencias") || "[]"
    setDeficiencias(JSON.parse(localStorageItem))
    console.log(deficiencias)
  }, [])
  
  const salvarDeficiencia = () => {
    const codigo = uuidv4()
    const obj = {
      codigo: codigo,
      titulo: titulo,
      descricao: descricao
    }
    deficiencias.push(obj)
    localStorage.setItem("deficiencias", JSON.stringify(deficiencias))
    setDeficiencias(deficiencias)
  } 

  const handleTitulo = (e) => {
    setTitulo(e.target.value)
  }

  const handleDescricao = (e) => {
    setDescricao(e.target.value)
  }

  return (
    <Tabs defaultValue="personal-data">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="personal-data">Dados pessoais</TabsTrigger>
        <TabsTrigger value="address">Endereço</TabsTrigger>
        <TabsTrigger value="cadpcd">Vincule seu CadPCD</TabsTrigger>
        <TabsTrigger value="deficiencia">Deficiência</TabsTrigger>
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
              <Input id="name" value="Rodrigo" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="local">Sobrenome</Label>
              <Input id="surname" value="Conti Ribeiro" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="description">Email</Label>
              <Input id="email" type="email" value="rodriguinho@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Cpf</Label>
              <Input id="cpf" type="text" value="132.228.998-78" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Data de nascimento</Label>
              <Input id="birth" type="date" value="08/08/2004" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Senha</Label>
              <Input id="password" type="password" value="rodriguinho123" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Confirmar senha</Label>
              <Input id="confirm-password" type="password" value="rodriguinho123" />
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
              <Input id="cep" value="88032-005" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="local">Logradouro</Label>
              <Input id="public-place" value="Rodovia" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="description">Nome do logradouro</Label>
              <Input id="name-public-place"  value="SC-401"/>
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Número</Label>
              <Input id="number" type="number" value="3730"/>
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Cidade</Label>
              <Input id="city" value="Florianópolis" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Estado</Label>
              <Input id="state" value="SC"/>
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Bairro</Label>
              <Input id="neighborhood" value="Saco Grande" />
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
              <Input id="cadpcd" value="65252345" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Salvar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="deficiencia">
        <Card>
          <CardHeader>
            <CardTitle>Cadastre sua deficiência</CardTitle>
            <CardDescription>
              Por favor, coloque uma descrição de sua deficiência.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label className="text-base" htmlFor="title">Deficiência</Label>
              <Input onChange={handleTitulo} id="title" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="description">Descrição</Label>
              <Textarea onChange={handleDescricao} id="descricao" placeholder="Descrição do problema" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={salvarDeficiencia} >Cadastrar!</Button>
          </CardFooter>
        </Card>
        <TablePersonalData deficiencias={deficiencias} />
      </TabsContent>
    </Tabs>
  )
}

export default TabsPersonalData