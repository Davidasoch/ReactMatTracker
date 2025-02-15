'use client'

import { useState, useContext } from 'react'

export function getActionsValue() {
    const [actions, setActions] = useState(null);
    
    const {scan, write} = actions || {};
    
    const actionsValue = {actions,setActions};

    return actionsValue
}

    const [actions, setActions] = useState(null);
    
    const {scan, write} = actions || {};
    
    const actionsValue = {actions,setActions};
    
    export function onHandleAction(actionst){
      setActions({...actionst})
      return actions
    }