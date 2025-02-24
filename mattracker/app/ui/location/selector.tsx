'use client'
import { Location, Vehicle } from '@/app/lib/definitions';
import { useState } from 'react';
import "@/app/styles/global/table.css";
import { updateVehicleLocation } from '@/app/lib/data';



export default function VehiclesSelector({
    locations,
    vehicle,
  }: {
    locations: Location[];
    vehicle: Vehicle[];
  }) {

const [idlocation, setIdlocation] = useState(0)

const handleUpdate = () => {
  const result = updateVehicleLocation(vehicle[0].idvehicle, idlocation)
  console.log(result)
}


  



console.log(idlocation)

    return (
      <div>
      <div className="main-container">
        <h1 className="title">
         Seleccionar Ubicacion para:
          <p>{vehicle[0].model} - {vehicle[0].plate}</p>
        </h1>
        
        <div className="mt-6 flow-root ">
          <div className="overflow-x-auto">
            <div className=''><label htmlFor='vehicleid'></label></div>
            <select id='vehicleid' value={idlocation} onChange={(e) => setIdlocation(e.target.value)}>
              {locations.map(location =>(
                <option key={location.idlocation} value={location.idlocation}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
          <div className='nfc-buttons'>
          <button className='btn' onClick={handleUpdate}>Actualizar ubicacion</button>
          </div>
        </div>
      </div>
      </div>
    );
  }