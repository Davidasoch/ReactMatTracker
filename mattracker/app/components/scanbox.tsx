
'use client'
import '@/app/styles/scanbox.css'
import React from 'react';
import { useActions, ActionsProvider } from '@/app/context/scanactions'
import Spinner from '@/public/spinner.gif';

//this is the scan display, it also handle the context to stop the scan
const Scanner = () => {

  const { stopScan } = useActions()

  return (



    <div className="scanner">
      <ActionsProvider>
        <p className="scanner-exit" onClick={stopScan}>X</p>
      </ActionsProvider>
      <div className="scanner-container">
        <img src={Spinner.src} width="64" height="64" alt="spinning log" className="scanner-image" />
        <p className="scanner-text">
          Scanning...
        </p>
      </div>
    </div>
  );
};

export default Scanner;