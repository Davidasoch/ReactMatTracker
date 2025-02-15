
'use client'
import Scan from '@/app/components/scan';
import { useState } from 'react';
import { ActionsContext } from '@/app/components/context';

export default function Page() {
  //const res = fetchProject()
  //console.log(res)

  const [actions, setActions] = useState(null);
  const {scan, write} = actions || {};

  const actionsValue = {actions,setActions};

  const onHandleAction = (actions: any) =>{
    setActions({...actions});
  }


  return (
    <div className="App">
    <img className="App-logo" alt="logo" />
    <h1>NFC Tool</h1>
    <div className="App-container">
      <button onClick={()=>onHandleAction({scan: 'scanning', write: null})} className="btn">Scan</button>
      <button onClick={()=>onHandleAction({scan: null, write: 'writing'})} className="btn">Write</button>
    </div>
      {scan && <Scan/>}
  </div>
  )
}
