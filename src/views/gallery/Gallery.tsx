import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Box, Container } from '@mui/material';
import { Masonry } from '@mui/lab';

import { appContext } from '../../context/contexts';
import usePhotos from '../../common/hooks/usePhotos';
import './gallery.scss';

const Gallery = React.memo(() => {
  const { cld } = useContext(appContext);
  const { getPhotosByTag } = usePhotos();
  const [allPhotos, setAllPhotos] = useState([]);

  const getPhotos = useCallback(async () => {
    const response = await getPhotosByTag('show');
    const images = response?.resources.map((img:any, index:any) => {
      const height = index % 2 === 0
        ? Math.random() * (400 - 300 + 1) + 300
        : Math.random() * (300 - 200 + 1) + 200;
      // eslint-disable-next-line no-param-reassign
      img.displayHeight = height;
      return img;
    });
    setAllPhotos(images);
  }, []);

  useEffect(() => {
    getPhotos();
  }, []);

  // const [filteredPhotos, setFilteredPhotos] = useState([]);

  return (
    <Container maxWidth="xl" className="gallery-container w-full grow flex align-items-center">
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2} sx={{ margin: '0' }}>
        {allPhotos?.map((photo:any) => (
          <Box
            key={photo.public_id}
            style={{ height: photo.displayHeight }}
            className="photo-container overflow-hidden rounded-md"
            onClick={() => console.log(photo.public_id)}
          >
            <AdvancedImage
              cldImg={cld.image(photo.public_id)}
              className="advanced-image object-cover object-center h-full w-full"
            />
          </Box>
        ))}
      </Masonry>
    </Container>
  );
});

export default Gallery;
