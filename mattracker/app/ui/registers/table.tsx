
import { Register } from '@/app/lib/definitions';
import "@/app/styles/global/table.css";
import { parseDate } from '@/app/lib/utils';

export default async function RegistersTable({
  registers,
}: {
  registers: Register[];
}) {
  return (
    <div>
      <div className="main-container">
        <h1 className="title">
          Registros
        </h1>

        <div className="tablea">
          <div className="overflow-x-auto">
            <div className="tablecontainer">
              <div className="rounded-md p-2 md:pt-0">
                <table className=" rounded-md text-gray-900 md:table border justify-content-center">
                  <thead className="rounded-md text-left text-sm font-normal">
                    <tr>
                      <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                        Material
                      </th>
                      <th scope="col" className="px-3 py-5 font-medium">
                        Accion
                      </th>
                      <th scope="col" className="px-3 py-5 font-medium">
                        Fecha/Hora
                      </th>
                      <th scope="col" className="px-3 py-5 font-medium">
                        Vehiculo
                      </th>
                      <th scope="col" className="px-3 py-5 font-medium">
                        Ubicacion
                      </th>
                      <th scope="col" className="px-3 py-5 font-medium">
                        Proyecto
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 text-gray-900">
                    {registers.map((register) => (
                      <tr key={register.idregister} className="group">
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                          <div className="flex items-center gap-3">
                            {register.material_name}
                          </div>
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                          {register.type}
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                          {parseDate(register.date)}
                        </td>
                        <td className="locationrow whitespace-nowrap bg-white px-4 py-5 text-sm border">
                          {register.vehicle_name}
                        </td>
                        <td className="locationrow whitespace-nowrap bg-white px-4 py-5 text-sm border">
                          {register.location_name}
                        </td>
                        <td className="locationrow whitespace-nowrap bg-white px-4 py-5 text-sm border">
                          {register.project_name}
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