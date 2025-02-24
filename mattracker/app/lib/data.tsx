'use server'
import { getConnection } from "@/app/lib/db"
import { Material, Project, Vehicle, Register, Location } from '@/app/lib/definitions';

//Project functions

//Retrieve all projects
export async function fetchProject() {
    try {
 
      const  connection = await getConnection() 
      const [results] = await connection.query<Project[]>({
        sql: `
          SELECT project.idproject, project.name, project.date_start, project.date_end, project.location_idlocation, project.list_idlist, location.name AS location_name FROM project INNER JOIN location on project.location_idlocation = location.idlocation;
        `, values: []
      })
      await connection.end();
      return results

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch project data.');
    }
  }

  //Retrieve a project by id
  export async function getProjectById(id: number) {
    try {

      const connection = await getConnection()
      const [results] = await connection.query<Project[]>({
        sql: `
          SELECT * FROM project 
          WHERE idproject = ${id};
        `, values: [id]
      })
      await connection.end();
      return results

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch project.');
    }
  }

  //retireve the project's list material

  export async function getListMaterialsById(id: number) {
    try {

      const connection = await getConnection()
      const [results] = await connection.query<Material[]>({
        sql: `
          SELECT material.idmaterial, material.name, material.state, material.vehicle_idvehicle, material.location_idlocation, material.category, material.project_state, subcategory.name AS subcategory_name, location.name AS location_name, vehicle.model
           FROM list_has_material
          INNER JOIN material ON list_has_material.material_idmaterial=material.idmaterial AND list_has_material.list_idlist=${id}
          INNER JOIN subcategory ON material.subcategory_idsubcategory=subcategory.idsubcategory
          INNER JOIN location ON material.location_idlocation = location.idlocation
          LEFT JOIN vehicle ON material.vehicle_idvehicle = vehicle.idvehicle;
        `, values: [id]
      })
      await connection.end();
      return results

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch project.');
    }
  }

    //Add a material to a list
    export async function addMaterialToList(idlist: number,idmaterial: number, idvehicle: number) {
      try {
  
        const connection = await getConnection()
        const [results] = await connection.query({
          sql: `
            INSERT INTO list_has_material (list_idlist,material_idmaterial, vehicle_idvehicle)
            VALUES (${idlist},${idmaterial},${idvehicle});
          `, values: [idlist,idmaterial,idvehicle]
        })
        await connection.end();
        return results
  
      } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch project.');
      }
    }

    //update material vehicle

   export async function updateMaterialVehicle(idmaterial: number, idvehicle: number) {

    try {
  
      const connection = await getConnection()
      const [results] = await connection.query({
        sql: ` 
        UPDATE material SET vehicle_idvehicle = ${idvehicle}
        WHERE idmaterial = ${idmaterial};
   `, values: [idmaterial,idvehicle]
      })
      await connection.end();
      return results

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch project.');
    }
   }

   //update material project state

   export async function updateMaterialProjectState(idmaterial: number) {

    try {
  
      const connection = await getConnection()
      const [results] = await connection.query({
        sql: ` 
        UPDATE material SET project_state = 'Cargado'
        WHERE idmaterial = ${idmaterial};
   `, values: [idmaterial]
      })
      await connection.end();
      return results

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch project.');
    }
   }


  //Vehicle functions

  //retriev all vehicles
  export async function fetchVehicle() {
    try {
 
      const  connection = await getConnection() 
      const [results] = await connection.query<Vehicle[]>({
        sql: `
          SELECT vehicle.idvehicle, vehicle.model, vehicle.plate, vehicle.date_itv, vehicle.state, location.name AS location_name  FROM vehicle
          INNER JOIN location ON vehicle.location_idlocation = location.idlocation;
        `, values: []
      })
      await connection.end();
      return results

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch project data.');
    }
  }

    //retrieve a vehicle by id
    export async function getVehicleById(id: number) {
      try {

        const connection = await getConnection()
        const [results] = await connection.query<Vehicle[]>({
          sql: `
            SELECT * FROM vehicle 
            WHERE idvehicle = ${id};
          `, values: [id]
        })
        await connection.end();
        return results
  
      } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch project.');
      }
    }

  //Material functions

  //retrieve all materials
  export async function fetchMaterial() {
    try {
 
      const  connection = await getConnection() 
      const [results] = await connection.query<Material[]>({
        sql: `
          SELECT * FROM material;
        `, values: []
      })
      await connection.end();
      return results

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch project data.');
    }
  }

      //retrieve a material by id
      export async function getMaterialById(id: number) {
        try {

          const connection = await getConnection()
          const [results] = await connection.query<Material[]>({
            sql: `
              SELECT * FROM material 
              WHERE idmaterial = ${id};
            `, values: [id]
          })
          await connection.end();
          return results
    
        } catch (error) {
          console.error('Database Error:', error);
          throw new Error('Failed to fetch project.');
        }
      }

  //Register functions

  export async function fetchRegister() {
    try {
 
      const  connection = await getConnection() 
      const [results] = await connection.query<Register[]>({
        sql: `
          SELECT * FROM register;
        `, values: []
      })
      await connection.end();
      return results

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch project data.');
    }
  }

  export async function createRegister(idproject: number,idmaterial: number, idvehicle: number,) {
    try {

      const connection = await getConnection()
      const material = getMaterialById(idmaterial)
      const [results] = await connection.query({
        sql: `
          INSERT INTO register (material_idmaterial, date, type, location_idlocation, vehicle_idvehicle, project_idproject)
          VALUES (${idmaterial},${Date.now},${material[0].project_state},${material[0].location_idlocation},${idvehicle},${idproject});
        `, values: [idmaterial,material[0].project_state,material[0].location_idlocation,location,idmaterial,idproject]
      })
      await connection.end();
      return results

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch project.');
    }
  }

  export async function fetchLocations() {
    try {
 
      const  connection = await getConnection() 
      const [results] = await connection.query<Location[]>({
        sql: `
          SELECT * FROM location;
        `, values: []
      })
      await connection.end();
      return results

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch project data.');
    }
  }

  //update the location  for vehicles and material

  export async function updateVehicleLocation(idvehicle: number, idlocation: number) {

    try {

      const connection = await getConnection()
      const [resultsVehicle] = await connection.query({
        sql: `
        UPDATE material m, vehicle v SET m.location_idlocation = ${idlocation}, v.location_idlocation = ${idlocation}
        WHERE v.idvehicle = ${idvehicle}
        AND m.vehicle_idvehicle = ${idvehicle};
        `, values: [idlocation, idvehicle]
      })
      await connection.end();
      return 

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch project.');
    }
  }

  

