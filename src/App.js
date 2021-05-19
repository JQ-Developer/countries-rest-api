import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
