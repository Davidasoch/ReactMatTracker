import { Project } from '@/app/lib/definitions';
import '@/app/styles/projects/dashboard.css'
import Link from 'next/link';

export default async function ProjectsDash({
    projects,
}: {
    projects: Project[];
}) {

    function activeProjects() {
        let count = 0
        projects.map((project) => {
          if (project.date_end == null) {
            count = ++count
          }
        });

    return count
      }

    return (
        <div className='projects-dash card'>
            <div className='card-head'>
            <h3 className='subtitle'>Proyectos Activos {activeProjects()}</h3>
            </div>
            <div className='card-content'>
            {projects.map((project) => (
                <div key={project.idproject} className='project-row'>  <Link className='link' href={`/Proyectos/${project.idproject}`}>-{project.name}</Link></div>

            ))}
            </div>
        </div>
    );
}

