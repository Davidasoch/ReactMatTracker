
import { getMaterialById } from "@/app/lib/data";
import MaterialsTable from '@/app/ui/material/table';

export default async function Page(props: { params: Promise<{ id: number }> }) {
const params = await props.params
const id = params.id
  //const res = fetchProject()
  //console.log(res)

  const materials = await getMaterialById(id);

  const resultstate = {
    state: materials[0].project_state,
    location: materials[0].location_idlocation
  }

  console.log(resultstate.state)

  return (
    <div>
<MaterialsTable materials={materials}/>

  </div> 
  );
}
