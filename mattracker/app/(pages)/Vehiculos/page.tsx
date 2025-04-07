
import { fetchVehicle } from "@/app/lib/data";
import VehiclesTable from '@/app/ui/vehicles/table';

export default async function Page() {

  const vehicles = await fetchVehicle();



  return (
    <div className="main-container">
      <VehiclesTable vehicles={vehicles} />
    </div>
  );
}
