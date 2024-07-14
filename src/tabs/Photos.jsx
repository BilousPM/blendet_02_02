import { getPhotos } from 'apiService/photos';
import { Form, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  const onSubmit = value => {
    setQuery(value);
  };

  useEffect(() => { 
    if(!query) return
    const getData = async () => {
      try {
        const data = await getPhotos(query, page);
        setPhotos(data.photos);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [query, page]);

  return (
    <>
      <Form onSubmit={onSubmit} />
      <Text textAlign="center">Let`s begin search 🔎</Text>
     {error && <Text textAlign="center">{error}</Text>}
    </>
  );
};
