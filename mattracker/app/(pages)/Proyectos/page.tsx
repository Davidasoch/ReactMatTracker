
import { fetchProject } from "@/app/lib/data";
import ProjectsTable from '@/app/ui/projects/table';


export default async function Page() {

  const projects = await fetchProject();


  return (
    <div>
      <ProjectsTable projects={projects} />
    </div>
  );
}
