
import { fetchVehicle } from "@/app/lib/data";
import VehiclesTable from '@/app/ui/vehicles/table';
import Modal from "@/app/components/modal";
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
        <VehiclesTable vehicles={vehicles}/>
        <NfcButtonCargar idlist={idlist}/>
      </Modal>
  </div> 
  );
}
