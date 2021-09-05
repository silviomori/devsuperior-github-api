import './styles.css';

const SearchCard = () => {
  return (
    <div className="container base-card search-card">
      <h1>Search for a GitHub profile</h1>
      <input placeholder="GitHub Username"></input>
      <button className="btn btn-primary">Search</button>
    </div>
  );
};

export default SearchCard;
