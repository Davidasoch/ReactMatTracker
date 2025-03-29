'use client'
import { createContext, useContext, useState } from "react";
import { ScannerContext } from "../lib/definitions";
import { ReactNode } from "react";

//this context is created to handle the scanner's state across the pages
const ActionsContextDefault: ScannerContext = {
    actions: {
        scan: '',
        write: ''
    },
    startScan: () => { },
    stopScan: () => { }
};

const ActionsContext = createContext<ScannerContext>(ActionsContextDefault);

export function useActions() {
    return useContext(ActionsContext);
}



type Props = {
    children: ReactNode;
};

//we export the provider to be used in the layout to allow it across all pages
//we define the state and the functions to swap between both
export function ActionsProvider({ children }: Props) {

    const [actions, setActions] = useState({ scan: 'disabled', write: 'disabled' });

    const startScan = () => {
        setActions({ scan: 'scanning', write: 'disabled' })
    }

    const stopScan = () => {
        setActions({ scan: 'disabled', write: 'disabled' })
    }

    const value = {
        actions,
        startScan,
        stopScan
    }

    return (
        <>
            <ActionsContext.Provider value={value}>
                {children}
            </ActionsContext.Provider>
        </>
    );
}




