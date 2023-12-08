import Backbtn from "../../../components/back-btn";
import info_circle from "../../../assets/images/info-circle.png";
import { useNavigate } from "react-router-dom";



function AccountDetails() {
    const navigate = useNavigate(null)



    const Nextpage = ()=>{
        navigate("/recover-username/2?phase=otp-verification")
    }



    return (
        <>
            <div style={{width:"31.375rem"}} className="content-cover">
                <Backbtn />
                <form action="" className="acc-detail-form w-100">
                    <div>
                        <h3 className="name">Account Details</h3>
                        <p className="acc-detail-text">Kindly provide your account number</p>
                    </div>
                    <input type="text" placeholder="Username or Phone Number" />
                    <button type="submit" onClick={Nextpage} className="login-btn ms-auto" style={{width:"11.5rem"}}>Next</button>
                </form>
                <div className="info">
                    <img src={info_circle} alt="" />
                    <span>A maximum limit restriction of NGN20,000.00 would be placed on the account for 24hours</span>
                </div>
            </div>
        </>
    );
}

export default AccountDetails;