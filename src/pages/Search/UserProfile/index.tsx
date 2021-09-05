import { Profile } from 'types/profile';
import './styles.css';

type Props = {
  profile: Profile;
};

const UserProfile = ({ profile }: Props) => {
  return (
    <div className="base-card profile-card">
      <div className="profile-img-container">
        <img src={profile.avatar_url} alt="User avatar" />
      </div>
      <div className="base-card profile-details-card">
        <h1 className="text-primary">Details</h1>
        <div className="profile-item">
          <h2>Profile:</h2>
          <a href={profile.html_url}>
            <p>{profile.html_url}</p>
          </a>
        </div>
        <div className="profile-item">
          <h2>Followers:</h2>
          <p>{profile.followers}</p>
        </div>
        <div className="profile-item">
          <h2>Location:</h2>
          <p>{profile.location}</p>
        </div>
        <div className="profile-item">
          <h2>Name:</h2>
          <p>{profile.name}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
