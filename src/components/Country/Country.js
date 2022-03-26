import React from 'react';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Country.css';

const NextIcon = styled(ArrowForwardOutlinedIcon)`
    height: 20%;
    width: 20%;
    border-radius: 50%;
    border: 1px solid white;
    position: absolute;
    right: 5px;

    svg{
      color: white;
      background-color: red;
    }
`;

const CountryName = styled.h2`
  font-size: 15px;
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  z-index: 1;
  color: white;
`;

const Country = (props) => {
  const { country } = props;
  return (
    <div className="country-container">
      <Link to={`/details/${country}`}>
        <NextIcon>
          <ArrowForwardOutlinedIcon />
        </NextIcon>
      </Link>
      <CountryName>{country}</CountryName>
    </div>
  );
};

export default Country;
