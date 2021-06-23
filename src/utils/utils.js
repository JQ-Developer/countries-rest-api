//Fetching data from Countries API
export const fetchingData = async function () {
  const list = await fetch("https://restcountries.eu/rest/v2/all").then(
    (response) => response.json()
  );

  return list;
};

//Filtering countries by searching input
export const filteringCountries = function (countries, searchField) {
  return countries.filter((country) =>
    country.name.toLowerCase().includes(searchField.toLowerCase())
  );
};
//Filtering countries by region
export const filteringCountriesByRegion = function (countries, region) {
  if (region === "All") return countries;
  const data = countries.filter((country) => country.region === region);
  return data;
};

//Retiving name from border code
export const borderNames = (showCountry, entireList) => {
  const borders = showCountry.borders;

  let borderCountries = [];

  for (let border of borders) {
    for (let countries of entireList) {
      if (border === countries.alpha3Code) borderCountries.push(countries.name);
    }
  }

  return borderCountries;
};
