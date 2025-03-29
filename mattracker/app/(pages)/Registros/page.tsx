
import { fetchRegister } from "@/app/lib/data";
import RegistersTable from '@/app/ui/registers/table';

export default async function Page() {


  const registers = await fetchRegister();


  return (
    <div>
      <RegistersTable registers={registers} />
    </div>
  );
}