import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import { IoIosAddCircle } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();
  const signOut = () => {
    window.sessionStorage.removeItem("token");
    navigate("/signin");
  };

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
        <Link to={"/"}>
          <IoIosAddCircle
            className={"w-6 h-6 text-neutral-300 hover:text-neutral-100"}
          />
        </Link>
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
