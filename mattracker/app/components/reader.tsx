'use client'
import React, { useCallback, useEffect, useState } from 'react';
import Scanner from '@/app/components/scanbox'
import { useActions } from '@/app/context/scanactions';
import Notification from '@/app/components/notification'
import { addMaterialToList, updateMaterialVehicle } from '@/app/lib/data'
import { updateMaterialProjectState } from '@/app/lib/data';
import { createRegister } from '@/app/lib/data';
import { NDEFReader, NDEFReadingEvent } from '@/app/lib/nfcdefinitions.d';

//we receive the list id to add the material and the vehicle id to set it loaded in
const Scan = ({ idlist, vehicle_id }: { idlist: number; vehicle_id: number }) => {

    //we define the variables to store de nfc data and the state of the scan
    const [message, setMessage] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const { actions, startScan, stopScan} = useActions()


    const scan = useCallback(async () => {
        //we check if the NDEF reader is running
        if ('NDEFReader' in window && actions.scan != 'disabled') {
            try {
                const ndef: NDEFReader = new window.NDEFReader();
                await ndef.scan();
                console.log("Scan started successfully.");
                ndef.onreadingerror = () => {
                    console.log("Cannot read data from the NFC tag. Try another one?");
                };

                ndef.onreading = event => {
                    //when our scan instance read the nfc tag we call the onReading function
                    console.log("NDEF message read.");
                    onReading(event);
                    console.log(event.serialNumber)
                    stopScan();

                };
            } catch (error) {
                console.log(`Error! Scan failed to start: ${error}.`);
            };

        }
    }, [startScan]);


    const onReading = (event: NDEFReadingEvent) => {
        setSerialNumber(event.serialNumber);
        console.log(serialNumber)
        //we read the data, in our case it will be the text field what we are using to identify the material
        for (const record of event.message.records) {
            switch (record.recordType) {
                case "text":
                    const textDecoder = new TextDecoder(record.encoding);
                    const messagevalue = textDecoder.decode(record.data)
                    setMessage(messagevalue);
                    //we add the material to the project list
                    addMaterialToList(idlist, parseInt(messagevalue), vehicle_id)


                    //we update the vehicle where the material is loaded
                    updateMaterialVehicle(parseInt(messagevalue), vehicle_id)

                    //we update the material stated related to the project
                    updateMaterialProjectState(parseInt(messagevalue))

                    //we create a register from the action
                    //createRegister(idlist, parseInt(messagevalue), vehicle_id, 'Cargado')
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

    //we return the scan if its enabled
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