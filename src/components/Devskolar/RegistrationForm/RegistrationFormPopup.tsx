import * as Dialog from '@radix-ui/react-dialog';
import { useRegistrationFormContext } from './RegistrationFormContext';
import { ArrowUpRight, X } from '@phosphor-icons/react';
import { useState } from 'react';
import RegistrationForm from './RegistrationForm';

export default function RegistrationFormPopup() {
    const {formActive, setFormActive} = useRegistrationFormContext()  

    return (
        <Dialog.Root open={formActive} onOpenChange={setFormActive}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black opacity-80 data-[state=open]:animate-overlayShow fixed inset-0"/>
                <Dialog.Content className="bg-[#8A8A8A] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[80vh] overflow-y-scroll w-[90vw] max-w-[960px] translate-x-[-50%] translate-y-[-50%] p-[25px]">
                    <Dialog.Title className="text-white text-5xl font-bold mb-14">Registration Form</Dialog.Title>
                        <RegistrationForm />
                    <Dialog.Close asChild>
                        <button
                            className="absolute top-[25px] right-[30px] inline-flex appearance-none items-center justify-center"
                            aria-label="Close"
                        >
                            <X className="text-white" size={25} weight="bold" />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}