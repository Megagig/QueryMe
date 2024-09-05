import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const url =
  'https://api.unsplash.com/search/photos?client_id=1weEN284PoI2sHYX8Xf9VXprMqNNzii6hF0aAhh7Q8A&query=pharmacy';

const Gallery = () => {
  const response = useQuery({
    queryKey: ['gallery'],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });
  console.log(response);
  return (
    <div>
      <h2>Gallery</h2>
    </div>
  );
};

export default Gallery;
