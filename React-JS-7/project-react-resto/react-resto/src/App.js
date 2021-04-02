import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Front from "./Front/Front";
import Back from "./Back/Back";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Route path="/" component={Front} exact />
        <Route path="/admin" component={Back} />
        <Route path="/home" component={Front} />
      </Router>
    </div>
  );
}

export default App;
