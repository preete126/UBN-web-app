import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import logo from "../../../assets/images/Union Logo.png"
import line from "../../../assets/images/Line 3.png"
import frame1 from "../../../assets/images/frame-1.png"
import frame2 from "../../../assets/images/frame-2.png"
import success from "../../../assets/images/success.png"



function RecoverUsername() {
    const query = useSearchParams()
    // console.log()
    return (
        <>
            <main className="credentials-parts">
                <section className="outline">
                    <div className="outline-cover">
                        <img src={logo} alt="" />
                        <div className="outline-content">
                            <div>
                                <h4 className="outline-header">Recover Username</h4>
                                <h6 className="caption">Follow the steps to recover your username</h6>
                            </div>
                            <div>
                                <div className="d-flex gap-3">
                                    <div className="d-flex flex-column gap-2">
                                        {
                                            query[0].get("phase") == "otp-verification" ?
                                            <img src={success} alt="" /> :
                                            <img src={frame1} alt="" />
                                        }
                                        <img src={line} width={"2rem"} className="mx-auto" alt="" />
                                    </div>
                                    <div className="step mt-1">
                                        Step 1: Account Details
                                    </div>
                                </div>
                                <div className="d-flex gap-3 mt-2">
                                    <img src={frame2} alt="" />
                                    <div className="step mt-1" style={{ color:query[0].get("phase") == "otp-verification" ? "var(--grey-6, #F2F2F2)" : "var(--grey-3, #999)", fontWeight: "200" }}>
                                        Step 2: OTP Verification
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <Outlet />
                </section>
            </main>
        </>
    );
}

export default RecoverUsername;