
import { Link } from 'react-router-dom';
import CardWidget from "../CardWidget/CardWidget";

const NavBar = () => {
  return (
    <div className="bg-gray-100 p-7">
      <nav className="bg-blue-500 text-white p-2 rounded">
        <ul className="flex space-x-4">
          <li className="hover:bg-blue-700 px-3 py-2 rounded text-xl">
            <Link to="/">Inicio</Link>
          </li>
          <li className="hover:bg-blue-700 px-3 py-2 rounded text-xl">
            <Link to="/cats">Cats</Link>
          </li>
          <li className="hover:bg-blue-700 px-3 py-2 rounded text-xl">
            <Link to="/dogs">Dogs</Link>
          </li>
          <li className="hover:bg-blue-700 px-3 py-2 rounded text-xl">
            <Link to="/simpson">Simpson</Link>
          </li>
          <CardWidget />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
