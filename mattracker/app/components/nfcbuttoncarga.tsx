
'use client'
import Scan from '@/app/lib/reader'
import { useActions } from '@/app/context/scantest';

const NfcButtonCargar = ({ idlist, status, vehicle_id }: { idlist: number; status: boolean; vehicle_id: number }) => {

    const { actions, startScan } = useActions();

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