import { Project } from '@/app/lib/definitions';
import '@/app/styles/projects/dashboard.css'

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
                <div key={project.idproject} className='project-row'>  <p key={project.idproject} className="group">-{project.name}</p></div>

            ))}
            </div>
        </div>
    );
}

