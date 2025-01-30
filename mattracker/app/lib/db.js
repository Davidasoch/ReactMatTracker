import mysql from "mysql2/promise";

export async function calldata({ query, values}) {
    const dbconnection = await mysql.createConnection({
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    })


try {
    const [results, fields] = await dbconnection.execute(query, values);
    dbconnection.end()
    return results
    }   catch (error) {
        throw Error(error.message)
    }
}