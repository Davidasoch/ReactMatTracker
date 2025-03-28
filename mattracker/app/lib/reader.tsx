'use client'

import React, { useCallback, useEffect, useState } from 'react';
import Scanner from '@/app/components/scanbox'
import { useActions } from '@/app/context/scantest';
import Notification from '@/app/components/notification'
import { addMaterialToList, updateMaterialVehicle } from '@/app/lib/data'
import { updateMaterialProjectState } from '@/app/lib/data';
import { createRegister } from '@/app/lib/data';
import { NDEFReader, NDEFReadingEvent } from '@/app/lib/nfcdefinitions';


const Scan = ({ idlist, vehicle_id }: { idlist: number; vehicle_id: number }) => {

    const [message, setMessage] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const { actions, startScan, stopScan } = useActions()

    const scan = useCallback(async () => {
        if ('NDEFReader' in Window && actions.scan != 'disabled') {
            try {
                const ndef = new NDEFReader();
                await ndef.scan();

                console.log("Scan started successfully.");
                ndef.onreadingerror = () => {
                    console.log("Cannot read data from the NFC tag. Try another one?");
                };

                ndef.onreading = event => {
                    console.log("NDEF message read.");
                    onReading(event);
                    console.log(event.serialNumber)
                    startScan();

                };
            } catch (error) {
                console.log(`Error! Scan failed to start: ${error}.`);
            };
            
        }
    }, [stopScan]);


    const onReading = (event:NDEFReadingEvent) => {
        setSerialNumber(event.serialNumber);
        console.log(serialNumber)
        for (const record of event.message.records) {
            switch (record.recordType) {
                case "text":
                    const textDecoder = new TextDecoder(record.encoding);
                    const messagevalue = textDecoder.decode(record.data)
                    setMessage(messagevalue);
                    //se anade el material a la lista del proyecto
                    addMaterialToList(idlist, parseInt(messagevalue), vehicle_id)


                    //se actualiza el vehiculo en el que sen encuentra el material
                    updateMaterialVehicle(parseInt(messagevalue), vehicle_id)

                    //se actualiza el estado del material en relacion al proyecto
                    updateMaterialProjectState(parseInt(messagevalue))

                    //se crea el registro de la accion
                    createRegister(idlist, parseInt(messagevalue), vehicle_id, 'Cargado')
                    break;
                case "url":
                    // TODO: Read URL record with record data.
                    break;
                default:
                // TODO: Handle other records with record data.
            }
        }
    };


    useEffect(() => {
        scan();
    }, [scan]);

    return (
        <>
            {(() => {
                switch (actions.scan) {
                    case "scanned": return <div>
                        <Notification message={message} />
                        <Scanner></Scanner>
                        <p>{parseInt(message)}</p>
                    </div>
                    case "scanning": return <div> <Scanner></Scanner> <p>{actions.scan}</p></div>

                    case "disabled": return <><p>{actions.scan}</p></>

                    default: return null;
                }
            })()}




        </>
    );
};

export default Scan;