import { Link } from "react-router-dom";
import Auth_layout1 from "../../components/auth_layout1";

function ResetPassword() {
    return (
        <>
            <Auth_layout1>
                <div className="form-layout justify-content-start mt-auto" style={{height:"30rem"}}>
                    <div>
                        <h3 className="name">Reset Password</h3>
                        <p className="login-text">Select a preferred method</p>
                    </div>
                    <div className="d-flex flex-column gap-3 w-100">
                        <Link to={"/"} className="signupOption new">
                            <h6 className="account-holder">Debit Card and PIN</h6>
                            <h3 className="online-banking">Use your debit card details</h3>
                        </Link>
                        <Link to={"/"} className="signupOption new">
                            <h6 className="account-holder">PIN and OTP</h6>
                            <h3 className="online-banking">Use your Transactional PIN</h3>
                        </Link>

                    </div>
                </div>
            </Auth_layout1>
        </>
    );
}

export default ResetPassword;