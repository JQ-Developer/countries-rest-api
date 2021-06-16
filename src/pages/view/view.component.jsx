import { useContext } from "react";

import { CountriesContext } from "../../components/providers/countries.provider";

const ViewPage = () => {
  const { showCountry } = useContext(CountriesContext);

  return (
    <div>
      <p>Esta es la página de ver {showCountry.name} </p>
    </div>
  );
};

export default ViewPage;
