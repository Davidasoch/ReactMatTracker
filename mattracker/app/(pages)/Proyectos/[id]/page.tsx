

import { getProjectById, getListMaterialsById  } from "@/app/lib/data";
import ProjectsItem from '@/app/ui/projects/item';
import NfcButtonCargar from '@/app/components/nfcbuttoncarga'
import NfcButtonDescargar from '@/app/components/nfcbuttondescarga'
import { ActionsContext } from '@/app/context/scantest';
import Scan from '@/app/lib/reader'
import Link from "next/link";
import '@/app/styles/notifications.css'
import { redirect } from 'next/navigation'
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



  const label = 'Cargar'
  const path = `/CargarMaterial/${idlist}`



  return (
    <div className='main-content'>

<ProjectsItem  ProjectItem={{materials,projectname}}/>
<div className='nfc-buttons'>
  <ButtonStaple data={{path,label}}/>
</div>
  </div> 
  );
}
