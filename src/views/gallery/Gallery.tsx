import { Container } from '@mui/material';
import React from 'react';
import usePhotos from '../../common/hooks/usePhotos';

const Gallery = () => {
  const { getPhotosByTag } = usePhotos();
  console.log(getPhotosByTag('liboband'));

  return (
    <Container maxWidth="xl" className="w-full border-solid border-2 border-libonatiGold grow">
      hello
    </Container>
  );
};

export default Gallery;
