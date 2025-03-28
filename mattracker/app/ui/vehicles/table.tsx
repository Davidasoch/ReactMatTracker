

import { Vehicle } from '@/app/lib/definitions';
import "@/app/styles/global/table.css";
import Link from 'next/link';
import '@/app/styles/notifications.css'

export default async function VehiclesTable({
  vehicles,
}: {
  vehicles: Vehicle[];
}) {

  return (
    <div>
      <div className="main-container">
        <h1 className="title">
          Vehiculos
        </h1>

        <div className="tablea">
          <div className="">
            <div className="">
              <div className="rounded-md p-2 md:pt-0">
                <table className="  rounded-md text-gray-900 md:table border justify-content-center">
                  <thead className="rounded-md text-left text-sm font-normal">
                    <tr>
                      <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                        Modelo
                      </th>
                      <th scope="col" className="px-3 py-5 font-medium">
                        Matricula
                      </th>
                      <th scope="col" className="px-3 py-5 font-medium">
                        Ubicacion
                      </th>
                      <th scope="col" className="px-3 py-5 font-medium">
                        Reubicar
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
                        <td className="locationrow whitespace-nowrap bg-white px-4 py-5 text-sm border">
                          {vehicle.location_name}
                        </td>
                        <td className="locationrow whitespace-nowrap bg-white px-4 py-5 text-sm border">


                          <Link href={`/ReubicarVehiculo/${vehicle.idvehicle}`} passHref>
                            <div className='styled-buttons'>
                              <button className="btn">Actualizar</button>
                            </div>
                          </Link>

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