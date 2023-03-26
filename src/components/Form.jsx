import React, { useState } from 'react';
import './form.css';

const Formulario = ({actualizarDatos}) => {
    const [comprador, setComprador] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        direccion: '',
    });
    const [enviado, setEnviado] = useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;

        if(name === 'correcoConfirmado') {
            if (value === comprador.correo) {
                setComprador({
                    ...comprador,
                    correoConfirmado: value
                });
            }
        } else {
            setComprador({
                ...comprador,
                [name]: value
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setEnviado(true);
        actualizarDatos(comprador);
    };

    if (enviado) {
        return <p>¡Gracias por su compra!</p>;
    }

    return (
        <>
        <h2> Ingresa tus datos y presiona aceptar</h2>
        <form onSubmit={handleSubmit} className="form">
        <label>
            Nombre:
            <input type="text" name="nombre" value={comprador.nombre} onChange={handleChange} />
        </label>
        <label>
            Correo:
            <input type="email" name="correo" value={comprador.correo} onChange={handleChange} />
        </label>
        <label>
            Confirmar correo:
        <input type="email" name="correoConfirmado" value={comprador.correoConfirmado} onChange={handleChange} />
        </label>
        <label>
            Teléfono:
            <input type="tel" name="telefono" value={comprador.telefono} onChange={handleChange} />
        </label>
        <label>
            Dirección:
            <input type="text" name="direccion" value={comprador.direccion} onChange={handleChange} />
        </label>
        <button type="submit">Aceptar</button>
        </form>
        </>
    );
};

export default Formulario;
