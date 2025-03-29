
import { getVehicleById } from "@/app/lib/data";
import VehiclesTable from '@/app/ui/vehicles/table';

export default async function Page(props: { params: Promise<{ id: number }> }) {
  const params = await props.params
  const id = params.id


  const vehicles = await getVehicleById(id);

  return (
    <div>
      <VehiclesTable vehicles={vehicles} />
    </div>
  );
}
