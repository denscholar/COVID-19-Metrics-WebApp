import Country from '../Country/Country';
import './Countries.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Countries = (props) => {
  const { allCountries } = props;
  return (
    <div className="country-list">
      {allCountries.map((country) => (
        <Country
          key={country.country}
          country={country.country}
        />
      ))}
    </div>
  );
};

export default Countries;
