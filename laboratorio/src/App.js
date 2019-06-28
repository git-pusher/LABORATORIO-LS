import React from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Medico from './components/medico/Medico';
import ListaMedicos from './components/listaMedicos/ListaMedicos';
import EditarMedico from './components/editarMedico/EditarMedico';
import Paciente from './components/paciente/Paciente';
import ListaPacientes from './components/listaPacientes/ListaPacientes';
import EditarPaciente from './components/editarPaciente/EditarPaciente';
import ListaCitas from './components/listaCitas/ListaCitas';
import DetallesCita from './components/detallesCita/DetallesCita';
import Cita from './components/cita/Cita';
import EditarCita from './components/editarCita/EditarCita';

import Layout from './components/Layout';
import Laboratorio from './pages/Laboratorio';
import Inicio from './pages/inicio/inicio';
import Registrar from './components/registro/Registrar';


function App() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Switch>              
              <Route exact path="/" component={Laboratorio}/>
              <Route path="/ListaMedicos" component={ListaMedicos}/>
              <Route path="/Medicos" component={Medico}/>
              <Route path="/EditarMedico/:id" component={EditarMedico}/>
              <Route path="/ListaPacientes" component={ListaPacientes}/>
              <Route path="/Pacientes" component={Paciente}/>
              <Route path="/ListaCitas" component={ListaCitas}/>
              <Route path="/EditarPaciente/:id" component={EditarPaciente}/>
              <Route path="/Cita" component={Cita}/>
              <Route path="/sesion" component={Inicio}/>
              <Route path="/registro" component={Registrar}/>
              <Route path="/DetallesCita/:id" component={DetallesCita}/>
              <Route path="/EditarCita/:id" component={EditarCita}/>
           </Switch>
          </Layout>
        </Router>
      </div>
    );
}

export default App;