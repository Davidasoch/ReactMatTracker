import { Material } from '@/app/lib/definitions';
import '@/app/styles/projects/dashboard.css'

export default async function MaterialsDash({
  materials,
}: {
  materials: Material[];
}) {

  //this function count the material in use
  function activeMaterial() {
    let count = 0
    materials.map((material) => {
      if (material.location_idlocation != 3) {
        count = ++count
      }
    });

    return count
  }

  // this function count the damaged material
  function inoperativeMaterial() {
    let count = 0
    materials.map((material) => {
      if (material.state != 'Listo') {
        count = ++count
      }
    });
    return count
  }

  return (
    <div className='dash card>'>
      <div className='card-head'>
      <h3 className='subtitle'>Material</h3>
      </div>
      <div className='card-content'>
      <p>Material en uso: {activeMaterial()}</p>
      <p>Material defectuoso: {inoperativeMaterial()}</p>
      </div>
    </div>
  );
}

