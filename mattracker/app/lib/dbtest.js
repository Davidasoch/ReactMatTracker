// Get the client
import mysql from 'mysql2/promise';


export async function calldata({query, values}){
    const connection = await mysql.createConnection({
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
    })

    try {
        const [results, fields] = await connection.query(query, values);
        return results
        //console.log(results); // results contains rows returned by server
        //console.log(fields); // fields contains extra meta data about results, if available
      } catch (err) {
        console.log(err);
      }


}
// Create the connection to database

