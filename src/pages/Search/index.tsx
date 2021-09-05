import './styles.css';
import UserProfile from './UserProfile';
import { useState } from 'react';
import { Profile } from 'types/profile';
import SearchCard from './SearchCard';

const Search = () => {
  const [profile, setProfile] = useState<Profile>();
  return (
    <div className="container search-container">
      <div className="search-card-container">
        <SearchCard setProfile={setProfile} />
      </div>
      {profile && (
        <div className="profile-card-container">
          <UserProfile profile={profile} />
        </div>
      )}
    </div>
  );
};

export default Search;
