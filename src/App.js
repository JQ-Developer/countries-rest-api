import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((listCountries) => this.setState({ countries: listCountries }));
  }

  render() {
    const { countries, searchField } = this.state;

    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Where in the world?</h1>

        <SearchBox
          placehoder="Search for a country..."
          handleChange={this.handleChange}
        />

        <CardList countries={filteredCountries} />
      </div>
    );
  }
}

export default App;

//Probado 
//Probando de nuevo