
import { fetchLocations } from "@/app/lib/data";
import LocationSelector from '@/app/ui/location/selector';
import Modal from "@/app/components/modal";
import { getVehicleById } from "@/app/lib/data";

export default async function Page(props: { params: Promise<{ id: number }> }) {

  //const res = fetchProject()
  //console.log(res)

  const params = await props.params
  const idvehicle = params.id

  const locations = await fetchLocations();
  const vehicle = await getVehicleById(idvehicle);


  return (
    <div>
      <Modal>
        <LocationSelector locations={locations} vehicle={vehicle} />
      </Modal>

    </div>
  );
}