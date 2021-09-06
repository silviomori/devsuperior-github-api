import './styles.css';
import UserProfile from './UserProfile';
import { useState } from 'react';
import { Profile } from 'types/profile';
import SearchCard from './SearchCard';
import UserProfileLoader from './UserProfile/UserProfileLoader';

const Search = () => {
  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <div className="container search-container">
      <div className="search-card-container">
        <SearchCard setProfile={setProfile} setLoading={setLoading} />
      </div>
      {isLoading ? (
        <UserProfileLoader />
      ) : profile ? (
        <div className="profile-card-container">
          <UserProfile profile={profile} />
        </div>
      ) : (
        <p>Profile not found.</p>
      )}
    </div>
  );
};

export default Search;
