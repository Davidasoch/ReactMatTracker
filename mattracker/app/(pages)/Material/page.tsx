
import { fetchMaterial } from "@/app/lib/data";
import MaterialsTable from '@/app/ui/material/table';

export default async function Page() {


  const materials = await fetchMaterial();

  return (
    <div className="main-container">
      <MaterialsTable materials={materials} />
    </div>
  );
}
