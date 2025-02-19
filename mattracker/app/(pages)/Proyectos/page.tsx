
import { fetchProject } from "@/app/lib/data";
import ProjectsTable from '@/app/ui/projects/table';
import { fetchVehicle } from "@/app/lib/data";
import VehiclesTable from '@/app/ui/vehicles/table';
import Modal from "@/app/components/modalvehicle";
import Link from "next/link";

export default async function Page() {

  //const res = fetchProject()
  //console.log(res)





  //const res = fetchProject()
  //console.log(res)

  const vehicles = await fetchVehicle();

  const projects = await fetchProject();


  return (
    <div>
<ProjectsTable projects={projects}/>
<Link href="/CargarMaterial">Open modal</Link>
  </div> 
  );
}
