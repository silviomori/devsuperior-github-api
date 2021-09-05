import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container home-container">
      <h1>Challenge GitHub API</h1>
      <h2>Bootcamp Spring React</h2>
      <Link to="/search">
        <button className="btn btn-primary">Start</button>
      </Link>
    </div>
  );
};

export default Home;
