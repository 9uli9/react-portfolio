import { Link } from "react-router-dom";

const Navbar = () => {
  const buttonClass =
    "bg-green-600 font-lacquer text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition text-white hover:text-gray-200 transition";

  return (
    <nav className="bg-cover bg-black bg-center bg-no-repeat shadow-md sticky top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white font-lacquer">
            <Link to="/">Julia Szewczuk</Link>
          </div>

          <div className="flex space-x-6">
            <Link to="/home" className={buttonClass}>
              Home
            </Link>

            <Link to="/projects" className={buttonClass}>
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
