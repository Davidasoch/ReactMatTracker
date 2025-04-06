import { RowDataPacket } from "mysql2"

export interface Project extends RowDataPacket {
  idproject: number;
  name: string;
  date_start: Date;
  date_end: Date;
  location_idlocation: number;
  list_idlist: number;
};

export interface LoadedVehicles extends RowDataPacket {
  loaded_vehicles: number;
};

export interface Vehicle extends RowDataPacket {
  idvehicle: number;
  model: string;
  plate: string;
  date_itv: string;
  state: string;
  location_idlocation: number
}



export interface Register extends RowDataPacket {
  idregister: number;
  material_idmaterial: number;
  what?: string;
  date: Date;
  vehicle_idvehicle: number;
  location_idlocation: number;
  project_idproject: number;
}



export interface Material extends RowDataPacket {
  idmaterial: number;
  name: string;
  category: string;
  state: string;
  location_idlocation: number;
  subcategory_idsubcategory: number;
  location_name: string;
  subcategory_name: string;
  vehicle_idvehicle: number;
}

export interface Location extends RowDataPacket {
  idlocation: number;
  name: string;
  municipality_idmunicipality: number;

}

export interface CreateFilteredTable {
  materials: Material[];
  filterCase: string;
}

export interface ProjectItems {
  materials: Material[];
  projectname: string;
}

export type ScannerContext = {
  actions: {
    scan: string,
    write: string
  }
  startScan: () => void;
  stopScan: () => void;

};







