import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/app";
import SignIn from "./pages/signin";
import ProtectedRoute from "./utils/protected.route";
import SignUp from "./pages/signup";
import ModExpense from "./pages/mod.expense";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  {
    path: "/modexpense",
    element: (
      <ProtectedRoute>
        <ModExpense />
      </ProtectedRoute>
    ),
  },
  {
    path: "/modexpense/:expenseId",
    element: (
      <ProtectedRoute>
        <ModExpense />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
