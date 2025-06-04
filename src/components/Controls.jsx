import { FaHeart, FaMoon, FaRegHeart, FaSun, FaSync } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Controls = ({ onNewQuote, onToggleFavorite, isFavorite }) => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <div className="flex justify-around mt-4 space-x-4">
      <button
        onClick={onNewQuote}
        className="text-blue-500 text-2xl hover:scale-110 transition"
      >
        <FaSync />
      </button>
      <button
        onClick={onToggleFavorite}
        className="  text-2xl hover:scale-110 transition"
      >
        {isFavorite ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-blue-500" />
        )}
      </button>
      <button
        className="hover:scale-110 transition text-2xl  "
        onClick={toggleTheme}
      >
        {darkMode ? (
          <FaSun className="text-yellow-500 " />
        ) : (
          <FaMoon className="text-gray-800" />
        )}
      </button>
    </div>
  );
};
export default Controls;
