
import { fetchVehicle } from "@/app/lib/data";
import VehiclesTable from '@/app/ui/vehicles/table';
import Modal from "@/app/components/modal";

export default async function Page() {

  const vehicles = await fetchVehicle();

  return (
    <div>
      <Modal>
        <VehiclesTable vehicles={vehicles} />
      </Modal>
    </div>
  );
}
