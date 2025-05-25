import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";
import ProfilePage from "./pages/Profilepage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
