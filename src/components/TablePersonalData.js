"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export function TablePersonalData({deficiencias}) {
  return (
    <Table>
      <TableCaption>Lista de Deficiências</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Deficiência</TableHead>
          <TableHead>Descrição</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deficiencias.map((deficiencia) => (
          <TableRow key={deficiencia.codigo}>
            <TableCell className="font-medium">{deficiencia.titulo}</TableCell>
            <TableCell className="text-center">{deficiencia.descricao}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
