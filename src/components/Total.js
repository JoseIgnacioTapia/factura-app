import classes from './Total.module.css';

const Total = ({ lineItems }) => {
  const valores = lineItems.map(item => item.quantity * item.unitPrice);
  const valorTotal = valores.reduce((prev, curr) => prev + curr, 0);

  return (
    <div className={classes.total}>
      <p>
        Total <span>${valorTotal.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default Total;
