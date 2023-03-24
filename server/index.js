const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "portifolio",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { titulo } = req.body;
    const { lang } = req.body;
    const { data } = req.body;

    let SQL = "INSERT INTO projetos ( titulo, lang, data ) VALUES (?,?,?)";

    db.query(SQL, [titulo, lang, data], (err, result) => {
        console.log(err)
    })
})

app.get("/getCards", (req, res) => {
    let SQL = "SELECT * from projetos";

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})

app.listen(3001, () => {
    console.log("Rodando servidor")
});


