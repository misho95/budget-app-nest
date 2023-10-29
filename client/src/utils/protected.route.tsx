import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { userSignedIn } from "./zustand.store";

const ProtectedRoute = ({ children }) => {
  const user = userSignedIn((state) => state.user);
  const setUser = userSignedIn((state) => state.setUser);
  const clearUser = userSignedIn((state) => state.clearUser);

  const navigate = useNavigate();

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    if (!token) {
      clearUser();
      navigate("/signin");
    }

    axios({
      method: "get",
      url: "http://localhost:3000/api/v1/auth/profile",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        clearUser();
        navigate("/signin");
      });
  }, []);

  if (!user) {
    return;
  }

  return children;
};

export default ProtectedRoute;
