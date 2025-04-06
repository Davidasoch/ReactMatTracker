import { Vehicle, Material } from '@/app/lib/definitions';
import Link from 'next/link';
import '@/app/styles/projects/dashboard.css'

export default async function VehiclesDash({
    vehicles, materials
}: {
    vehicles: Vehicle[];
    materials: Material[];
}) {

    const id_vehicles = vehicles.map(a => a.idvehicle)
    const material_vehicles = materials.map(a => a.vehicle_idvehicle)

    const loaded_vehicles = id_vehicles.filter(v1 => material_vehicles.includes(v1));


    const unloaded_vehicles = id_vehicles.length - loaded_vehicles.length

    function inoperativeVehicle() {
        let count = 0
        materials.map((material) => {
          if (material.state != 'Listo' ) {
            count = ++count
          }
        });
    return count
      }


    return (
        <div className='dash card'>
             <div className='card-head'>
            <h3 className='subtitle'>Vehiculos</h3>
            </div>
            <div className='card-content'>
            <p>Cargados: {loaded_vehicles.length}</p>
            <p>Descargados: {unloaded_vehicles}</p>
            </div>
        </div>
    );
}

