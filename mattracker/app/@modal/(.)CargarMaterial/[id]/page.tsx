
import { fetchVehicle } from "@/app/lib/data";
import VehiclesSelector from '@/app/ui/vehicles/selector';
import Modal from "@/app/components/modaltest";
import Link from "next/link";
import NfcButtonCargar from "@/app/components/nfcbuttoncarga";

export default async function Page(props: { params: Promise<{ id: number }> }) {

const params = await props.params
const idlist = params.id
  //const res = fetchProject()
  //console.log(res)

  const vehicles = await fetchVehicle();


  return (
    <div>
      <Modal>
        <VehiclesSelector vehicles={vehicles}/>
        <div className='nfc-buttons'>
        <NfcButtonCargar idlist={idlist}/>
        </div>
      </Modal>
  </div> 
  );
}
