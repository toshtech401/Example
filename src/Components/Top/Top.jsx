import React from 'react'
import bun from '../Images/Buns.jpg'
import dano from '../Images/dano.jpg'
import morn from '../Images/morn.jpg'
import holla from '../Images/hollandia.jpg'
import bread from '../Images/bread.jpg'
import oats from '../Images/oats.jpg'
import rai from '../Images/raisin.jpg'
import sure from '../Images/2sure.jpg'
import roll from '../Images/roll.jpg'
import oval from '../Images/oval.jpg'
import tin from '../Images/tin.jpg'
import  milo from '../Images/milo.jpg'
import oil from '../Images/oil.jpg'
import prin from '../Images/pring.jpg'
import cool from '../Images/cool.jpg'


const Top = () => {
  return (
    <div className='kkk'>
        <div className='top'>
            <h2>Top Selling Products</h2>
            <button>View More</button>
        </div>
        <div className='sell'>
            <div>
                <img src={bun} alt="" />
                <p>Buns Chelsea 6s pack</p>
                <span>₦829.99</span>
            </div>
            <div>
                <img src={dano} alt="" />
                <p>Dano Cool Cow 150G</p>
                <span>₦849.99</span>
            </div>
            <div>
                <img src={morn} alt="" />
                <p>Golden Morn 400G</p>
                <span>₦939.99</span>
            </div>
            <div>
                <img src={holla} alt="" />
                <p>Hollandia Yourghut Plain 1l pack</p>
                <span>₦979.99</span>
            </div>
            <div>
                <img src={bread} alt="" />
                <p>Sweet White Bread</p>
                <span>₦999.99</span>
            </div>
        </div>
        <div className='sell'>
            <div>
                <img src={oats} alt="" />
                <p>Cereal Oats Quaker 500G Pack</p>
                <span>₦1,169.99</span>
            </div>
            <div>
                <img src={rai} alt="" />
                <p>Bread Raisin 500G Pack</p>
                <span>₦1,184.99</span>
            </div>
            <div>
                <img src={sure} alt="" />
                <p>Original 2Sure 1L</p>
                <span>₦1,249.99</span>
            </div>
            <div>
                <img src={roll} alt="" />
                <p>Mens Roll On Nivea 50Mi, Deep</p>
                <span>₦1,259.99</span>
            </div>
            <div>
                <img src={oval} alt="" />
                <p>Malt Ovaltine 400G</p>
                <span>₦1,349.99</span>
            </div>
        </div>
        <div className='sell'>
            <div>
                <img src={tin} alt="" />
                <p>Tin Oats Quaker 500G</p>
                <span>₦1,399.99</span>
            </div>
            <div>
                <img src={milo} alt="" />
                <p>Beverage Active Go Milo 400G</p>
                <span>₦1,559.99</span>
            </div>
            <div>
                <img src={oil} alt="" />
                <p>Vegetable Oil Power 750Ml</p>
                <span>₦1,699.99</span>
            </div>
            <div>
                <img src={prin} alt="" />
                <p>Pringles 165G, Original</p>
                <span>₦1,779.99</span>
            </div>
            <div>
                <img src={cool} alt="" />
                <p>Dano Coolcow 360G Sachet</p>
                <span>₦1,829.99</span>
            </div>
        </div>
    </div>
  )
}

export default Top