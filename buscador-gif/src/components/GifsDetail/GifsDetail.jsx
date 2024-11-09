
import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';
import { useEffect, useState } from 'react';

const GifDetail = () => {
  const { id } = useParams();
  const [gif, setGif] = useState(null);
  const { data, loading } = useApi(`https://api.giphy.com/v1/gifs/${id}?api_key=b1rcyqb5LM70LffjvuMqtVfAbYO4TZkr`);

  useEffect(() => {
    if (data) {
      setGif(data);
      console.log("GIF Data:", data); // Verifica los datos recibidos
    }
  }, [data]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!gif || !gif.images) {
    return <p className="text-center text-gray-500">No se encontró el gif</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-md">
        <img src={gif.images.downsized_large.url} alt={gif.title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{gif.title}</h3>
          <p className="text-gray-600 mb-4">Type: {gif.type}</p>
          <p className="text-gray-600 mb-4">Rating: {gif.rating}</p>
          <p className="text-gray-600 mb-4">Imported: {new Date(gif.import_datetime).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default GifDetail;
