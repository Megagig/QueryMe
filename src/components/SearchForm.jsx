import React from 'react';

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault;
    const SearchValue = e.target.elements.search.value;
    if (!SearchValue) return;
    console.log(SearchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplsh Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="cat"
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
