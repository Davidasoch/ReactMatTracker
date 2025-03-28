
import { fetchProject } from "@/app/lib/data";
import ProjectsTable from '@/app/ui/projects/table';


export default async function Page() {

  //const vehicles = await fetchVehicle();

  const projects = await fetchProject();


  return (
    <div>
      <ProjectsTable projects={projects} />
    </div>
  );
}
