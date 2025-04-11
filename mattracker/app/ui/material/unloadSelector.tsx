'use client'
import { Project, Material } from '@/app/lib/definitions';
import { ChangeEvent, useState } from 'react';
import "@/app/styles/global/table.css";
import { updateVehicleproject } from '@/app/lib/data';


//Vehicle selector when loading material
export default function UnloadSelector({
  projects, material
}: {
  projects: Project[];
  material: Material[];
}) {

  const [idProject, setIdProject] = useState(0)
  const [projectName, setProjectName] = useState('')

  //updates the material project 
  const handleUpdate = () => {
    const result = updateMaterialProject(material[0].idmaterial, idProject)
    console.log(result)
  }


  //we're using select to display and select the options
  return (
    <div>
      <div className="main-container">
        <h1 className="title">
          Seleccionar Proyecto para Descarga:
          <p>{projectName}</p>
        </h1>

        <div className="mt-6 flow-root ">
          <div className="overflow-x-auto">
            <div className='project-options'><label htmlFor='optionDropdown'></label></div>
            <select id='optionDropdown' value={idProject} onChange={(e) => {setIdProject(parseInt(e.target.value)), setProjectName(projects[parseInt(e.target.value)-1].name)}}>
              {projects.map(project => (
                <option key={project.idproject} value={project.idproject}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
          <div className='nfc-buttons'>
            <button className='btn big' onClick={handleUpdate}>Descargar en {projectName}</button>
          </div>
        </div>
      </div>
    </div>
  );
}