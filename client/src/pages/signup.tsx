import FormContainer from "../components/forms/forms.container";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/forms/input";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const submitSingUp = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:3000/api/v1/auth/signup",
      data: {
        username,
        email,
        password,
      },
    })
      .then(function (res) {
        const userInfo = res.data;
        navigate("/signin");
      })
      .catch(function (err) {
        const error = err.response.data.error;
        setError(error);
        console.log(error);
      });
  };

  return (
    <FormContainer>
      <div className="flex flex-col gap-6">
        <h1 className="text-neutral-300 text-center text-4xl select-none">
          SIGNUP
        </h1>
        <form
          onSubmit={submitSingUp}
          className="bg-neutral-200 p-6 rounded-lg w-96 flex flex-col gap-3"
        >
          <Input
            title={"UserName"}
            type={"text"}
            placeholder={"Jon1"}
            value={username}
            set={setUsername}
          />
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
            Already have an account?
            <Link to={"/signin"} className="text-indigo-500">
              {" "}
              SignIn
            </Link>
          </p>
          <button className="bg-indigo-500 p-2 rounded-lg text-white">
            SignUp
          </button>
        </form>
      </div>
    </FormContainer>
  );
};

export default SignUp;
