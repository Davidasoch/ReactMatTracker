'use client'
import { useState, useEffect } from 'react'
import '@/app/styles/notifications.css';

//notification work in progress

const Notification = ({ message }: { message: string }) => {

  const [display, setDisplay] = useState(true);

  useEffect(() => { setDisplay(true) });

  setTimeout(() => {
    setDisplay(false);
  }, 2000);

  const text = JSON.stringify(message)

  return (

    <div className="toast-area" id="toasts" style={{ display: display ? "block" : "none" }}>
      <div className="toast" id="clonemother">
        <div className="toast-content">
          <div className="before"></div>
          <div className="icon">&#x2714</div>
          <div className="text"><p>Success</p><p className="message">{text}</p></div>
          <div onClick={() => setDisplay((prevDisplay) => !prevDisplay)} className="close">x</div>
        </div>
      </div>
    </div>
  )
}

export default Notification;