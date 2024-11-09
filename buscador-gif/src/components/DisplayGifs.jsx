
import useApi from '../components/hooks/useApi';
import ImageItem from './ImagenItem';
import { useEffect } from 'react';

const DisplayGifs = ({ category }) => {
  const { loading, data, searchGifs } = useApi();

  useEffect(() => {
    searchGifs(category);
  }, [category, searchGifs]);

  return (
    <div className="container-gifs p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Display Gifs</h2>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
          {data.map((img) => (
            <ImageItem
              key={img.id}
              title={img.title}
              type={img.type}
              url={img.images.downsized_medium.url}
              id={img.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayGifs;

