
import { fetchVehicle } from "@/app/lib/data";
import VehiclesTable from '@/app/ui/vehicles/table';

export default async function Page() {



  const vehicles = await fetchVehicle();

// it displays the vehicle's table to choose one
  return (
    <div>

      <VehiclesTable vehicles={vehicles} />

    </div>
  );
}