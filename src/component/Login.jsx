import { useState } from "react";
import { registerLogo } from "../constants";
import { Input } from "../ui";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="text-center forma">
      <form className="w-25">
        <img class="mb-4" src={registerLogo} alt="" width="72" height="57" />
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
        <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
