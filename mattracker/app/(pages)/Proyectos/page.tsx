
import { fetchProject } from "@/app/lib/data";
import ProjectsTable from '@/app/ui/projects/table';

export default async function Page() {

  //const res = fetchProject()
  //console.log(res)

  const projects = await fetchProject();


  return (
    <div>
<ProjectsTable projects={projects}/>
  </div> 
  );
}
