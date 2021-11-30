const Total = ({ lineItems }) => {
  const valores = lineItems.map(item => item.quantity * item.unitPrice);
  const valorTotal = valores.reduce((prev, curr) => prev + curr, 0);

  return (
    <div>
      <p>
        Total <span>${valorTotal}</span>
      </p>
    </div>
  );
};

export default Total;
