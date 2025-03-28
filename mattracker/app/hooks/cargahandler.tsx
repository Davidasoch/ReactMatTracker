'use client'

import { useState } from 'react'

export function GetActionsValue() {
    const [actions, setActions] = useState(null);

    const actionsValue = { actions, setActions };

    return actionsValue
}