import { FaDeleteLeft } from "react-icons/fa6";

const Favorites = ({ favorites, onRemove }) => (
  <div className="mt-6">
    <h2 className="text-lg font-bold mb-2 text-purple-900 dark:text-purple-300">
      Your Favorites:
    </h2>
    <ul className="space-y-2">
      {favorites.map((q, index) => (
        <li
          key={index}
          className="p-3 bg-white dark:bg-gray-700 rounded shadow flex justify-between items-center"
        >
          <div>
            <p className="dark:text-white">"{q.text}"</p>
            <p className="text-sm text-gray-500 dark:text-gray-300 ">
              - {q.author}
            </p>
          </div>
          <button onClick={() => onRemove(q.text)} className="text-red-500 ">
            <FaDeleteLeft />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Favorites;
