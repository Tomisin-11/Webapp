import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import "./componets/sections/styles/herosection.css";
 import "./componets/sections/styles/Navbar.css";
  import "./componets/sections/styles/product.css";
import 'aos/dist/aos.css';

const router = createBrowserRouter([
  { index: true, element: <Home /> },
  // { path: "events", element: <  /> },
  // { path: "Gallery", element: <  /> },
]);

const App = function () {

  
  return <RouterProvider router={router} />;
};

export default App
