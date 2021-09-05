import './styles.css';

const UserProfile = () => {
  return (
    <div className="base-card profile-card">
      <div className="profile-img-container">
        <img
          src="https://avatars.githubusercontent.com/u/38220067?v=4"
          alt="User avatar"
        />
      </div>
      <div className="base-card profile-details-card">
        <h1 className="text-primary">Details</h1>
        <input type="text" value="Perfil" />
        <input type="text" value="Seguidores" />
        <input type="text" value="Localidade" />
        <input type="text" value="Nome" />
      </div>
    </div>
  );
};

export default UserProfile;
