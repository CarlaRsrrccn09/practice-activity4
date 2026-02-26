import { useEffect } from "react";

function HomePage() {

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="container">
      <h2 className="page-title">Home Page</h2>

      <h3>Conditional Rendering</h3>
      <p className="muted">
        Conditional Rendering allows us to show or hide components
        based on a condition using if statements or ternary operators.
      </p>

      <h3>useEffect</h3>
      <p className="muted">
        useEffect is a React Hook that runs side effects in a component,
        like updating the document title or fetching data.
      </p>

      <h3>Routing Components</h3>
      <p className="muted">
        BrowserRouter wraps the application.
        Routes contains all Route components.
        Route defines the path and component.
        Link is used for navigation.
      </p>
    </div>
  );
}

export default HomePage;