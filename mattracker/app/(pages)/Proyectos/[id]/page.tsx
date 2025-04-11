

import { getProjectById, getListMaterialsById } from "@/app/lib/data";
import ProjectsItem from '@/app/ui/projects/item';
import { ButtonStaple } from "@/app/components/buttonStaple";





export default async function Page(props: { params: Promise<{ id: number }> }) {
  const params = await props.params
  const id = params.id


  const project = await getProjectById(id);

  //we get the materials associated to the current project
  const materials = await getListMaterialsById(project[0].list_idlist);

  
  const projectname = project[0].name
  const idlist = project[0].list_idlist

//we display the material associated to the project and the button to load and to unload
  return (
    <div className='main-content'>

      <ProjectsItem ProjectItem={{ materials, projectname }} />
      <div className='nfc-buttons'>
        <ButtonStaple path={`/CargarMaterial/${idlist}`} label={'Cargar'} size={'small'}/>
         <ButtonStaple path={`/DescargarMaterial/${idlist}`} label={'Descargar'} size={'small'} />

      </div>

    </div>
  );
}
