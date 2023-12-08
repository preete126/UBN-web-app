import logo from "../assets/images/Union Logo.png"


function Auth_layout1({children}) {
    return (
        <>
            <main className="background ">
                <div>
                    <img src={logo} alt="" />
                </div>
                <section className="parts">

                    <div id="demo" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators me-auto ms-0 mb-0 w-25">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner mb-4">
                            <div className="carousel-item active">
                                <div className="bigtext">
                                    Manage Your Finances Simply and <b className="fw-bold">Easily</b>
                                </div>
                                <p className="smalltext">Control your accounts, make payments, and transfer money, <br /> all from your phone</p>

                            </div>
                            <div className="carousel-item ">
                                <div className="bigtext">
                                    Manage Your Money, Your <b className="fw-bold">Own Way</b>
                                </div>
                                <p className="smalltext">Get real-time account balances and transaction <br /> history</p>
                            </div>
                            <div className="carousel-item ">
                                <div className="bigtext">
                                    Your Secure and Reliable For You <b className="fw-bold">To Use</b>
                                </div>
                                <p className="smalltext">This is your one-stop shop for all things <br /> financial</p>
                            </div>

                        </div>


                    </div>

                    {children}
                </section>
                <button className="forgotten-password mt-5 ms-auto">
                    <a href="#" className="new">Find us</a>
                    <span>|</span>
                    <a href="#" className="new">Get help</a>
                </button>
            </main>
        </>
    );
}

export default Auth_layout1;