/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import CountUp from 'react-countup';
import { Container, Col, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGlobalCase } from '../../redux/covid/Covid';

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
  const global = useSelector((state) => state.globalCase);
  const dispatch = useDispatch();
  const fetchWorldData = async () => {
    const res = await fetch('https://disease.sh/v3/covid-19/all');
    const data = await res.json();
    dispatch(fetchGlobalCase(data));
  };
  const lastUpdated = new Date(parseInt(global.updated, 10)).toString();

  useEffect(() => {
    if (!global) {
      <h2> its Loading</h2>;
    }
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
                {}
                <li>
                  Active:
                  {' '}
                  <CountUp
                    start={0}
                    end={global.active}
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
                    end={global.deaths}
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
                    end={global.recovered}
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
