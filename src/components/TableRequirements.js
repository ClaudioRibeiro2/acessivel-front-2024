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


export default function TableRequirements({queixas}) {
  return (
    <Table>
      <TableCaption>Lista de Queixas</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Queixa</TableHead>
          <TableHead>Local</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {queixas.map((queixa) => (
          <TableRow key={queixa.codigo}>
            <TableCell className="font-medium">{queixa.titulo}</TableCell>
            <TableCell className="text-center">{queixa.local}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}