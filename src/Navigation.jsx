import { Link, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav className="site-nav">
        <div className="container">
          <Link to="/">Home</Link>
          <Link to="/price-checker">Price Checker</Link>
        </div>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Navigation;