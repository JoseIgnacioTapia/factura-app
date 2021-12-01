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
      <form>
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
        {datosCliente && (
          <>
            <label htmlFor="direccion">Dirección:</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={datosCliente.address.street}
            />
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" name="id" value={datosCliente.id} />
          </>
        )}
      </form>
    </div>
  );
};

export default Cliente;
