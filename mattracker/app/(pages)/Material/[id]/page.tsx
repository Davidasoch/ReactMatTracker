
import { getMaterialById } from "@/app/lib/data";
import MaterialsTable from '@/app/ui/material/table';

export default async function Page(props: { params: Promise<{ id: number }> }) {

  const params = await props.params
  const id = params.id


  const materials = await getMaterialById(id);


  return (
    <div className="main-container">
      <MaterialsTable materials={materials} />

    </div>
  );
}
