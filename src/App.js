import { useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchingData } from "./utils/utils";
import { CountriesContext } from "./components/providers/countries.provider";

import Homepage from "./pages/homepage/homepage.component";
import ViewPage from "./pages/view/view.component";
import HeaderComponent from "./components/header/header";

import "./App.css";

function App() {
  const { setEntireList, setIsLoading } = useContext(CountriesContext);

  useEffect(() => {
    (async () => {
      //fetching data
      const data = await fetchingData();

      //setting the list of countries
      setEntireList(data);
      //setting loading state
      setIsLoading(false);
    })();
  }, [setEntireList, setIsLoading]);

  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/:country" component={ViewPage} />
      </Switch>
    </div>
  );
}

export default App;
