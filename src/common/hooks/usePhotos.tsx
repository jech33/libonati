import axios from 'axios';

interface ServerData {
  resources: any
}

const usePhotos = () => {
  // Get Array of Photos By Tag
  const getPhotosByTag = async (tag:string) => {
    const { data } = await axios.get<ServerData>(`https://res.cloudinary.com/jech33/image/list/${tag}.json`);
    return data;
  };

  return { getPhotosByTag };
};

export default usePhotos;
