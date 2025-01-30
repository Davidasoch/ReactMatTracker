import { calldata } from "@/app/lib/dbtest"
import { Project } from '@/app/lib/definitions';

//Project functions
export async function fetchProject() {
    try {
 
      const  data   = await  calldata({
        query: "SELECT * FROM project",
        values:  []
      }) 
      return data
    } catch (error) {
      //console.error('Database Error:', error);
      //throw new Error('Failed to fetch project data.');
    }
  }

  //Vehicle functions

  export async function fetchVehicle() {
    try {
 
      const  data   = await  calldata({
        query: "SELECT * FROM vehicle",
        values:  []
      }) 
      return data
    } catch (error) {
      //console.error('Database Error:', error);
      //throw new Error('Failed to fetch project data.');
    }
  }

  //Material functions

  export async function fetchMaterial() {
    try {
 
      const  data   = await  calldata({
        query: "SELECT * FROM material",
        values:  []
      }) 
      return data
    } catch (error) {
      //console.error('Database Error:', error);
      //throw new Error('Failed to fetch project data.');
    }
  }

  //Register functions

  export async function fetchRegister() {
    try {
 
      const  data   = await  calldata({
        query: "SELECT * FROM register",
        values:  []
      }) 
      return data
    } catch (error) {
      //console.error('Database Error:', error);
      //throw new Error('Failed to fetch project data.');
    }
  }

