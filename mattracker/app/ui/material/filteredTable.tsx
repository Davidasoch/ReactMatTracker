
import { CreateFilteredTable, Material } from '@/app/lib/definitions';
import "@/app/styles/global/table.css";
import Link from 'next/link';

function FilteredMaterialsTable({
  materials, index
}: {
  materials: CreateFilteredTable;
  index: number;
}) {

  function createTable(index: number) {
    return (
      <div>
        <div className="">
          <h1 className="title">
            Material
          </h1>

          <div className="mt-6 flow-root ">
            <div className="overflow-x-auto">
              <div className="tablecontainer">
                <div className="rounded-md p-2 md:pt-0">
                  <table className=" min-w-full rounded-md text-gray-900 md:table border justify-content-center">
                    <thead className="rounded-md text-left text-sm font-normal">
                      <tr key={index}>
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
                          Itinerario
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                          Ubicacion
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                          Vehiculo
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 text-gray-900">
                      {materials.materials.map((material) => (
                        FilterState(material)
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function createRow(material: Material) {
    return (
      <tr key={material.idmaterial} className="group">
        <td className="locationrow whitespace-nowrap bg-white px-4 py-5 text-sm border">
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
          {material.project_state}
        </td>
        <td className="locationrow whitespace-nowrap bg-white px-4 py-5 text-sm border">
          {material.location_name}
        </td>
        <td className="locationrow whitespace-nowrap bg-white px-4 py-5 text-sm border">
          {material.model}
        </td>
      </tr>
    )

  }

  //this function creates the table filtering by the selected tab
  function FilterState(material: Material) {
    //if the filter case matches the project state or its in all tab it passes
    if (materials.filterCase === material.project_state || materials.filterCase === 'Todo') {
      //here we check wheter the case and location matches
      switch (materials.filterCase) {
        case "Descargado":
          if (material.location_name != 'Nave') {
            return (
              createRow(material)
            )
          }
          return (
            <tr key={material.idmaterial}></tr>
          )

        case "Cargado":
          if (material.location_name != 'Nave') {
            return (
              createRow(material)
            )
          }
          return (
            <tr key={material.idmaterial}></tr>
          )

        case "Preparacion":
          if (material.location_name === 'Nave') {
            return (
              createRow(material)
            )
          }
          return (
            <tr key={material.idmaterial}></tr>
          )
        case "Todo":

          return (
            createRow(material)
          )
        default: return null;
      }

    } else {
      //if the material is loaded or unloaded in the warehouse its in fact in preparation
      if (materials.filterCase === 'Preparacion' && material.location_idlocation === 3) {
        return (
          createRow(material)
        )
      }
      return (
        <tr key={material.idmaterial}></tr>
      )
    }
  }

  return (
    <>
      {createTable(index)}
    </>
  );
}

export default FilteredMaterialsTable