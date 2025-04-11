
'use client'
import Scan from '@/app/components/reader'

//useAction handle the context data
import { useActions } from '@/app/context/scanactions';

//this components is prepared to load material
const NfcButtonCargar = ({ idlist, status, vehicle_id, size }: { idlist: number; status: boolean; vehicle_id: number, size: string }) => {

    
    const { actions, startScan } = useActions();
//if the context is set to scanning the Scan component will be called
    return (
        <div>
            <div className="nfc-buttons">
                <button disabled={status} onClick={() => startScan()} className={`btn ${size}`}>Cargar</button>
            </div>
            {actions.scan && <Scan idlist={idlist} vehicle_id={vehicle_id} />}
        </div>
    )
}

export default NfcButtonCargar