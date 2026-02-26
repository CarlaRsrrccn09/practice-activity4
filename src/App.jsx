import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import PriceChecker from "./PriceChecker";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="price-checker" element={<PriceChecker />} />
      </Route>
    </Routes>
  );
}

export default App;