
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
// import MoneyInput from "./money-input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { TRANSACTION_CATEGORY_OPTIONS, TRANSACTION_PAYMENT_METHOD_OPTIONS, TRANSACTION_TYPE_OPTIONS } from "../_contants/transaction";
import { DatePicker } from "./ui/date-picker";
import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { upsertTransaction } from "../_actions/add-transaction";

interface UpsertTransactionDialogProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    defaultValues?: FormSchema;
    transactionId?: string;
}
const formSchema = z.object({
    name: z.string().trim().min(1, {
        message: "Nome da transação é obrigatório e deve ter pelo menos 1 caractere.",
    }),
    amount: z.number({
        message: "O Valor é obritatório"
    }).positive({
        message: "O valor deve ser positivo."
    }),
    type: z.nativeEnum(TransactionType, {
        required_error: "Tipo transação é obrigatorio"
    }),
    category: z.nativeEnum(TransactionCategory, {
        required_error: "Categoria da transação é obrigatoria"
    }),
    paymentMethod: z.nativeEnum(TransactionPaymentMethod, {
        required_error: "Metodo de pagamento é obrigatorio"
    }),
    date: z.date({
        required_error: "Data da transação é obrigatoria"
    }),
});

type FormSchema = z.infer<typeof formSchema>;

const UpersertTrasactionDialog = ({
    isOpen,
    setIsOpen,
    defaultValues,
    transactionId
}: UpsertTransactionDialogProps) => {
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues ?? {
            amount: 50,
            category: TransactionCategory.OTHER,
            date: new Date(),
            name: "",
            paymentMethod: TransactionPaymentMethod.CASH,
            type: TransactionType.EXPENSE,
        },
    })

    const onSubmit = async (data: FormSchema) => {
        try {
            await upsertTransaction({ ...data, id: transactionId });
            setIsOpen(false);
            form.reset();
        } catch (err) {
            console.log(err);
        }
    }

    const isUpdate = Boolean(transactionId)
    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                setIsOpen(open);
                if (!open) {
                    form.reset();
                }
            }}>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle> {isUpdate ? 'Atualizar' : 'Criar'} Transação</DialogTitle>
                    <DialogDescription>Insira as informações abaixo</DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Digite um nome ..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* <FormField
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Valor</FormLabel>
                                    {/* <FormControl>
                                        <MoneyInput placeholder="Digite um valor ..." onValueChange={({ floatValue }) => field.onChange(floatValue)}
                                            onBlur={field.onBlur}
                                            disabled={field.disabled}
                                        />
                                    </FormControl> */}

                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tipo</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecione o Tipo" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {TRANSACTION_TYPE_OPTIONS.map(option => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Categoria</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecione o categoria" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {TRANSACTION_CATEGORY_OPTIONS.map(option => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="paymentMethod"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Método de Pagamento</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecione o método de pagamento" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {TRANSACTION_PAYMENT_METHOD_OPTIONS.map(option => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Data</FormLabel>
                                    <DatePicker value={field.value} onChange={field.onChange} />

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter>

                            <DialogClose asChild>
                                <Button type="button" variant="outline">Cancelar</Button>
                            </DialogClose>

                            <Button type="submit"> {isUpdate ? 'Atualizar' : 'Adicionar'} </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default UpersertTrasactionDialog;
