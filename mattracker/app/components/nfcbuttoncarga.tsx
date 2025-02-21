
'use client'
import Scan from '@/app/lib/reader'
import { useState, useContext } from 'react'
import { ActionsContext } from '@/app/context/scantest';
import { useRef } from 'react';
import Notification from '@/app/components/notification'

const NfcButtonCargar = (items: object ) => {

const [actions, setActions] = useState(null);

const {scan, write} = actions || {};

const actionsValue = {actions,setActions};

const onHandleAction = (actions) =>{
  setActions({...actions});
}

return (
<div>
<div className="nfc-button">
<button  disabled={items.status} onClick={()=>onHandleAction({scan: 'scanning', write: null})} className="btn">Cargar</button>
</div>
<ActionsContext.Provider value={actionsValue}>
{ scan && <Scan idlist={items.idlist} idvehicle={items.vehicle_id}/>}
</ActionsContext.Provider>
</div>
)
}

export default NfcButtonCargar