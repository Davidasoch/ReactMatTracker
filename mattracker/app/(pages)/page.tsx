import '@/app/styles/projects/dashboard.css'
import { fetchProject, fetchMaterial, fetchVehicle} from "@/app/lib/data";
import { Material } from '@/app/lib/definitions';
import ProjectsDash from '@/app/ui/projects/dash';
import VehiclesDash from '@/app/ui/vehicles/dash';
import MaterialsDash from '../ui/material/dash';
export default async function Home() {

  const projects = await fetchProject();
  const materials = await fetchMaterial();
  const vehicles = await fetchVehicle();


  return (
 <div className="container-dash">
      <ProjectsDash projects={projects}></ProjectsDash>
  <div className='material-vehicles-dash'>
    <MaterialsDash materials={materials}></MaterialsDash>
    <VehiclesDash materials={materials} vehicles={vehicles}></VehiclesDash>
  </div>
 </div>
  );
}
