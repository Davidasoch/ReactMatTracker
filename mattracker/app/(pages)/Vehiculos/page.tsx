
import { fetchVehicle } from "@/app/lib/data";
import VehiclesTable from '@/app/ui/vehicles/table';

export default async function Page() {

  //const res = fetchProject()
  //console.log(res)

  const vehicles = await fetchVehicle();


  return (
    <div>
<VehiclesTable vehicles={vehicles}/>
  </div> 
  );
}
