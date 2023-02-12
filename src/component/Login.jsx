import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerLogo } from "../constants";
import { Input } from "../ui";
import { loginUserStart } from "../slice/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
  };

  return (
    <div className="text-center forma">
      <form className="w-25">
        <img
          className="mb-4"
          src={registerLogo}
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <Input
          label={"Email adress"}
          type={"email"}
          state={email}
          setState={setEmail}
        />
        <Input
          label={"Password"}
          type={"password"}
          state={password}
          setState={setPassword}
        />
        <button
          className="w-100 btn btn-lg btn-primary mt-2"
          type="submit"
          onClick={loginHandler}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
