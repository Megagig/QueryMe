import React from 'react';
import { useAppContext } from '../context/AppContext';

const SearchForm = () => {
  const { setSearchTerm } = useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault;
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplsh Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Dove"
          className="form-input search-input"
          name="search"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
