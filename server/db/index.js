import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: '193.203.168.53',
    user: 'u520834844_admin',
    password: '[O4D&q!d',
    database: 'u520834844_prueba',
});

export const sql = async ({query, values}) => {
    const [rows] = await pool.query(query, values);
    
    return rows;
}