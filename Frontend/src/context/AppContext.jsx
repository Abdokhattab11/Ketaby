import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [favourites, setFavourites] = useState([]);
  const [showSideNav, setShowSideNav] = useState(false);

  function handleFavouritesClick(book) {
    if (isProductInFavourites(book)) {
      setFavourites((list) => list.filter((i) => book.book_id !== i.book_id));
      toast.error("Removed from Favourites");
    } else {
      setFavourites([...favourites, book]);
      toast.success("Added to Favourites");
    }
  }

  function isProductInFavourites(book) {
    return favourites.some((item) => item.book_id === book.book_id);
  }

  return (
    <AppContext.Provider
      value={{
        favourites,
        handleFavouritesClick,
        isProductInFavourites,
        showSideNav,
        setShowSideNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext was used outside of AppContextProvider");
  return context;
}

export { useAppContext, AppContextProvider };
