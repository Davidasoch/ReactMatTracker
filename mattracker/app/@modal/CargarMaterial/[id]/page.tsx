
import { fetchVehicle } from "@/app/lib/data";
import VehiclesSelector from '@/app/ui/vehicles/selector';
import Modal from "@/app/components/modal";

export default async function Page(props: { params: Promise<{ id: number }> }) {

  const params = await props.params
  const idlist = params.id
  //const res = fetchProject()
  //console.log(res)

  const vehicles = await fetchVehicle();


  return (
    <div>
      <Modal>
        <VehiclesSelector vehicles={vehicles} idlist={idlist} />
      </Modal>
    </div>
  );
}
