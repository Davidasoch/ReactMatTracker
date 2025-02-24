'use client'
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Scanner  from '@/app/components/scanbox'
import { ActionsContext } from '@/app/context/scantest';
import Notification from '@/app/components/notification'
import { addMaterialToList, getMaterialById, updateMaterialVehicle} from '@/app/lib/data'
import { updateMaterialProjectState } from '@/app/lib/data';
import { createRegister } from '@/app/lib/data';


const Scan = (items: object) => {
    const [message, setMessage] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const { actions, setActions} = useContext(ActionsContext);

    const scan = useCallback(async() => {
        if ('NDEFReader' in window && actions.scan!='disabled') {  
                try {
                    const ndef = new window.NDEFReader();
                    await ndef.scan();
                    
                    console.log("Scan started successfully.");
                    ndef.onreadingerror = () => {
                        console.log("Cannot read data from the NFC tag. Try another one?");
                    };
                    
                    ndef.onreading = event => {
                        console.log("NDEF message read.");
                        onReading(event);
                        setActions({
                            scan: 'scanned',
                            write: null
                        });
                        
                    };

                } catch(error){
                    console.log(`Error! Scan failed to start: ${error}.`);
                };


            

        }
    },[setActions]);

    const onReading = ({message, serialNumber}) => {
        setSerialNumber(serialNumber);
        for (const record of message.records) {
            switch (record.recordType) {
                case "text":
                    const textDecoder = new TextDecoder(record.encoding);
                    const messagevalue = textDecoder.decode(record.data)
                    setMessage(messagevalue);
                    //se anade el material a la lista del proyecto
                    //addMaterialToList(items.idlist,parseInt(messagevalue),items.idvehicle)

                    //se actualiza el vehiculo en el que sen encuentra el material
                    //updateMaterialVehicle(parseInt(messagevalue),items.idvehicle)

                    //se actualiza el estado del material en relacion al proyecto
                    updateMaterialProjectState(parseInt(messagevalue))

                    //se crea el registro de la accion
                    const currentmaterial = getMaterialById(parseInt(messagevalue))
                    createRegister(items.idlist,currentmaterial[0].idmaterial, items.idvehicle, Date.now, currentmaterial[0].project_state )
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

    return(
        <>
{(() => {
        switch (actions.scan) {
          case "scanned":   return <div>
          <Notification message={message}/>
          <Scanner status={actions.scan}></Scanner>
          <p>{parseInt(message)}</p>
      </div>
          case "scanning": return <div> <Scanner status={actions.scan}></Scanner> </div>

          case "disabled": return <><p>disabled</p></>

          default:      return null;
        }
      })()}



 
        </>
    );
};

export default Scan;