import * as React from 'react';

interface Country {
  name: string;
  url: string;
  continent: string;
  continentCode: number;
  iso: string;
  administrativeRegion?: boolean;
  businessRegion?: boolean;
  adminRegion?: boolean;
  streets?: number;
}

interface Continent {
  name: string;
  countries: Country[];
}

const Metrics: React.FC = () => {
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

  const totalCountries = continents.reduce((acc, continent) => acc + continent.countries.length, 0);
const administrativeRegions = continents.reduce((acc, continent) => {
  const regionCount = continent.countries.filter(country => country.administrativeRegion).length;
  return acc + regionCount;
}, 0);
  const streets = continents.reduce((acc, continent) => acc + continent.countries.reduce((acc, country) => acc + (country.streets || 0), 0), 0);
  const adminRegions = continents.reduce((acc, continent) => acc + continent.countries.filter(country => country.adminRegion).length, 0);

  return (
    <div className='mt-9'>
    <h3><strong>DataSet</strong> Content</h3>
       
         <hr className="mb-4" />
      <ul>
        <li>
         <h3>Countries: {totalCountries}</h3>
        </li>
        <li className="mb-3 mt-3 h-7 bg-gray-200">
         <h3> Administrative Regions: {administrativeRegions}</h3>
        </li>
        <li>
          <h3>Streets: {streets}</h3>
        </li>
        <li className="mb-3 mt-3 h-7 bg-gray-200" >
           <h3> Business & admin:{adminRegions}</h3> 
        </li>
      </ul>
    </div>
  );
};

export default Metrics;