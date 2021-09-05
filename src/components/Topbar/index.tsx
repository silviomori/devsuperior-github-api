import './styles.css';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="bg-primary top-bar">
      <Link to="/" className="container">
        <h1>GitHub API</h1>
      </Link>
    </div>
  );
};

export default Topbar;
