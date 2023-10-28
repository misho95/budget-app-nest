import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    if (!token) {
      setUser(null);
      navigate("/signin");
    }

    axios({
      method: "get",
      url: "http://localhost:3000/api/v1/auth/profile",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch(() => {
        setUser(null);
        navigate("/signin");
      });
  }, []);

  if (!user) {
    return;
  }

  return children;
};

export default ProtectedRoute;
