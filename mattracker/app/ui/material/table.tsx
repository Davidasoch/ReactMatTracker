
import { Material } from '@/app/lib/definitions';
import "@/app/styles/global/table.css";
import Link from 'next/link';

function MaterialsTable({
  materials,
}: {
  materials: Material[];
}) {
  return (
    <div>
        <h1 className="title">
          Material
        </h1>

        <div className="tablea">
          <div className="overflow-x-auto">
            <div className="tablecontainer">
              <div className="rounded-md p-2 md:pt-0">
                <table className=" rounded-md text-gray-900 md:table border justify-content-center">
                  <thead className="rounded-md text-left text-sm font-normal">
                    <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                        Id
                      </th>
                      <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                        Nombre
                      </th>
                      <th scope="col" className="px-3 py-5 font-medium">
                        Categoria
                      </th>
                      <th scope="col" className="px-3 py-5 font-medium">
                        Subcategoria
                      </th>
                      <th scope="col" className="px-3 py-5 font-medium">
                        Estado
                      </th>
                      <th scope="col" className="px-3 py-5 font-medium">
                        Ubicacion
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 text-gray-900">
                    {materials.map((material) => (
                      <tr key={material.idmaterial} className="group">
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                        {material.idmaterial}
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                          <div className="flex items-center gap-3">
                            <Link className='link' href={`/Material/${material.idmaterial}`}>{material.name}</Link>
                          </div>
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                          {material.category}
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                         {material.subcategory_name}
                        </td>
                        <td className="locationrow whitespace-nowrap bg-white px-4 py-5 text-sm border">
                          {material.state}
                        </td>
                        <td className="locationrow whitespace-nowrap bg-white px-4 py-5 text-sm border">
                          {material.location_name}
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
  );
}

export default MaterialsTable