
import { fetchLocations } from "@/app/lib/data";
import LocationSelector from '@/app/ui/location/selector';
import { getVehicleById } from "@/app/lib/data";

export default async function Page(props: { params: Promise<{ id: number }> }) {

  const params = await props.params
  const idvehicle = params.id

  const locations = await fetchLocations();
  const vehicle = await getVehicleById(idvehicle);

  return (
    <div>

      <LocationSelector locations={locations} vehicle={vehicle} />

    </div>
  );
}