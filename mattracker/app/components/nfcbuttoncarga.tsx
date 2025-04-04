
'use client'
import Scan from '@/app/lib/reader'
//useAction handle the context data
import { useActions } from '@/app/context/scantest';

//this components is prepared to load material
const NfcButtonCargar = ({ idlist, status, vehicle_id }: { idlist: number; status: boolean; vehicle_id: number }) => {

    
    const { actions, startScan } = useActions();
//if the context is set to scanning the Scan component will be called
    return (
        <div>
            <div className="nfc-button">
                <button disabled={status} onClick={() => startScan()} className="btn">Cargar</button>
            </div>
            {actions.scan && <Scan idlist={idlist} vehicle_id={vehicle_id} />}
        </div>
    )
}

export default NfcButtonCargar