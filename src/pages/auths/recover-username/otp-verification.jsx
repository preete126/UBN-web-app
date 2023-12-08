import { useNavigate } from "react-router-dom";
import Backbtn from "../../../components/back-btn";

function OTPVerification() {
    const navigate = useNavigate(null)

    const Next = ()=>{
        navigate("/username-setup-complete")
    }


    return ( 
        <>
            <div style={{width:"31.375rem"}} className="content-cover">
                <Backbtn />
                <form action="" className="acc-detail-form w-100" style={{gap:"2.5rem"}}>
                    <div>
                        <h3 className="name">OTP Verification</h3>
                        <p className="acc-detail-text">Kindly enter OTP sent to the phone number linked to your BVN</p>
                    </div>
                    <div className="d-flex gap-3">
                        <input type="text" className="otp-input" />
                        <input type="text" className="otp-input" />
                        <input type="text" className="otp-input" />
                        <input type="text" className="otp-input" />
                        <input type="text" className="otp-input" />
                        <input type="text" className="otp-input" />
                    </div>
                    <button type="submit" onClick={Next} className="login-btn ms-auto" style={{width:"11.5rem"}}>Next</button>
                </form>
                
            </div>
        </>
     );
}

export default OTPVerification;