import classes from './InvoiceLineItems.module.css';

const InvoiceLineItems = ({ lineItems, setLineItems }) => {
  const handleLineItemChange = (event, index) => {
    setLineItems([
      ...lineItems.slice(0, index),
      {
        ...lineItems[index],
        [event.target.name]: event.target.value,
      },
      ...lineItems.slice(index + 1),
    ]);
  };

  const removeLineItem = index => {
    setLineItems([...lineItems.slice(0, index), ...lineItems.slice(index + 1)]);
  };

  return (
    <div>
      <div>
        <tr>
          <span>
            <label>Cantidad</label>
          </span>
          <span>
            <label>Descripción</label>
          </span>
          <span>
            <label>Precio Unitario</label>
          </span>
          <span>
            <label>Importe</label>
          </span>
        </tr>
      </div>
      <div>
        {lineItems.map((lineItem, index) => {
          const { description, unitPrice, quantity } = lineItem;

          const importe = (unitPrice * quantity).toFixed(2);

          return (
            <div
              key={`invoiceLine-${index}`}
              className={classes['line-inputs']}
            >
              <span>
                <input
                  name="quantity"
                  placeholder="Cantidad"
                  type="number"
                  value={quantity === 0 ? '' : quantity}
                  onChange={event => {
                    handleLineItemChange(event, index);
                  }}
                />
              </span>
              <span>
                <input
                  name="description"
                  placeholder="descripción"
                  type="text"
                  value={description}
                  onChange={event => {
                    handleLineItemChange(event, index);
                  }}
                  type="text"
                />
              </span>
              <span>
                <input
                  name="unitPrice"
                  placeholder="Precio Unitario"
                  type="number"
                  vaue={unitPrice}
                  onChange={event => {
                    handleLineItemChange(event, index);
                  }}
                />
              </span>
              <span className={classes.importe}>
                ${quantity === 1 ? '0' : importe}
              </span>
              {lineItems.length > 1 && (
                <button
                  className={classes['btn-delete']}
                  type="button"
                  onClick={() => removeLineItem(index)}
                >
                  X
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InvoiceLineItems;
