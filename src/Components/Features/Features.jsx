import React from 'react'
import corn from '../Images/corn.jpg'
import egg from '../Images/egg.jpg'
import band from '../Images/band.jpg'
import beer from '../Images/beer.jpg'
import prin from '../Images/prin.jpg'
import milk from '../Images/milk.jpg'
import red from '../Images/red.jpg'
import blen from '../Images/blen.jpg'
import dettol from '../Images/dettol.jpg'
import juice from '../Images/juice.jpg'
const Features = () => {
  return (
    <div>
        <div className='kkk'>
            <div className='top'>
                <h2>Features</h2>
                <button>View More</button>
            </div>
            <div className='proo'>
                <div>
                    <img src={corn} alt="" />
                    <p>Nasco Corn Flakes 350ml</p>
                    <span>₦1.199.99</span>
                </div>
                <div>
                    <img src={egg} alt="" />
                    <p>Ferrero Rocher Chocolate</p>
                    <span>₦6,500.00</span>
                </div>
                <div>
                    <img src={band} alt="" />
                    <p>Blue Band Spread For</p>
                    <p>Bread 12x900G</p>
                    <span>₦4,119.99</span>
                </div>
                <div>
                    <img src={beer} alt="" />
                    <p>Beer Lager Heineken</p>
                    <p>330ML Sleek</p>
                    <span>₦369.99</span>
                </div>
                <div>
                    <img src={prin} alt="" />
                    <p>Chips Pringles 165G</p>
                    <span>₦1,699.99</span>
                </div>
            </div>
            <div className='proo'>
                <div>
                    <img src={milk} alt="" />
                    <p>Milk Powder Full Cream</p>
                    <p>Peak 850G pack</p>
                    <span>₦4,999.99</span>
                </div>
                <div>
                    <img src={red} alt="" />
                    <p>Natural Sweet Red Four </p>
                    <p>Cousins 750Ml</p>
                    <span>₦3,999.99</span>
                </div>
                <div>
                    <img src={blen} alt="" />
                    <p>Blender BLG 402 Binatone</p>
                    <span>₦28,399.99</span>
                </div>
                <div>
                    <img src={dettol} alt="" />
                    <p>Bath Dettol 110G, Original</p>
                    <span>₦549.99</span>
                </div>
                <div>
                    <img src={juice} alt="" />   
                    <p>Juice Pulpy Orange 5</p>
                    <p>Alive 850ML</p>
                    <span>₦449.99</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features