import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import "./styles/Navbar.css";
 import "./styles/herosection.css";
  import "./styles/product.css";
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
