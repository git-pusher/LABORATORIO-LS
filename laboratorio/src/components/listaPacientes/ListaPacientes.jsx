import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';
import { NavLink } from 'react-router-dom';

//import './listaPaciente.css';
import '../../App.css';

class ListaPacientes extends Component {

    constructor(props){
        super(props);
        this.state= {
            request: true,
            pacientes: [],
            error: ''
        }
    }
    
    componentDidMount(){
        this.getPacientes();
    }

    getPacientes = () => {
        console.log("URL: ", API_URL + 'pacientes');
        axios.get(API_URL + 'pacientes')
        .then(res => {
            console.log("Lista Pacientes: ", res.data);
            this.setState({ pacientes: res.data, request: false });
        }).catch(err => {
            this.setState({error: err, request: false });
        });
    }

    pintarPacientes = () => {
        if(this.state.error){
            return(
                <div>
					<p className="text-danger">Ocurrió un error inesperado</p>
					<p>{this.state.error}</p>
				</div>
            );
        }

        return this.state.pacientes.length ? this.state.pacientes.map(pct => {
            return(
                    <tr key={pct._id}>
                        <th></th>
                        <td>{pct.nombre} {pct.apellidoPaterno} {pct.apellidoMaterno}</td>
                        <td>{pct.fechaNacimiento}</td>
                        <td>{pct.correoElectronico}</td>
                        <td>{pct.telefono}</td>
                        <td>{pct.direccion}</td>
                        <td>
                            <NavLink to={`/EditarPaciente/${pct._id}`}>
                                <button className="btn accionEditar">
                                    <MaterialIcon icon="create" className="material-icons"></MaterialIcon>
                                    Editar
                                </button>
                            </NavLink>
                        </td>
                        <td>
                            <button className="btn accionDesactivar" type="submit">
                                <MaterialIcon icon="toggle_off" className="material-icons"></MaterialIcon>
                                Desactivar
                            </button>
                        </td>
                        <td>
                            <button className="btn accionCitas">
                                <MaterialIcon icon="list_alt" className="material-icons"></MaterialIcon>
                                Citas
                            </button>
                        </td>
                    </tr>	
            );
        }) : <div className="cardCentrado">
                <div className="row md-12 card">
                    <div className="cardBorder card-body">
                        <b><h3 className="centrarTexto">No hay datos para mostrar</h3></b>
                    </div>
                </div>
            </div>
    }

    formPacientes = () => {
        this.props.history.push('/pacientes'); 
    }

    render(){
        return(
            <div className="row md-12 contenedor">
                 <div className="row md-12 containerForm">
                    <button className="nuevo btn" onClick={this.formPacientes}>
                        <MaterialIcon icon="add" className="material-icons"></MaterialIcon>
                        Nuevo Paciente
                    </button>
                </div>
                <table className="table">
                <thead>
                    <tr>
                    <th ></th>
                    <th >Nombre Completo</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Correo Electrónico</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                    <th ></th>
                    <th >Acciones</th>
                    <th ></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.request ? <tr><td>Cargando...</td></tr> : this.pintarPacientes()}
                </tbody>
                </table>
            </div>
            );
    }
    
}

export default ListaPacientes;