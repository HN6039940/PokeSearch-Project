import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  ErrorPage,
  PokemonsList,
  SearchPage,
  LandingPage,
  PokemonPage,
} from "./pages/index.js";
import { loader as pokemonLoader } from "./pages/Pokemon/Pokemon.jsx";
import { loader as formLoader } from "./pages/Search/SearchPage.jsx";
const BrowserTouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "pokemons",
        element: <PokemonsList />,
      },
      { path: "pokemon/:id", element: <PokemonPage />, loader: pokemonLoader },
      {
        path: "search",
        element: <SearchPage />,
        loader: formLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={BrowserTouter} />;
};

export default App;
