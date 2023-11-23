const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Aryan@2021',
    database: 'employee',
});

app.post('/create', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const salary = req.body.salary;

    db.query('INSERT INTO employees (NAME, AGE, COUNTRY, POSITION, SALARY) VALUES(?,?,?,?,?)', [name, age, country, position, salary], (err, result)=> {
        if (err) {
            console.log(err)
        } else{
            res.send("Values Inserted");
        }
    });
});

app.get('/employees', (req, res) =>{
    db.query('SELECT * FROM employees', (err, result)=>{
        if(err){
            console.log(err);
        } else{
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("your server is running");
}); 