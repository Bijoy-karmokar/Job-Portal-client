import Lottie from "lottie-react";
import React, { use } from "react";
import LogInLottie from "../assets/Login.json";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router";

const LogIn = () => {
  const { signInUser,googleProvider } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());
    //  console.log(LogInData);
    signInUser(email, password)
      .then((result) => {
        navigate(from);
        const user = result.user;
        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Login successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const handleGoogle = () => {
      googleProvider().then((result) => {
        if (result.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your socail login successfylly",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={LogInLottie}
            style={{ width: 500, height: 500 }}
            loop
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleLogIn} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p>
                Create an account?{" "}
                <Link to={"/register"} className="btn btn-link">
                  Register
                </Link>
              </p>

              {/* Google */}
              <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
