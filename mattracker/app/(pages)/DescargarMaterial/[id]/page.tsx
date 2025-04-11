
import { fetchProject, getMaterialById} from "@/app/lib/data";
import UnloadSelector from '@/app/ui/material/unloadSelector';
import '@/app/styles/global/select-options.css';

export default async function Page(props: { params: Promise<{ id: number }> }) {

  const params = await props.params
  const material = await getMaterialById(params.id)

  const projects = await fetchProject();
  return (
    <div className="unload-container">
      
      <div className='unload-warehouse'>

      </div>
      <div className="unload-selector">
      <UnloadSelector projects={projects} material={material}/>
      </div>
    </div>
  );
}