import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';

import InvoiceLineItems from './components/InvoiceLineItems';
import Total from './components/Total';
import Layout from './components/Layout';
import Header from './components/Header';
import Cliente from './components/Cliente';

const lineItem = (description = '', quantity = 0, unitPrice = 0) => ({
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
      margin: 0,
      fileName: 'Invoice.pdf',
      image: { type: 'png', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    });
  };

  return (
    <>
      <Layout ref={printRef}>
        <Header />
        <Cliente />
        <form>
          <InvoiceLineItems lineItems={lineItems} setLineItems={setLineItems} />
          <Total lineItems={lineItems} />
        </form>
      </Layout>
      <button className="add-btn" type="button" onClick={addLineItem}>
        Agregar Item
      </button>
      <button onClick={handleSubmit}>
        Generar PDF
        <svg
          width="37"
          height="28"
          class="w-6 h-6"
          fill="#E3C66C"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          ></path>
        </svg>
      </button>
    </>
  );
}

export default App;
