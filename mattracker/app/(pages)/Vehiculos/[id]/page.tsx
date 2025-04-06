
import { getVehicleById, checkVehicleLoad } from "@/app/lib/data";
import VehiclesTable from '@/app/ui/vehicles/table';
import MaterialsTable from '@/app/ui/material/table';
import '@/app/styles/notifications.css'
import '@/app/styles/projects/dashboard.css'

export default async function Page(props: { params: Promise<{ id: number }> }) {
  const params = await props.params
  const id = params.id


  const vehicle = await getVehicleById(id);
  const vehicle_material = await checkVehicleLoad(id)

  return (
    <div>
       <div className="container-dash">
      <VehiclesTable vehicles={vehicle} />
      <MaterialsTable materials={vehicle_material}></MaterialsTable>
      </div>
    </div>
  );
}
