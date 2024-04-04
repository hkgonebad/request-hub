import logo from "@/assets/img/logo.svg";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <div className="loginHero">
        <h1>
          Welcome to<b>DSR platform</b>
        </h1>
      </div>
      <div className="loginForm">
        <img src={logo} alt="" />
        <h1>Login</h1>
        <p>Enter your credential to access your account</p>

        <form action="">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username / Email ID / Mobile Number"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="passwords"
              className="form-control"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group mb-3 text-end">
            <Link to="">Forgot Password</Link>
          </div>
          <Stack direction="horizontal" gap={2} className="btns ">
            <button className="btn btn-outline-primary flex-fill">
              Login by Single-Sign-On
            </button>
            <Link to="/home" className="btn btn-primary">
              Proceed
            </Link>
          </Stack>
        </form>
      </div>
    </section>
  );
};

export default Login;
