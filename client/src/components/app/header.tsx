import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import { IoIosAddCircle } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import { userSignedIn } from "../../utils/zustand.store";

const Header = ({ clear }) => {
  const navigate = useNavigate();
  const signOut = () => {
    window.sessionStorage.removeItem("token");
    clear();
    navigate("/signin");
  };

  const user = userSignedIn((state) => state.user);

  return (
    <header className="w-full h-[50px] bg-indigo-500 flex justify-between items-center px-3 sm:px-10">
      <Link to="/" className="text-xl text-white font-bold select-none">
        Budget-App
      </Link>
      <div className="flex items-center gap-3">
        <Link to={"/"}>
          <AiFillHome
            className={"w-6 h-6 text-neutral-300 hover:text-neutral-100"}
          />
        </Link>
        <Link to={"/modexpense"}>
          <IoIosAddCircle
            className={"w-6 h-6 text-neutral-300 hover:text-neutral-100"}
          />
        </Link>
        <div className="flex items-center gap-3 select-none">
          <Avatar alt={user?.username} src="" sx={{ width: 24, height: 24 }} />
          <p className="text-neutral-200 font-semibold">{user?.username}</p>
        </div>
        <button onClick={signOut}>
          <GoSignOut
            className={"w-6 h-6 text-neutral-300 hover:text-neutral-100"}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
