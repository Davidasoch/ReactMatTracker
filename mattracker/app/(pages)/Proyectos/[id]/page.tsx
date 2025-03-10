

import { getProjectById, getListMaterialsById  } from "@/app/lib/data";
import ProjectsItem from '@/app/ui/projects/item';
import '@/app/styles/notifications.css'
import { ButtonStaple } from "@/app/components/buttonStaple";



export default async function Page(props: { params: Promise<{ id: number }> }) {
const params = await props.params
const id = params.id
  //const res = fetchProject()
  //console.log(res)

  const project = await getProjectById(id);

  const materials = await getListMaterialsById(project[0].list_idlist);
  const projectname = project[0].name
  const idlist = project[0].list_idlist


const loaddata = {
  label : 'Cargar',
  path : `/CargarMaterial/${idlist}`
}

const unloaddata = {
  label : 'Descargar',
  path : `/DescargarProyecto/${idlist}`
}

  return (
    <div className='main-content'>

<ProjectsItem  ProjectItem={{materials,projectname}}/>
<div className='nfc-buttons'>
  <ButtonStaple data={loaddata}/>
  <ButtonStaple data={unloaddata}/>
</div>

  </div> 
  );
}
