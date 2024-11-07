"use client";


import { Transaction, TransactionCategory, TransactionPaymentMethod } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "./_componentes/type-badge";
import { Button } from "@/app/_components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";

const transactioncategoryMap = {
  [TransactionCategory.HOUSING]: "Moradia",
  [TransactionCategory.EDUCATION]: "Educação",
  [TransactionCategory.FOOD]: "Alimentação",
  [TransactionCategory.HEALTH]: "Saúde",
  [TransactionCategory.ENTERTRAIMENT]: "Entretenimento",
  [TransactionCategory.TRANSPORTATION]: "Transporte",
  [TransactionCategory.SALARY]: "Salario",
  [TransactionCategory.UTILITY]: "Utilidades",
  [TransactionCategory.OTHER]: "Outros",
}
const transationpaymentMap = {
  [TransactionPaymentMethod.CASH]: "Dinheiro",
  [TransactionPaymentMethod.CREDIT_CARD]: "Credito",
  [TransactionPaymentMethod.DEBIT_CARD]: "Debito",
  [TransactionPaymentMethod.BANK_TRANSFER]: "Transferencia",
  [TransactionPaymentMethod.BANK_SLIP]: "Boleto",
  [TransactionPaymentMethod.PIX]: "Pix",
  [TransactionPaymentMethod.OTHER]: "Outros"




}

export const TransactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) => (
      transactioncategoryMap[transaction.category] || "Desconhecido"
    ),
  },
  {
    accessorKey: "paymentMethod",
    header: "Metodo de Pagamento",
    cell: ({ row: { original: transaction } }) => (
      transationpaymentMap[transaction.paymentMethod] || "Desconhecido"
    ),
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) => new Date(transaction.date).toLocaleDateString("pt-BR"),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) => new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(transaction.amount)),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: () => {
      return (
        <div className="space-x-1">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <PencilIcon />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <TrashIcon />
          </Button>
        </div>
      )

    }
  },
];
