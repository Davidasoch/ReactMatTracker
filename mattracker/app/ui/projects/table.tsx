
import { Project } from '@/app/lib/definitions';
import { parseDate } from '@/app/lib/utils';
import "@/app/styles/global/table.css";
import Link from 'next/link';

export default async function ProjectsTable({
  projects,
}: {
  projects: Project[];
}) {



  return (
    <div>
      <div className="main-container">
        <h1 className="title">
          Proyectos
        </h1>
        <div className="tablea ">
          <div className="">
            <div className="">
              <div className="tablex rounded-md p-2 md:pt-0">
                <table className="tablez rounded-md text-gray-900 md:table border">
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
                            <Link className='link'href={`/Proyectos/${project.idproject}`}>{project.name}</Link>
                          </div>
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                        {project.date_start.toLocaleDateString()}
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm border">
                        {parseDate(project.date_end)}
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