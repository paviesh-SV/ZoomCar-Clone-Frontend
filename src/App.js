import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import BookingCar from "./pages/BookingCar.js";
import UserBookings from './pages/UserBookings.js';
import AddCar from './pages/AddCar.js';
import AdminHome from './pages/AdminHome.js';
import EditCar from './pages/EditCar.js';
import './App.css';
import Success from './pages/Sucess.js';
import Cancel from './pages/Cancel.js'; 

export const ProtectedRoute = ({ children }) => {

  if (localStorage.getItem('user')) {
    // user is authenticated
    return children;
  }
  return <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><Home /></ProtectedRoute>,
  }, {
    path: "/login",
    element: <Login />
  }, {
    path: "/register",
    element: <Register />
  }, {
    path: "/booking/:carid",
    element: <ProtectedRoute><BookingCar /></ProtectedRoute>,
    loader: ({ params }) => {
      return params.carid;
    }
  }, {
    path: "/userbookings",
    element: <ProtectedRoute><UserBookings /></ProtectedRoute>
  }, {
    path: "/addcar",
    element: <ProtectedRoute><AddCar /></ProtectedRoute>
  }, {
    path: "editcar/:carid",
    element: <ProtectedRoute><EditCar /></ProtectedRoute>,
    loader: ({ params }) => {
      return params.carid;
    }
  }, {
    path: "admin",
    element: <ProtectedRoute><AdminHome /></ProtectedRoute>
  }, {
    path: "/success",
    element: <ProtectedRoute><Success /></ProtectedRoute>
  }, {
    path: "/cancel",
    element: <ProtectedRoute><Cancel /></ProtectedRoute>
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
