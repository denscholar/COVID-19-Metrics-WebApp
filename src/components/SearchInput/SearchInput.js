import './SearchInput.css';

const SearchInput = ({ onChange }) => (
  <nav className="input">
    <input type="search" placeholder="Search country cases" onChange={onChange} />
  </nav>
);

export default SearchInput;
