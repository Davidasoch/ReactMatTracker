import mysql from 'mysql2/promise';

// Create the connection to database
export async function getConnection() {
    const connection = await mysql.createConnection({
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
    })

    return connection
}



