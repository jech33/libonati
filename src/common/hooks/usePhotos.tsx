import axios from 'axios';

const usePhotos = () => {
  // Get Array of Photos By Tag
  const getPhotosByTag = async (tag:string) => {
    const results = await axios.get(`https://res.cloudinary.com/jech33/image/list/${tag}.json`);
    return results;
  };

  return { getPhotosByTag };
};

export default usePhotos;
