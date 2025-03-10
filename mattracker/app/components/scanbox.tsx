
'use client'
import '@/app/styles/scanbox.css'
import React, { useContext, useState } from 'react';
import { ScanContext } from '@/app/context/scan';
import { ActionsContext } from '@/app/context/scantest'

const Scanner = () => {

  const { actions, setActions} = useContext(ActionsContext)

    return (


      
      <div className="scanner">
        <p className="scanner-exit" onClick={()=>setActions({...actions, scan: 'disabled'})}>X</p>
        <div className="scanner-container">
          <img  alt="spinning log" className="scanner-image"/>
          <p className="scanner-text">
            Scanning...
          </p>
        </div>
      </div>
    );
};

export default Scanner;