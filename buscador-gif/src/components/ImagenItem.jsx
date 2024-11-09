import { Link } from "react-router-dom";

const ImageItem = ({ title, type, url, id }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img 
        src={url}
        alt={title}
        className="w-full h-48 object-cover" 
        />
        <div className="p-4">
          <h3>{title}</h3>
          <p className="text-gray-600 mb-4">Type: {type}</p>
          <Link to={`/gif/${id}`} className="block bg-blue-600 text-white text-center py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300" > Ver Gifs </Link>
        </div>
        
      </div>
    );
  };
  
  export default ImageItem;
  