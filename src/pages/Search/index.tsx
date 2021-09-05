import './styles.css';
import SearchCard from './SearchCard';
import UserProfile from './UserProfile';

const Search = () => {
  return (
    <div className="container search-container">
      <div className="search-card-container">
        <SearchCard />
      </div>
      <div className="profile-card-container">
        <UserProfile />
      </div>
    </div>
  );
};

export default Search;
