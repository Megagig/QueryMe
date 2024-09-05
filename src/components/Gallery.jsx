import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useAppContext } from '../context/AppContext';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
console.log();

const Gallery = () => {
  const { searchTerm } = useAppContext();
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const res = await axios.get(`${url}&query=${searchTerm}`);
      return res.data; // return the data from the API
    },
  });
  // check the status of the response
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading ...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an Error</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No images found</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular; // get the regular image url
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
