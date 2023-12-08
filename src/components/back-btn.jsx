import { useNavigate } from "react-router-dom";
import arrow_left from "../assets/images/arrow-left.png"



function Backbtn() {
    const navigate = useNavigate(null)

    const back = ()=>{
        navigate(-1)
    }


    return ( 
        <>
            <button type="button" onClick={back} className="back-btn">
                <img src={arrow_left} alt="" />
                <span>Back</span>
            </button>
        </>
     );
}

export default Backbtn;