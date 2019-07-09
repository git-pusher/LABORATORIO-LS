import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../constants';
import MaterialIcon from 'material-icons-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

// import local-auth from '../../.././../API/passport/local-auth';
const passport = require('passport'); 
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');

class Registrar extends Component {
    constructor(props) {
        super(props);
        // nombre, nombreUsuario, password
		this.state = {
        }
    }


    guardar = (e) => {
        e.preventDefault();
        console.log('Guardando registro...');
        axios.post(API_URL+'registros/', this.state)
            .then(registro => {
            toast.success(`Registro correcto del usuario "${this.state.nombre}"`);
            // Limpiar el formulario
            console.log('Usuario registrado correctamente: ', registro);
            this.listaRegistros();
            }).catch(err => {
                toast.error('Registro no realizado. Inténtalo nuevamente.')
            console.log("Ocurrió un error", err);
            });
    //   }
    }


//     passport.authenticate('local-singnup', {
//         successRedirect: '/',
//         failureRedirect: '/registrar',
//         passReqToCallback: true
//     }
    
    
//     // this.listaRegistros();
// ))}; 


    
    cambio = (event) => {
        const {id, value} = event.target;
        this.setState({ [id]: value} )
        console.log(this.state);
    }

    listaRegistros = ()=>{
        this.props.history.push('/ListaRegistros'); 
      }

    render () {
        return (
            <div className="contenedor">
                <ToastContainer
                    position="bottom-center"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    // closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
                 <form className="" onSubmit={this.guardar}>
                    {/* <form action="/registros" method="POST"> */}
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="n">Nombre</label>
                                <input type="text" onChange={this.cambio} className="form-control" name="nombre" id="nombre" aria-describedby="emailHelp" placeholder="Introduzca un nombre"/>
                                <small id="emailHelp" className="form-text text-muted">Puede ser cualquier nombre corto para identificarlo.</small>
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="nombre-usuario">Nombre de usuario</label>
                                <input type="email" onChange={this.cambio} className="form-control" name="nombreUsuario" id="nombreUsuario" aria-describedby="emailHelp" placeholder="Ejemplo: correo@algo.com"/>
                                <small id="emailHelp" className="form-text text-muted">Introducir su correo electrónico.</small>
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="contrasenia">Contraseña</label>
                                <input type="password" onChange={this.cambio} className="form-control" name="password" id="password" placeholder="Introducir contraseña"/>
                            </div>                            
                            <div className="form-group col-md-12">
                                <label htmlFor="cContrasenia">Verificar contraseña</label>
                                <input type="password" className="form-control" id="cPassword" placeholder="Verificar la contraseña"/>
                                {/* <input type="hidden" value="sdopkfpdso" className="form-control" id="hash" placeholder="Verificar la contraseña"/> */}
                            </div>                            
                        </div>
                        <div className="form-row">
                            <div className="containerForm form-group col-md-12">
                                <button type="submit" className="btn btn-primary accionGuardar" >
                                    <MaterialIcon icon="done" className="material-icons"></MaterialIcon>
                                    Registrar
                                </button>
                                <Link to="/sesion" className="btn accionCancelar">
                                    <MaterialIcon icon="close" className="material-icons"></MaterialIcon>
                                    Cancelar
                                </Link>
                            </div>
                        </div>                                                                            
                    </form>
            </div>                 
                      
        );
    }
}

export default Registrar;