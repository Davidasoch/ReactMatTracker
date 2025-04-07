import { fetchProject, fetchMaterial, fetchVehicle} from "@/app/lib/data";
import ProjectsDash from '@/app/ui/projects/dash';
import VehiclesDash from '@/app/ui/vehicles/dash';
import MaterialsDash from '@/app/ui/material/dash';
import '@/app/styles/projects/dashboard.css'

export default async function Home() {

  const projects = await fetchProject();
  const materials = await fetchMaterial();
  const vehicles = await fetchVehicle();


  return (
 <div className="container-dash">
    <ProjectsDash projects={projects}></ProjectsDash>
    <MaterialsDash materials={materials}></MaterialsDash>
    <VehiclesDash materials={materials} vehicles={vehicles}></VehiclesDash>
 </div>
  );
}
