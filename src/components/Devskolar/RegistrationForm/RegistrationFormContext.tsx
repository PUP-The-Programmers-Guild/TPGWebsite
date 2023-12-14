import { ReactNode, createContext, useContext, useState } from "react";

type RegistrationFormContextType = {
  formActive: boolean;
  setFormActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RegistrationFormContext = createContext<RegistrationFormContextType | null>(null)

export default function RegistrationFormContextProvider({children} : {children: ReactNode}) {
    const [formActive, setFormActive] = useState<boolean>(false)
    return (
        <RegistrationFormContext.Provider value={{formActive, setFormActive}}>
            {children}
        </RegistrationFormContext.Provider>
    )
}

export function useRegistrationFormContext() {
    const formContext = useContext(RegistrationFormContext)
    if (!formContext) {
        throw new Error(
            "useRegistrationFormContext must be used within a RegistrationFormContextProvider"
        );
    }
    return formContext;
}