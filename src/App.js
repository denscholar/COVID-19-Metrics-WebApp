import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Home from './pages/Home/Home';

const LinkTo = styled(Link)`
    svg{
      color: white;
      font-size: 2rem;
    }
    :hover{
      color: black;
    }
`;

function App() {
  return (
    <Router>
      <div className="App">
        <nav
          className="input"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <LinkTo to="/"><AccountBalanceOutlinedIcon /></LinkTo>
          <h2 style={{ fontSize: '1.5rem', color: 'white' }}>COVID-19 METRICS</h2>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<CountryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
