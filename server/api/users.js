import mysql from 'mysql2';

let query = null;

const connection = mysql.createConnection({
    host: '193.203.168.53',
    user: 'u520834844_admin',
    password: '[O4D&q!d',
    database: 'u520834844_prueba',
});

connection.connect();

connection.query('SELECT * FROM users', (err, rows) => {
    if (err) throw err;
    query = rows;
    console.log('Filas recuperadas:', rows);
});

connection.end();

export default defineEventHandler((event) => {
    return query;
})