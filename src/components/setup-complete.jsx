import { Link } from "react-router-dom";
import checked from "../assets/images/Checked.png"



function SetupComplete({ caption }) {
    return (
        <>
            <main className="success mx-auto text-center">
                <div>
                    <img src={checked} alt="" />
                </div>
                <div>
                    <p className="success-text">Successful!!</p>
                    <h6 className="caption text-center" style={{ color: "var(--grey-2, #666)", fontSize: "1rem" }}>{caption}</h6>
                </div>
                <Link  to={"/login"} className="login-btn w-100 new text-white">Go to Login</Link>
            </main>
        </>
    );
}

export default SetupComplete;