/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Container } from '@mui/material';
import { Masonry } from 'masonic';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';

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

  const handleMouseOver = (event: React.MouseEvent<Element, MouseEvent>) => {
    const target = event.target as HTMLDivElement;
    const element = target?.parentNode!.parentNode as HTMLElement;
    element.classList!.add('image-hovered');
  };
  const handleMouseLeave = (event: React.MouseEvent<Element, MouseEvent>) => {
    const target = event.target as HTMLDivElement;
    const element = target?.parentNode!.parentNode as HTMLElement;
    element.classList!.remove('image-hovered');
  };

  const masonryCard = ({ data }: {data: any}) => {
    const image = cld.image(data.public_id);
    image.resize(thumbnail().width(1920).height(1080));
    return (
      <div
        className="photo-container overflow-hidden rounded-md"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        style={{ height: data.displayHeight }}
        onLoad={() => console.log(`Loaded ${data.public_id}`)}
      >
        <AdvancedImage
          cldImg={image}
          className="advanced-image h-full w-full"
        />
      </div>
    );
  };

  useEffect(() => {
    getPhotos();
  }, []);

  // const [filteredPhotos, setFilteredPhotos] = useState([]);

  return (
    <Container maxWidth="xl" className="gallery-container w-full grow flex align-items-center">
      <Masonry
          // Provides the data for our grid items
        items={allPhotos}
        itemHeightEstimate={300}
          // Adds 8px of space between the grid cells
        columnGutter={12}
          // Sets the minimum column width to 172px
        columnWidth={250}
          // Pre-renders 5 windows worth of content
        overscanBy={5}
          // This is the grid item component
        render={masonryCard}
      />
    </Container>
  );
});

export default Gallery;
