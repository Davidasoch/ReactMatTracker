
import { fetchProject } from "@/app/lib/data";
import ProjectsTable from '@/app/ui/projects/table';
import { fetchVehicle } from "@/app/lib/data";


export default async function Page() {

  const vehicles = await fetchVehicle();

  const projects = await fetchProject();


  return (
    <div>
<ProjectsTable projects={projects}/>
  </div> 
  );
}
