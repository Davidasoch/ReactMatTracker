
import { getProjectById } from "@/app/lib/data";
import ProjectsTable from '@/app/ui/projects/table';

export default async function Page(props: { params: Promise<{ id: number }> }) {
const params = await props.params
const id = params.id
  //const res = fetchProject()
  //console.log(res)

  const projects = await getProjectById(id);

  return (
    <div>
<ProjectsTable  projects={projects}/>
  </div> 
  );
}
