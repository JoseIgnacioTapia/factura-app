import { useRef, useState } from 'react';
import InvoiceLineItems from './components/InvoiceLineItems';

const lineItem = (description = '', quantity = 1, unitPrice = 1) => ({
  description,
  quantity,
  unitPrice,
});

function App() {
  const [lineItems, setLineItems] = useState([lineItem()]);

  const addLineItem = () => {
    setLineItems([...lineItems, lineItem()]);
  };

  return (
    <div>
      <h1>Factura</h1>
      <InvoiceLineItems lineItems={lineItems} setLineItems={setLineItems} />

      <button type="button" onClick={addLineItem}>
        Agregar Item
      </button>
    </div>
  );
}

export default App;
