'use client'
import { createContext, useContext, useState } from "react";
import { ScannerContext } from "../lib/definitions";
import { ReactNode } from "react";

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




