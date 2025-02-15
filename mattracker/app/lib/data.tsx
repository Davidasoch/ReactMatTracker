'use server'
import { getConnection } from "@/app/lib/db"
import { Material, Project, Vehicle, Register } from '@/app/lib/definitions';

//Project functions

//Retrieve all projects
export async function fetchProject() {
    try {
 
      const  connection = await getConnection() 
      const [results] = await connection.query<Project[]>({
        sql: `
          SELECT * FROM project;
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
          SELECT material.idmaterial, material.name, material.state, material.vehicle_idvehicle, material.location_idlocation
           FROM list_has_material
          INNER JOIN material ON list_has_material.material_idmaterial=material.idmaterial AND list_has_material.list_idlist=${id};
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


  //Vehicle functions

  //retriev all vehicles
  export async function fetchVehicle() {
    try {
 
      const  connection = await getConnection() 
      const [results] = await connection.query<Vehicle[]>({
        sql: `
          SELECT * FROM vehicle;
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

