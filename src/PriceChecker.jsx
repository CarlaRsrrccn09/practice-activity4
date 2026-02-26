import { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";
import BillingDetails from "./BillingDetails";

function PriceChecker() {

  const [billingData, setBillingData] = useState(null);

  useEffect(() => {
    document.title = "Price Checker";
  }, []);

  const handleCalculate = (data) => {
    setBillingData(data);
  };

  const handleReset = () => {
    setBillingData(null);
  };

  return (
    <div className="container">
      <h2 className="page-title">Price Checker</h2>

      <div className="card">
        <ProductDetails 
          onCalculate={handleCalculate}
          onReset={handleReset}
        />
      </div>

      <div style={{height:12}} />

      <div className="card">
        {billingData ? (
          <BillingDetails data={billingData} />
        ) : (
          <div className="muted">No billing details yet.</div>
        )}
      </div>
    </div>
  );
}

export default PriceChecker;
