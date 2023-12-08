import eye from "../../assets/images/eye.png"
import { Link } from "react-router-dom";
import Auth_layout1 from "../../components/auth_layout1";

function Login() {
    return (
        <>
            <Auth_layout1>
                <div className="form-layout">
                    <div>
                        <h6 className="welcome">Welcome to</h6>
                        <h3 className="name">UnionOnline Banking</h3>
                        <p className="login-text">Log in securely into your account</p>
                    </div>
                    <form action="" className="form">
                        <input type="text" placeholder="Username or Phone Number" />
                        <div className="password-container">
                            <input type="password" placeholder="Password" />
                            <img src={eye} alt="" />
                        </div>
                        <button type="button" className="forgotten-password">
                            <Link to={"/forgot-credentials"} className="new">Forgot credentials?</Link>
                        </button>
                        <button type="submit" className="login-btn">Log in</button>
                        <div className="switch">
                            <p>I don't have account? <Link to={"/get-started"} className="new">I'm new here</Link></p>
                        </div>
                    </form>
                </div>
            </Auth_layout1>
        </>
    );
}

export default Login;