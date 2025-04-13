import logo from "@/assets/img/logo.webp";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <div className="loginHero">
        <h1>
          Welcome to<b>RequestHub</b>
        </h1>
      </div>
      <div className="loginForm">
        <img src={logo} alt="" />
        <h1>Access Control</h1>
        <p>Enter your credentials to access the mission control center</p>

        <form action="">
          <div className="form-group mb-3">
            <input type="text" className="form-control" name="username" placeholder="Agent ID / Email / Mobile Number" />
          </div>
          <div className="form-group mb-3">
            <input type="password" className="form-control" name="password" placeholder="Access Code" />
          </div>
          <div className="form-group mb-3 text-end forgotText">
            <Link to="" className="text-warning">
              Forgot Access Code?
            </Link>
          </div>
          <Stack direction="horizontal" gap={2} className="btns ">
            <button className="btn btn-outline-primary flex-fill ">S.H.I.E.L.D. Authentication</button>
            <Link to="/home" className="btn btn-primary">
              Access Mission Control
            </Link>
          </Stack>
        </form>
      </div>
    </section>
  );
};

export default Login;
