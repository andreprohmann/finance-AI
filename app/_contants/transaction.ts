import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const transactioncategoryMap = {
  [TransactionCategory.HOUSING]: "Moradia",
  [TransactionCategory.EDUCATION]: "Educação",
  [TransactionCategory.FOOD]: "Alimentação",
  [TransactionCategory.HEALTH]: "Saúde",
  [TransactionCategory.ENTERTRAIMENT]: "Entretenimento",
  [TransactionCategory.TRANSPORTATION]: "Transporte",
  [TransactionCategory.SALARY]: "Salario",
  [TransactionCategory.UTILITY]: "Utilidades",
  [TransactionCategory.OTHER]: "Outros",
};
export const transationpaymentMap = {
  [TransactionPaymentMethod.CASH]: "Dinheiro",
  [TransactionPaymentMethod.CREDIT_CARD]: "Credito",
  [TransactionPaymentMethod.DEBIT_CARD]: "Debito",
  [TransactionPaymentMethod.BANK_TRANSFER]: "Transferencia",
  [TransactionPaymentMethod.BANK_SLIP]: "Boleto",
  [TransactionPaymentMethod.PIX]: "Pix",
  [TransactionPaymentMethod.OTHER]: "Outros",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Receita",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.CASH,
    label: transationpaymentMap[TransactionPaymentMethod.CASH],
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label: transationpaymentMap[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label: transationpaymentMap[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label: transationpaymentMap[TransactionPaymentMethod.BANK_TRANSFER],
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label: transationpaymentMap[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: transationpaymentMap[TransactionPaymentMethod.PIX],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: transationpaymentMap[TransactionPaymentMethod.OTHER],
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.EDUCATION,
    label: transactioncategoryMap[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.FOOD,
    label: transactioncategoryMap[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: transactioncategoryMap[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.HOUSING,
    label: transactioncategoryMap[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.ENTERTRAIMENT,
    label: transactioncategoryMap[TransactionCategory.ENTERTRAIMENT],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: transactioncategoryMap[TransactionCategory.TRANSPORTATION],
  },

  {
    value: TransactionCategory.SALARY,
    label: transactioncategoryMap[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.UTILITY,
    label: transactioncategoryMap[TransactionCategory.UTILITY],
  },
  {
    value: TransactionCategory.OTHER,
    label: transactioncategoryMap[TransactionCategory.OTHER],
  },
];
