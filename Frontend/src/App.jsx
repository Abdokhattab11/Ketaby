import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Author from "./pages/Author";
import CreateBook from "./pages/CreateBook";
import Favourites from "./pages/Favourites";
import AppLayout from "./ui/AppLayout";
import BookDetails from "./features/BookDetails";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="book/:bookId" element={<BookDetails />} />
            <Route path="author" element={<Author />} />
            <Route path="createbook" element={<CreateBook />} />
            <Route path="favourite" element={<Favourites />} />
          </Route>
        </Routes>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 3000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
