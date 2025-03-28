
import { fetchVehicle } from "@/app/lib/data";
import VehiclesTable from '@/app/ui/vehicles/table';
import '@/app/styles/notifications.css'

export default async function Page() {

  const vehicles = await fetchVehicle();


  return (
    <div>
      <VehiclesTable vehicles={vehicles} />
    </div>
  );
}
