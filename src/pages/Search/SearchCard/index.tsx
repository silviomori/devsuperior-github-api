import axios from 'axios';
import React, { useState } from 'react';
import './styles.css';

type Props = {
  setProfile: Function;
  setLoading: Function;
};

const SearchCard = ({ setProfile, setLoading }: Props) => {
  const [username, setUsername] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((result) => {
        setProfile(result.data);
      })
      .catch(() => setProfile(null))
      .finally(() => setLoading(false));
  };

  return (
    <div className="container base-card search-card">
      <form onSubmit={handleSubmit}>
        <h1>Search for a GitHub profile</h1>
        <input
          placeholder="GitHub Username"
          name="username"
          value={username}
          onChange={handleChange}
        ></input>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchCard;
