const { createPool } = require('mysql2');
const pool = createPool({
    host:'localhost',
    user: 'root',
    password: '39uokjerwfio32uewjod',
    database: 'company_database',
    connectionLimit: 10
})
/*
pool.query('select * from client', (err, result, fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})*/

const button = document.getElementById('.sqlqButton');
console.log(button);