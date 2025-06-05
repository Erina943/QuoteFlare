import { useEffect, useState } from "react";
import QuoteBox from "./components/QuoteBox";
import Controls from "./components/Controls";
import Favorites from "./components/Favorites";
import quotes from "./data/quotes";
import Footer from "./components/Footer";

const LOCAL_KEY = "quoteApp.favorites";

function App() {
  const [quote, setQuote] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const getRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  const isFavorite = favorites.some((q) => q.text === quote?.text);

  const toggleFavorite = () => {
    if (!quote) return;
    let updated;
    if (isFavorite) {
      updated = favorites.filter((q) => q.text !== quote.text);
    } else {
      updated = [...favorites, quote];
    }
    setFavorites(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  const removeFavorite = (text) => {
    const updated = favorites.filter((q) => q.text !== text);
    setFavorites(updated);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
  };

  useEffect(() => {
    getRandomQuote();
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  return (
    <div>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-gray-900 dark:to-black p-6 pb-24 items-center">
        <h1 className="text-3xl font-bold mb-7 text-purple-900 dark:text-purple-300">
          {" "}
          QuoteFlare
        </h1>
        <div className=" item-center flex flex-col  justify-center bg-white dark:bg-gray-800  p-6 rounded-lg shadow max-w-xl w-full">
          <QuoteBox quote={quote} />
          <Controls
            onNewQuote={getRandomQuote}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
          />
        </div>
        <Favorites favorites={favorites} onRemove={removeFavorite} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
