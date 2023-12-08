import { Link } from "react-router-dom";
import Auth_layout1 from "../../components/auth_layout1";
import lock from "../../assets/images/lock.png"
import user_square from "../../assets/images/user-square.png"



function ForgotCredentials() {
    return (
        <>
            <Auth_layout1>
                <div className="form-layout mt-auto justify-content-start" style={{height:"30rem"}}>
                    <div>
                        <h3 className="name">Forgot Credentials?</h3>
                        <p className="login-text">Select any of the option to recover your credential</p>
                    </div>
                    <div className="d-flex flex-column gap-3 w-100">
                        <Link to={"/recover-username/1?phase=account-details"} className="signupOption px-0 py-3 flex-row new">
                            <div className="squareimg">
                                <img src={user_square} alt="" />
                            </div>
                            <h3 className="online-banking my-auto">Recover username</h3>
                        </Link>
                        <Link to={"/reset-password"} className="signupOption px-0 py-3 flex-row new">
                            <div className="squareimg">
                                <img src={lock} alt="" />
                            </div>
                            <h3 className="online-banking my-auto">Reset password</h3>
                        </Link>

                        <Link to={"/login"} className="new mx-auto">Log me in instead</Link>
                    </div>
                </div>
            </Auth_layout1>
        </>
    );
}

export default ForgotCredentials;