import FormContainer from "../components/forms/forms.container";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/forms/input";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const submitSingUp = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:3000/api/v1/auth/signin",
      data: {
        email,
        password,
      },
    })
      .then(function (res) {
        const token = res.data.access_token;
        window.sessionStorage.setItem("token", token);
        navigate("/");
      })
      .catch(function (err) {
        console.log(err);
        setError("Wrong Credentials!");
      });
  };

  return (
    <FormContainer>
      <div className="flex flex-col gap-6">
        <h1 className="text-neutral-300 text-center text-4xl select-none">
          SIGNIN
        </h1>
        <form
          onSubmit={submitSingUp}
          className="bg-neutral-200 p-6 rounded-lg w-96 flex flex-col gap-3"
        >
          <Input
            title={"Email"}
            type={"email"}
            placeholder={"Example@mail.ru"}
            value={email}
            set={setEmail}
          />
          <Input
            title={"Password"}
            type={"password"}
            placeholder={"**********"}
            value={password}
            set={setPassword}
          />
          {error && <span className="text-red-500 text-sm">{error}</span>}
          <p>
            Dont have an account?
            <Link to={"/signup"} className="text-indigo-500">
              {" "}
              SignUp
            </Link>
          </p>
          <button className="bg-indigo-500 p-2 rounded-lg text-white">
            Login
          </button>
        </form>
      </div>
    </FormContainer>
  );
};

export default SignIn;
