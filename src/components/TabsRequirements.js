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
import { useEffect, useState } from "react"
import TableRequirements from "./TableRequirements"
import { v4 as uuidv4 } from "uuid"

const TabsRequirements = () => {
  const [titulo, setTitulo] = useState("");
  const [local, setLocal] = useState("");

  const [queixas, setQueixas] = useState([]);
  useEffect(()=> {
    const localStorageItem = localStorage.getItem("queixas") || "[]"
    setQueixas(JSON.parse(localStorageItem))
    console.log(queixas)
  }, [])
  
  const salvarQueixa = () => {
    const codigo = uuidv4()
    const obj = {
      codigo: codigo,
      titulo: titulo,
      local: local
    }
    queixas.push(obj)
    localStorage.setItem("queixas", JSON.stringify(queixas))
    setQueixas(queixas)
  } 

  const handleTitulo = (e) => {
    setTitulo(e.target.value)
  }

  const handleLocal = (e) => {
    setLocal(e.target.value)
  }

  return (
    <Tabs defaultValue="queixa">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="queixa">Queixa</TabsTrigger>
      </TabsList>
      <TabsContent value="queixa">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Cadastrar Queixa</CardTitle>
            <CardDescription className="text-base">
              Cadastre uma queixa, sobre qualquer questão de acessibilidade!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label className="text-base" htmlFor="title">Titulo</Label>
              <Input id="title" onChange={handleTitulo} />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="local">Local</Label>
              <Input id="local" onChange={handleLocal} />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="description">Descrição</Label>
              <Textarea placeholder="Descrição do problema" />
            </div>
            <div className="space-y-1">
              <Label className="text-base" htmlFor="picture">Foto</Label>
              <Input id="picture" type="file"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={salvarQueixa}>Cadastrar Queixa!</Button>
          </CardFooter>
        </Card>
        <TableRequirements queixas={queixas} />
      </TabsContent>
    </Tabs>
  )
}

export default TabsRequirements