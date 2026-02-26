import { useState } from "react";

function ProductDetails({ onCalculate, onReset }) {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = Number(price) * Number(qty);
    onCalculate({ product, price: Number(price), qty: Number(qty), total });
  };

  const handleReset = () => {
    setProduct("");
    setPrice(0);
    setQty(1);
    if (onReset) onReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Product: </label>
        <input value={product} onChange={(e) => setProduct(e.target.value)} />
      </div>
      <div className="form-row">
        <label>Unit Price: </label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="form-row">
        <label>Quantity: </label>
        <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} />
      </div>
      <div className="form-row">
        <button className="btn btn-primary" type="submit">Calculate</button>
        <button className="btn btn-ghost" type="button" onClick={handleReset} style={{marginLeft:8}}>Reset</button>
      </div>
    </form>
  );
}

export default ProductDetails;
