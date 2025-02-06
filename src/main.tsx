import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";

// import des pages
import Home from "./pages/Home.tsx";
import Choice from "./pages/Choice.tsx";
import Teatime from "./pages/Teatime.tsx";
import Bals from "./pages/Bals.tsx";
import Reservation from "./pages/Reservation.tsx";

// import css
import "./components/footer/footer.css";
import "./styles/reservation.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/choice/:city",
        element: <Choice />,
      },
      {
        path: "/teatime",
        element: <Teatime />,
      },
      {
        path: "/bals",
        element: <Bals />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
    ],
  },
]);

const root = document.getElementById("root");

if (!root) {
  throw new Error("Erreur");
}

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
