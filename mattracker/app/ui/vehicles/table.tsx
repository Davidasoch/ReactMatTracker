
import { Vehicle } from '@/app/lib/definitions';
import "@/app/styles/global/table.css";
import Link from 'next/link';

export default async function VehiclesTable({
  vehicles,
}: {
  vehicles: Vehicle[];
}) {
  return (
    <div>
    <div className="">
      <h1 className="title">
       Vehiculos
      </h1>
      
      <div className="mt-6 flow-root ">
        <div className="overflow-x-auto">
          <div className="tablecontainer">
            <div className="rounded-md p-2 md:pt-0">
              <table className=" min-w-full rounded-md text-gray-900 md:table border justify-content-center">
                <thead className="rounded-md text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Modelo
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                        Matricula
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Fecha ITV
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Estado
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {vehicles.map((vehicle) => (
                    <tr key={vehicle.idvehicle} className="group">
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                        <div className="flex items-center gap-3">
                        <Link href={`/Vehiculos/${vehicle.idvehicle}`}>{vehicle.model}</Link>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                        {vehicle.plate}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                        {JSON.stringify(vehicle.date_itv)}
                      </td>
                      <td className="locationrow whitespace-nowrap bg-white px-4 py-5 text-sm border">
                        {vehicle.location_idlocation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}