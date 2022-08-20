import logo from "../../assets/images/mono_logo.png";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import register from "../../lib/apiHandlers/register";
import loadError from "../../lib/loadErr";
import { toast } from "react-toastify";

export function Signup() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const { firstname, lastname, email, password } = loginData;

  const submit = async () => {
    console.log(loginData);
    try {
      await register(loginData).then((res) => {
        console.log(res);
        toast("SignUp successful, you can now proceed to login");
        navigate("/login");
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
    <div className="wrapper flex h-screen">
      <div className="card my-auto mx-10 md:m-auto">
        <div>
          <div className="logo-wrapper text-center">
            <img className="mx-auto w-52 mt-10" src={logo} alt="" />
            <p className="image-tagline mt-3">
              Track all your bank expenses in one place
            </p>
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
              <div className="flex gap-3">
                <div className="form-wrapper mt-5 w-3/6">
                  <input
                    type="text"
                    value={firstname}
                    onChange={(e) => {
                      e.preventDefault();
                      handleChange("firstname", e);
                    }}
                    placeholder="First Name"
                  />
                </div>
                <div className="form-wrapper mt-5 w-3/6">
                  <input
                    type="text"
                    value={lastname}
                    onChange={(e) => {
                      e.preventDefault();
                      handleChange("lastname", e);
                    }}
                    placeholder="Last Name"
                  />
                </div>
              </div>
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
              <div className="form-wrapper mt-5">
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
              {/* <div className="checkbox my-2 flex justify-between">
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
              </div> */}
              <div className="button w-6/6 my-5">
                <button className="signupBtn hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get started
                </button>
                <Link to="/login">
                  <p className="my-4 text-center">
                    Already have an account? Sign in{" "}
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

export default Signup;
