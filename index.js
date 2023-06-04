const express = require("express");

const app = express();

const PORT = 3000;

const router = require('./router');

const db = require('./db');

app.use(express.json());

app.use(router);


db.then(
    ()=>{
        app.listen(PORT, () => {
            console.log(`Servidor levantado en el puerto ${PORT}`)
        })
    }
)
.catch(
    error => console.error(`Ha habido un error conectandose a la base de datos`, error)
)
