import React from "react";
import PromotionHeader from "./PromotionHeader";
import '../Promotion/Promotion.css'
import smile from '../Images/smile.png'
import Footer from "../Footer";


const Promotion = () => {
    return(
        
        <div>
            <PromotionHeader />
            <div className="prom">
                <h1>Watch Out</h1>
                <p>for our upcoming promotions!!!</p>
                <img src={smile} alt="" />
            </div>
            <Footer />
        </div>
    )
}

export default Promotion ;