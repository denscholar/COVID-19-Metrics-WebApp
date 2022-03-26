import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import Countries from '../../components/Countries/Countries';
import SearchInput from '../../components/SearchInput/SearchInput';
import HeroPage from '../../components/HeroPage/HeroPage';
import { getCountryCases } from '../../redux/covid/Covid';

const Home = () => {
  const [search, setSearch] = useState('');
  const allCountries = useSelector((state) => state.covid);
  const dispatch = useDispatch();
  const id = uuidv4();

  const fetchCoutries = async () => {
    const res = await fetch('https://disease.sh/v3/covid-19/countries');
    const data = await res.json();
    const countries = data.map((country) => ({ ...country, id }));
    dispatch(getCountryCases(countries));
  };

  const filterCountry = allCountries.filter((country) => country.country.toLowerCase()
    .includes(search.toLowerCase()));

  useEffect(() => {
    if (!allCountries.length) {
      fetchCoutries();
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div>
      <HeroPage />
      <SearchInput placeholder="Search country cases" onChange={handleChange} />
      <Countries allCountries={filterCountry} />
    </div>
  );
};

export default Home;
