import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';

import InvoiceLineItems from './components/InvoiceLineItems';
import Total from './components/Total';
import Layout from './components/Layout';
import Header from './components/Header';
import Cliente from './components/Cliente';

const lineItem = (description = '', quantity = 1, unitPrice = 1) => ({
  description,
  quantity,
  unitPrice,
});

function App() {
  const [lineItems, setLineItems] = useState([lineItem()]);
  const printRef = useRef(null);

  const addLineItem = () => {
    setLineItems([...lineItems, lineItem()]);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!printRef.current) return;

    html2pdf(printRef.current, {
      margin: 1,
      fileName: 'Invoice.pdf',
      image: { type: 'png', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    });
  };

  return (
    <Layout ref={printRef}>
      <Header />
      <Cliente />
      <form>
        <InvoiceLineItems lineItems={lineItems} setLineItems={setLineItems} />
        <Total lineItems={lineItems} />
        <button type="button" onClick={addLineItem}>
          Agregar Item
        </button>
      </form>
      <button onClick={handleSubmit}>Descargar PDF</button>
    </Layout>
  );
}

export default App;
