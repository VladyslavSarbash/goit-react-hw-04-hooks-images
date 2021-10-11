import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FetchAPI from '../API/API';

export default function SearchBar({ onSubmit, setPage }) {
  const [searchInput, setSearchInput] = useState('');

  const formSubmit = e => {
    e.preventDefault();

    FetchAPI(searchInput)
      .then(data =>
        onSubmit({
          arrayImg: data.hits,
          searchInput: searchInput,
        }),
      )
      .finally(() => {
        setPage(1);
        setSearchInput('');
      });
  };

  const inputForm = ({ target }) => {
    setSearchInput(target.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={formSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          value={searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={inputForm}
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
