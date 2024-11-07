"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpersertTrasactionDialog from "./upsert-trasaction-dialog";



const AddTransactionButton = () => {
    const [dialogIsOpen, setDialogOpen] = useState(false);
    return (
        <>
            <Button className="rounded-full font-bold" onClick={() => setDialogOpen(true)}>
                Adicionar transação
                <ArrowDownUpIcon />
            </Button>
            <UpersertTrasactionDialog
                isOpen={dialogIsOpen}
                setIsOpen={setDialogOpen}
            />
        </>

    );
}

export default AddTransactionButton;
