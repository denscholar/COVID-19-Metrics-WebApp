import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountUp from 'react-countup';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Corona from '../../assets/corona.png';

const Card = styled.div`
    height: 11rem;
    min-width: 100%;
    background-color: #f31f46;
    border: 1px solid rgba(206, 204, 204, 0.144);
    position: relative;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    h3{
      color: white;
    }

`;

const Wrapper = styled(Container)`
    height: 20rem;
    background-color: black;
    opacity: 0.9;
    background: #726e6f url(${Corona});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 20px 10px;

`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    align-content: flex-start;
    padding: 10px 10px 0 0;
    div{
      margin-top: 5rem;
      h3{
        color: white;
      }
    }

`;

const Grid = styled.div`
    max-height: 100%;
   display: flex;
   flex-direction: column;
   ${Card}:nth-child(even){
     opacity: 0.9;
   }
`;

const CountryName = styled.h2`
  font-size: 3rem;
  text-align: right;
  color: white;

`;

const CountryDetails = () => {
  const param = useParams();
  const [country, setCountry] = useState([]);

  const fetchCountry = async () => {
    const res = await fetch(`https://disease.sh/v3/covid-19/countries/${param.name}`);
    const data = await res.json();
    setCountry(data);
  };

  useEffect(() => {
    if (param.name && param.name !== '') {
      fetchCountry();
    }
  }, [param.name]);
  return (
    <>
      <Wrapper fluid>
        <Row>
          <Col>
            <ImageWrapper>
              <div>
                <CountryName>{country.country}</CountryName>
                <h3>
                  Total Active Case:
                  {' '}
                  <CountUp
                    start={0}
                    end={country.active}
                    duration={2.75}
                    separator=","
                    style={{ color: 'white' }}
                  />
                </h3>
              </div>
            </ImageWrapper>
          </Col>
        </Row>
      </Wrapper>
      <Grid>
        <Card>
          <h3>Total Cases</h3>
          <h3>{country.cases}</h3>
        </Card>
        <Card>
          <h3>Total Recovered</h3>
          <h3>{country.recovered}</h3>
        </Card>
        <Card>
          <h3>Total Deaths</h3>
          <h3>{country.deaths}</h3>
        </Card>
      </Grid>
    </>

  );
};

export default CountryDetails;
