import { useState, useEffect } from 'react';
import classes from './Cliente.module.css';

const Cliente = () => {
  const [clientes, setClientes] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [datosCliente, setDatosCliente] = useState(null);

  useEffect(() => {
    const getClientes = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json(response);
      setClientes(data);
    };

    getClientes();
  }, []);

  useEffect(() => {
    const datos = clientes.find(cliente => cliente.id === +clienteSeleccionado);
    console.log(clienteSeleccionado);
    setDatosCliente(datos);
  }, [clienteSeleccionado]);

  return (
    <div className={classes['seccion-cliente']}>
      <h2>Cliente:</h2>
      <form className={classes['form-cliente']}>
        <div>
          <label>Nombre / Razón Social:</label>
          <select
            name="cliente"
            value={clienteSeleccionado}
            onChange={e => {
              setClienteSeleccionado(e.target.value);
            }}
          >
            <option value="">-- Seleccione --</option>
            {clientes.map(cliente => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.name}
              </option>
            ))}
          </select>
        </div>
        {datosCliente && (
          <>
            <div>
              <label htmlFor="direccion">Dirección:</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={datosCliente.address.street}
              />
            </div>
            <div>
              <label htmlFor="id">ID:</label>
              <input type="text" id="id" name="id" value={datosCliente.id} />
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Cliente;
