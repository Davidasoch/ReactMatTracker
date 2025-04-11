'use client'
import { Vehicle } from '@/app/lib/definitions';
import { useState } from 'react';
import "@/app/styles/global/table.css";
import NfcButtonCargar from '@/app/components/nfcbuttoncarga';
//import { useContext } from 'react';



export default function VehiclesSelector({
  vehicles,
  idlist,
}: {
  vehicles: Vehicle[];
  idlist: number;
}) {

  const [status, setStatus] = useState(true)
  const [vehicle_id, setVehicle_id] = useState(0)

  function changeStatus() {
    setStatus(false)
    const idvehicle = parseInt((document.querySelector('input[name="selected_vehicle"]:checked') as HTMLInputElement).value)
    setVehicle_id(idvehicle)
  }


  return (
    <div>
      <div className="">
        <h1 className="title">
          Seleccionar Vehiculo
        </h1>

        <div className="mt-6 flow-root ">
          <div className="overflow-x-auto">
            <div className="tablecontainer">
              <div className="rounded-md p-2 md:pt-0">
                <form name='vehicle_selector'>
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
                          Seleccion
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 text-gray-900">

                      {vehicles.map((vehicle) => (
                        <tr key={vehicle.idvehicle} className="group">
                          <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                            <div className="flex items-center gap-3">
                              {vehicle.model}
                            </div>
                          </td>
                          <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                            {vehicle.plate}
                          </td>
                          <td className="locationrow whitespace-nowrap bg-white px-4 py-5 text-sm border">
                            <input type="radio" name='selected_vehicle' onChange={changeStatus} value={`${vehicle.idvehicle}`} />
                          </td>

                        </tr>
                      ))}

                    </tbody>
                  </table>
                </form>
              </div>
            </div>
              <NfcButtonCargar idlist={idlist} status={status} vehicle_id={vehicle_id} size={'medium'} />
          </div>
        </div>
      </div>
    </div>
  );
}