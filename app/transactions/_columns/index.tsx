"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon } from "lucide-react";

export const TransactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => {
      if (transaction.type === TransactionType.DEPOSIT) {
        return (
          <Badge className="bg-muted text-primary hover:bg-muted font-bold">
            <CircleIcon className=" fill-primary mr-2" size={10} />
            Deposito
          </Badge>
        )
      }
      if (transaction.type === TransactionType.EXPENSE) {
        return (
          <Badge className="bg-danger bg-opacity-10 text-danger hover:bg-muted font-bold">
            <CircleIcon className=" fill-danger mr-2" size={10} />
            Despesa
          </Badge>
        )
      }
      if (transaction.type === TransactionType.INVESTMENT) {
        return (
          <Badge className="bg-white text-white bg-opacity-10 hover:bg-muted font-bold">
            <CircleIcon className="fill-white mr-2" size={10} />
            Investimento
          </Badge>
        )
      }
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Metodo de Pagamento",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actions",
    header: "",
  },
];
