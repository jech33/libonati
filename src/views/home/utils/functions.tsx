import axios from 'axios';

export const getCloudinaryPhotos = async (tag:string) => {
  const results = await axios.get(`https://res.cloudinary.com/jech33/image/list/${tag}.json`);
  return results;
};

export const testFunction = () => {
  // Test
};
