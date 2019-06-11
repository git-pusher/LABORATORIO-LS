const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const Ctrl = require('./controllers/pacienteCRUD.js');
const { Paciente } = require('./models/Paciente');
//const cors = require('cors');

const app = express();
//app.use(cors());
app.use(bodyparser.urlencoded({ extended : true}));
app.use(bodyparser.json());

//USUARIO
//CONTRASEÑA
const PORT = process.env.PORT || 3001;

//const URL_MONGO = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-ijbr8.mongodb.net/test?retryWrites=true`;
const URL_MONGO =  'mongodb+srv://karen:ABZWO1RKXRt6A2K4@laboratorio-pdxyp.mongodb.net/test?retryWrites=true&w=majority';

console.log("LOG: ", URL_MONGO);

mongoose.connect(URL_MONGO, { useNewUrlParser: true}, (err) => {
    if(err){
        console.log("Ocurrió un error inesperado", err);
    } else {
        console.log("Conexión exitosa");
        
    }
});

app.get('/pacientes', (req, res) => {
    Ctrl.paciente.mostrarPacientes()
    .then(pacientes => {
        if(!pacientes){
            console.log("No hay pacientes que mostrar");
            res.send({mensaje: 'No hay pacientes que mostrar'});
        }else{
        console.log("Pacientes: ", pacientes);
        res.send(pacientes).status(200);
        }
    }).catch(err => {
        console.log("Error", err);
        res.status(500).send({ mensaje: 'Algo salió mal'});
    })
});

app.get('/pacientes', (req, res) => {
    const objPaciente = req.body;
    //
})


app.listen(PORT, () => {
    console.log("Puerto: " + PORT);
    
})
