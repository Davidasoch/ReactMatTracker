
import { fetchMaterial } from "@/app/lib/data";
import MaterialsTable from '@/app/ui/material/table';

export default async function Page() {

  //const res = fetchProject()
  //console.log(res)

  const materials = await fetchMaterial();



  return (
    <div>
      <MaterialsTable materials={materials} />
    </div>
  );
}
