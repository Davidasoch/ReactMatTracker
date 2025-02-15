
'use client'
import Scan from '@/app/lib/reader'
import { useState, useContext } from 'react'
import { ActionsContext } from '@/app/context/scantest';
import Notification from '@/app/components/notification'

const NfcButtonCargar = () => {

const [actions, setActions] = useState(null);

const {scan, write} = actions || {};

const actionsValue = {actions,setActions};

const onHandleAction = (actions) =>{
  setActions({...actions});
}

return (
<div>
<div className="nfc-button">
<button onClick={()=>onHandleAction({scan: 'scanning', write: null})} className="btn">Cargar</button>
</div>
<ActionsContext.Provider value={actionsValue}>
{ scan && <Scan/>}
</ActionsContext.Provider>
</div>
)
}

export default NfcButtonCargar