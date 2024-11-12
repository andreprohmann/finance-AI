import { Button } from "@/app/_components/ui/button";
import UpersertTrasactionDialog from "@/app/_components/upsert-trasaction-dialog";
import { Transaction } from "@prisma/client";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

interface EditTransactionButtonProps {
    transaction: Transaction
}

const EditTrasactionButton = ({ transaction }: EditTransactionButtonProps) => {
    const [dialogIsOpen, setDialogOpen] = useState(false);
    return (
        <>
            <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={() => setDialogOpen(true)}>
                <PencilIcon />
            </Button>
            <UpersertTrasactionDialog
                isOpen={dialogIsOpen}
                setIsOpen={setDialogOpen}
                defaultValues={{
                    ...transaction,
                    amount: Number(transaction.amount)
                }}
                transactionId={transaction.id}
            />
        </>
    );
};


export default EditTrasactionButton;
