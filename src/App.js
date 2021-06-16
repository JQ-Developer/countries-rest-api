import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import ViewPage from "./pages/view/view.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/view/:country" component={ViewPage} />
      </Switch>
    </div>
  );
}

export default App;
