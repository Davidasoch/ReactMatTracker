
import { getMaterialById } from "@/app/lib/data";
import MaterialsTable from '@/app/ui/material/table';

export default async function Page(props: { params: Promise<{ id: number }> }) {
const params = await props.params
const id = params.id
  //const res = fetchProject()
  //console.log(res)

  const materials = await getMaterialById(id);

  console.log(materials[0].project_state)

  return (
    <div>
<MaterialsTable materials={materials}/>

  </div> 
  );
}
