import * as React from 'react';
import ReactCountryFlag from "react-country-flag";
interface Country {
  name: string;
  url: string;
  continent: string;
  continentCode: number;
  iso: string; 
  administrativeRegion:string;
  streets:number;
  businessRegion:string;
  adminRegion:string;
}

interface Continent {
  name: string;
  countries: Country[];
}

const CountryList: React.FC = () => {
  const [continents, setContinents] = React.useState<Continent[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/GeoPostcodes/technical-test/main/front-end/data/countries.json')
      .then(response => response.json())
      .then(data => {
        const continents: Continent[] = [];
        data.forEach((country: Country) => {
          const existingContinent = continents.find(continent => continent.name === country.continent);
          if (existingContinent) {
            existingContinent.countries.push(country);
          } else {
            continents.push({ name: country.continent, countries: [country] });
          }
        });
        setContinents(continents.sort((a, b) => a.countries[0].continentCode - b.countries[0].continentCode));
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div >
      {continents.map(continent => (
        <div className='mt-10'  key={continent.name}>
          <h2 className='text-xl ' >{continent.name}</h2>
          <hr className="mb-4" />
          <ul className='grid grid-cols-3 gap-4'>
            {continent.countries.map(country => (
              <li key={country.name} className=''>
                <ReactCountryFlag countryCode={country.iso} svg />
              
                <a href={`/data-explorer/${country.url}`}>{country.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CountryList;