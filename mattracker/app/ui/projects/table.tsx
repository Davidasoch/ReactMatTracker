
import { Project } from '@/app/lib/definitions';
import "@/app/styles/global/table.css";
import Link from 'next/link';

export default async function ProjectsTable({
  projects,
}: {
  projects: Project[];
}) {
  console.log(projects)
  return (
    <div>
    <div className="">
      <h1 className="title">
       Proyectos
      </h1>
      
      <div className="mt-6 flow-root ">
        <div className="overflow-x-auto">
          <div className="tablecontainer">
            <div className="rounded-md p-2 md:pt-0">
              <table className=" min-w-full rounded-md text-gray-900 md:table border justify-content-center">
                <thead className="rounded-md text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Proyecto
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Fecha inicio
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Fecha fin
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Localizacion
                    </th>

                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {projects.map((project) => (
                    <tr key={project.idproject} className="group">
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                        <div className="flex items-center gap-3">
                        <Link href={`/Proyectos/${project.idproject}`}>{project.name}</Link>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                        {JSON.stringify(project.date_start)}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                        {project.date_end}
                      </td>
                      <td className="locationrow whitespace-nowrap bg-white px-4 py-5 text-sm border">
                        {project.location_name}
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