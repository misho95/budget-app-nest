import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { tokenStored, userSignedIn } from "./zustand.store";
import Cookies from "universal-cookie";

const ProtectedRoute = ({ children }) => {
  const user = userSignedIn((state) => state.user);
  const setUser = userSignedIn((state) => state.setUser);
  const clearUser = userSignedIn((state) => state.clearUser);
  const setToken = tokenStored((state) => state.setToken);
  const clearToken = tokenStored((state) => state.clearToken);

  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    console.log("running protected page...");
    const getToken = cookies.get("access_token");

    if (!getToken) {
      clearUser();
      navigate("/signin");
      return;
    }

    setToken(getToken);

    axios({
      method: "get",
      url: "http://localhost:3000/api/v1/auth/profile",
      headers: { Authorization: `Bearer ${getToken}` },
    })
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        clearUser();
        clearToken();
        navigate("/signin");
      });
  }, []);

  if (!user) {
    return;
  }

  return children;
};

export default ProtectedRoute;
