import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';



const App = () => {
	
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [apellido, cambiarApellido] = useState({campo: '', valido: null});
	const [numeroidentificacion, cambiarNumeroIdentificacion] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
	const [tipoencomienda, cambiarTipoEncomienda] = useState({campo: '', valido: null});
	const [direccionrecogida, cambiarDireccionRecogida] = useState({campo: '', valido: null});
	const [departamento,cambiarDepartamento]=useState({campo: '', valido: null});
	const [ciudad,cambiarCiudad]=useState({campo: '', valido: null});	
	const [fechayhora,cambiarFechayHora]=useState({campo: '', valido: null});	
	const [longitud,cambiarLongitud]=useState({campo: '', valido: null});
	const [peso,cambiarPeso]=useState({campo: '', valido: null});
	const [direccionentrega, cambiarDireccionEntrega] = useState({campo: '', valido: null});
	const [ciudadentrega,cambiarCiudadEntrega]=useState({campo: '', valido: null});
	const [datosdestinatario, cambiarDatosDestinatario] = useState({campo: '', valido: null});
	const [identificaciondestinatario, cambiarIdentificacionDestinatario] = useState({campo: '', valido: null});



	/* const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null}); */	
	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		numeroidentificacion:/^\d{7,14}$/,
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/, // 7 a 14 numeros.
		tipoencomienda:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		direccionrecogida: /^[a-zA-ZÀ-ÿ\s]{1,40}/,
		departamento:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		ciudad:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		fechayhora: /^[a-zA-ZÀ-ÿ\s]{1,40}/, 
		longitud: /^\d{1,3}$/,
		peso:/^\d{1,3}$/,
		direccionentrega:/^[a-zA-ZÀ-ÿ\s]{1,40}/,
		ciudadentrega:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		datosdestinatario:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		identificaciondestinatario:/^\d{7,14}$/,


		/* password: /^.{4,12}$/, // 4 a 12 digitos. */
		
	}

	/* const validarPassword2 = () => {
		if(password.campo.length > 0){
			if(password.campo !== password2.campo){
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'true'}
				});
			}
		}
	} */

	const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			
			nombre.valido === 'true' &&
			apellido.valido === 'true' &&
			numeroidentificacion === 'true' &&
			correo.valido === 'true' &&
			telefono.valido === 'true' &&
			tipoencomienda.valido === 'true' &&
			direccionrecogida.valido === 'true' &&
			departamento.valido === 'true' &&
			ciudad.valido === 'true' &&
			fechayhora.valido ==='true' &&
			longitud.valido ==='true' &&
			peso.valido === 'true' &&
			direccionentrega.valido === 'true' &&
			ciudadentrega.valido === 'true' &&
			datosdestinatario.valido === 'true' &&
			identificaciondestinatario.valido === 'true' &&



			/* password.valido === 'true' &&
			password2.valido === 'true' && */
			
			terminos
		){
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
			cambiarApellido({campo: '', valido: null});
			cambiarNumeroIdentificacion({campo: '', valido: null});
			cambiarCorreo({campo: '', valido: null});
			cambiarTelefono({campo: '', valido: null});
			cambiarTipoEncomienda({campo: '', valido: null});
			cambiarDireccionRecogida({campo: '', valido: null});
			cambiarDepartamento({campo: '', valido: null});
			cambiarCiudad({campo: '', valido: null});
			cambiarFechayHora({campo: '', valido: null});
			cambiarLongitud({campo: '', valido: null});
			cambiarPeso({campo: '', valido: null});		
			cambiarDireccionEntrega({campo: '', valido: null});	
			cambiarCiudadEntrega({campo: '', valido: null});
			cambiarDatosDestinatario({campo: '', valido: null});	
			cambiarIdentificacionDestinatario({campo: '', valido: null});	



			/* cambiarPassword({campo: '', valido: null});
			cambiarPassword2({campo: '', valido: 'null'}); */
			
			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

	return (
		<main>
			<Formulario action="" onSubmit={onSubmit}>
				
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre"
					placeholder=""
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					tipo="text"
					label="Apellido"
					placeholder=""
					name="apellido"
					leyendaError="El apellido solo puede contener letras y espacios."
					expresionRegular={expresiones.apellido}
				/>
				<Input
					estado={numeroidentificacion}
					cambiarEstado={cambiarNumeroIdentificacion}
					tipo="text"
					label="Numero de Identificacion"
					placeholder=""
					name="Numero de Identificacio"
					leyendaError="El numero de identificacion solo puede contener numeros ."
					expresionRegular={expresiones.numeroidentificacion}
				/>

				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder=""
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="text"
					label="Teléfono"
					placeholder=""
					name="telefono"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
				/>
				<Input
					estado={tipoencomienda}
					cambiarEstado={cambiarTipoEncomienda}
					tipo="text"
					label="Tipo de Encomienda"
					placeholder=""
					name="tipoencomienda"
					leyendaError=""
					expresionRegular={expresiones.tipoencomienda}
				/>
				<Input
					estado={direccionrecogida}
					cambiarEstado={cambiarDireccionRecogida}
					tipo="text"
					label="Dirección de Recogida"
					placeholder=""
					name="DirecciónRecogida"
					leyendaError="La direccion e recogida solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.direccionrecogida}
				/>
				 <Input

					estado={departamento}
					cambiarEstado={cambiarDepartamento}
					tipo="text"
					label="Departamento"
					placeholder=""
					name="Departamento"
					leyendaError="Los departamento solo puede contener letras."
					expresionRegular={expresiones.departamento}
				/>
				<Input
					estado={ciudad}
					cambiarEstado={cambiarCiudad}
					tipo="text"
					label="Ciudad"
					placeholder=""
					name="Ciudad"
					leyendaError="La ciudad solo puede contener letras."
					expresionRegular={expresiones.ciudad}
				/>
				<Input
					estado={fechayhora}
					cambiarEstado={cambiarFechayHora}
					tipo="text"
					label="Fecha y Hora"
					placeholder=""
					name=""
					leyendaError="La fecha y hora solo puede contener numeros."
					expresionRegular={expresiones.fechayhora}
				/>
				<Input
					estado={longitud}
					cambiarEstado={cambiarLongitud}
					tipo="text"
					label="Longitud"
					placeholder=""
					name=""
					leyendaError="La longitud solo puede contener numeros."
					expresionRegular={expresiones.longitud}
				/>
				<Input
					estado={peso}
					cambiarEstado={cambiarPeso}
					tipo="text"
					label="Peso"
					placeholder=""
					name=""
					leyendaError="El peso solo puede contener numeros."
					expresionRegular={expresiones.peso}
				/>
				<Input
					estado={direccionentrega}
					cambiarEstado={cambiarDireccionEntrega}
					tipo="text"
					label="Dirección de Entrega"
					placeholder=""
					name="DirecciónEntrega"
					leyendaError="La direccion de entrega solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.direccionentrega}

				/>
				<Input
					estado={ciudadentrega}
					cambiarEstado={cambiarCiudadEntrega}
					tipo="text"
					label="Ciudad de Entrega"
					placeholder=""
					name="CiudadEntrega"
					leyendaError="La ciudad solo puede contener letras."
					expresionRegular={expresiones.ciudadentrega}
				/>
				<Input
					estado={datosdestinatario}
					cambiarEstado={cambiarDatosDestinatario}
					tipo="text"
					label="Nombres y Apellidos del Destinatario"
					placeholder=""
					name="datosdestinatario"
					leyendaError="los datos del destinatario solo puede contener letras y espacios."
					expresionRegular={expresiones.datosdestinatario}
				/>
				<Input
					estado={identificaciondestinatario}
					cambiarEstado={cambiarIdentificacionDestinatario}
					tipo="text"
					label="Numero de Identificacion del Destinatario"
					placeholder=""
					name="Numero de Identificacion"
					leyendaError="El numero de identificacion solo puede contener numeros."
					expresionRegular={expresiones.identificaciondestinatario}
				/>
				
				{/* <Input
					estado={password}
					cambiarEstado={cambiarPassword}
					tipo="password"
					label="Contraseña"
					name="password1"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={expresiones.password}
				/>
				<Input
					estado={password2}
					cambiarEstado={cambiarPassword2}
					tipo="password"
					label="Repetir Contraseña"
					name="password2"
					leyendaError="Ambas contraseñas deben ser iguales."
					funcion={validarPassword2}
				/> */}
				
				<ContenedorTerminos>
					<Label>								
						<input 
							type="checkbox"
							name="terminos"
							id="terminos"
							checked={terminos} 
							onChange={onChangeTerminos}
						/>
						Acepto los Terminos y Condiciones
					</Label>
				</ContenedorTerminos>
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
	);
}
 
export default App;