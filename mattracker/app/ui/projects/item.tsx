'use client'
import React, {useState} from 'react'
import { Material, Project, ProjectItems } from '@/app/lib/definitions';
import "@/app/styles/global/table.css";
import '@/app/styles/global/tab.css'
import FilteredMaterialsTable from '@/app/ui/material/filteredTable';

function ProjectsItem({
    ProjectItem
  }: {
    ProjectItem: ProjectItems;
  }) {

    const tabs =[
      {name:'Todo', content:'Todo el material'},
      {name:'Descargado', content:'Todo el material descargado'},
      {name:'Cargado', content:'todo el material cargado'},
      {name:'Pendiente', content:'Todo el material pendiente'}
    ]

const materials = ProjectItem.materials

const [filterCase, setFilterCase] = useState('Todo')

const [activeTabIndex, setActiveTabIndex] = useState(0)

const activeTab = (index) => {
setActiveTabIndex(index)
}


const setStatus = (index) => {
  activeTab(index)
  setFilterCase(tabs[index].name)
}



    return(
<div className='tabView overflow-auto'>
<h4 className='title'>{ProjectItem.projectname}</h4>
<div className='tab-body m-auto'>
{Object.keys(tabs).length === 0 ?
  <div>No tabs</div>
  :
  <div>
    <div className='tabs'>
      {tabs.map((tab, index) => (
        <label
          key={index}
          className={index === activeTabIndex ? 'active-tab' : 'tab'}
          onClick={() => setStatus(index) }
        >
          {tab.name}
        </label>
      ))}
    </div>
    <div className='content'>{tabs[activeTabIndex].content}
    <FilteredMaterialsTable materials={{materials,filterCase}}/>
    </div>
    </div>
    }
</div>
</div>
    )
  }

  export default ProjectsItem