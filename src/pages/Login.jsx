import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <div className="login__logo">
        <img src="../images/Union.png" alt="" className="login__logo-1" />
        <img src="../images/lendsqr.png" alt="" className="login__logo-2" />
      </div>
      <div className="login__content">
        <div className="login__content-image">
          <img src="../images/pablo-sign-in 1.png" alt="" />
        </div>
        <div className="login__content-form">
          <div className="form">
            <div className="form-title">Welcome!</div>
            <div className="form-text">Enter details to login.</div>
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
              minLength={3}
            />
            <div className="form-forgotPassword">FORGOT PASSWORD?</div>
            <Link to="/dashboard">
              <button className="form-btn btn">LOG IN</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
