import { Link } from "react-router-dom";
import Auth_layout1 from "../../components/auth_layout1";

function GetStarted() {
    return (
        <>
            <Auth_layout1>
                <div className="form-layout justify-content-start">
                    <div>
                        <h6 className="welcome">Sign Up to</h6>
                        <h3 className="name">UnionOnline Banking</h3>
                        <p className="login-text">Select an option to get you started</p>
                    </div>
                    <div className="d-flex flex-column gap-3 w-100">
                        <Link to={"/"} className="signupOption new">
                            <h6 className="account-holder">Already an account holder?</h6>
                            <h3 className="online-banking">Sign up for Online banking</h3>
                        </Link>
                        <Link to={"/"} className="signupOption new">
                            <h6 className="account-holder">Don’t have an account?</h6>
                            <h3 className="online-banking">Create a new Bank account</h3>
                        </Link>

                        <Link to={"/login"} className="new mx-auto">Log me in instead</Link>
                    </div>
                </div>
            </Auth_layout1>
        </>
    );
}

export default GetStarted;