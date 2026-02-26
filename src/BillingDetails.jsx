function BillingDetails({ data }) {
  if (!data) return null;

  return (
    <div>
      <h3>Billing Details</h3>
      <p><strong>Product:</strong> {data.product}</p>
      <p><strong>Unit Price:</strong> {data.price}</p>
      <p><strong>Quantity:</strong> {data.qty}</p>
      <p><strong>Total:</strong> {data.total}</p>
    </div>
  );
}

export default BillingDetails;
