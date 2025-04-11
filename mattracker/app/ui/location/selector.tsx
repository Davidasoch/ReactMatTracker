'use client'
import { Location, Vehicle } from '@/app/lib/definitions';
import { useState } from 'react';
import "@/app/styles/global/table.css";
import { updateVehicleLocation } from '@/app/lib/data';


//Vehicle selector when loading material
export default function VehiclesSelector({
  locations,
  vehicle,
}: {
  locations: Location[];
  vehicle: Vehicle[];
}) {

  const [idlocation, setIdlocation] = useState('0')

  //updates the vehicle location whith the selected one
  const handleUpdate = () => {
    const result = updateVehicleLocation(vehicle[0].idvehicle, parseInt(idlocation))
    console.log(result)
  }

  //we're using select to display and select the options
  return (
    <div>
      <div className="main-container">
        <h1 className="title">
          Seleccionar Ubicacion para:
          <p>{vehicle[0].model} - {vehicle[0].plate}</p>
        </h1>

        <div className="mt-6 flow-root ">
          <div className="overflow-x-auto">
            <div className=''><label htmlFor='optionDropdown'></label></div>
            <select id='optionDropdown' value={idlocation} onChange={(e) => setIdlocation(e.target.value)}>
              {locations.map(location => (
                <option key={location.idlocation} value={location.idlocation}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
          <div className='nfc-buttons'>
            <button className='btn medium' onClick={handleUpdate}>Actualizar ubicacion</button>
          </div>
        </div>
      </div>
    </div>
  );
}