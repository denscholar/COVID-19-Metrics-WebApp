import styled from 'styled-components';
import CountUp from 'react-countup';
import { Container, Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Wrapper = styled(Container)`
    width: 100%;
    height: 15rem;
    background-color: #f31f46;
    display: flex;
    justify-content: flex-end;
    padding: 2rem 4rem;
    opacity: 0.8;

    div{
      h4{
        color: white;
        font-size: 2rem;
        text-align: center;
      }
      ul{
        padding: 0;

        li{
        list-style-type: none;
        color: white;
        font-size: 1.2rem;
        padding: 0;
      }

      }

      p{
        color: white;
        font-size: 12px;
      }
    }
`;

const HeroPage = () => {
  const [worldData, setWorldData] = useState([]);
  const fetchWorldData = async () => {
    const res = await fetch('https://disease.sh/v3/covid-19/all');
    const data = await res.json();
    setWorldData(data);
  };
  const lastUpdated = new Date(parseInt(worldData.updated, 10)).toString();

  useEffect(() => {
    fetchWorldData();
  }, []);

  return (
    <>
      <Wrapper fluid>
        <Row>
          <Col>
            <div>
              <h4>Global COVID-19 Metrics</h4>
              <ul>
                <li>
                  Active:
                  {' '}
                  <CountUp
                    start={0}
                    end={worldData.active}
                    duration={2.75}
                    separator=","
                    style={{ color: 'white' }}
                  />
                </li>
                <li>
                  Deaths:
                  {' '}
                  <CountUp
                    start={0}
                    end={worldData.deaths}
                    duration={2.75}
                    separator=","
                    style={{ color: 'white' }}
                  />
                </li>
                <li>
                  Recovered:
                  {' '}
                  <CountUp
                    start={0}
                    end={worldData.recovered}
                    duration={2.75}
                    separator=","
                    style={{ color: 'white' }}
                  />
                </li>
              </ul>
              <p>
                Last Update:
                {' '}
                {lastUpdated}
              </p>
            </div>
          </Col>
        </Row>
      </Wrapper>
    </>

  );
};

export default HeroPage;
