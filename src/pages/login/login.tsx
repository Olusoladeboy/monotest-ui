import logo from "../../assets/images/mono_logo.png";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import login from "../../lib/apiHandlers/login";
import loadError from "../../lib/loadErr";
import { toast } from "react-toastify";
import { storage } from "../../utils";

export function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const submit = async () => {
    console.log(loginData);
    try {
      await login(loginData).then((res) => {
        console.log(res);
        if (res.success) {
          storage.addItem("@user-token", res.payload.token);
          storage.addItem("@user-user", res.payload.user);
        }
        if (!res.payload.user?.linked_account) {
          navigate("/link-account");
        } else {
          navigate("/dashboard");
        }
        // toast('')
      });
    } catch (error) {
      console.log(loadError(error));
      toast(loadError(error));
    }
  };
  const handleChange = async (field: string, event) => {
    let newValues = Object.assign({}, loginData);
    newValues[field] = event.target.value;
    setLoginData(newValues);
  };
  return (
    <div className="wrapper login-wrapper flex h-screen">
      <div className="card my-auto mx-10 md:m-auto">
        <div>
          <div className="logo-wrapper text-center">
            <img className="mx-auto w-52 mt-20" src={logo} alt="" />
            <p className="image-tagline mt-3">Securely login to your account</p>
          </div>
          <div className="mt-10">
            <form
              target="_self"
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
              className="w-5/6 md:w-3/6 mx-auto"
            >
              <div className="form-wrapper mt-5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    e.preventDefault();
                    handleChange("email", e);
                  }}
                  placeholder="Email"
                />
              </div>
              <div className="form-wrapper mt-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    e.preventDefault();
                    handleChange("password", e);
                  }}
                  placeholder="Password"
                />
              </div>
              <div className="checkbox my-2 flex justify-between">
                <div className="flex align-center gap-2">
                  <input
                    type="checkbox"
                    aria-checked="true"
                    name=""
                    id="check"
                  />
                  <label htmlFor="check">Remember Me</label>
                </div>
                <div>
                  <p>I forgot my password</p>
                </div>
              </div>
              <div className="login-button w-6/6 my-5">
                <button className="loginBtn hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {/* <Link to="/link-account">Log in</Link> */}
                  Log in
                </button>
                <Link to="/register">
                  <p className="my-5 text-center">
                    Don’t have an account? Sign up{" "}
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
