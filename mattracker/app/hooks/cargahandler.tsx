'use client'

import { useState, useContext } from 'react'

export function getActionsValue() {
    const [actions, setActions] = useState(null);
    
    const {scan, write} = actions || {};
    
    const actionsValue = {actions,setActions};

    return actionsValue
}
