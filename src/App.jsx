import Navbar from "./components/Navbar";
import "./App.css";
import Register from "./components/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Login } from "./screens/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
