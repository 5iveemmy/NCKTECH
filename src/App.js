import "./App.css";
import Body from "./Body";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Body />
      </Router>
    </>
  );
}

export default App;
