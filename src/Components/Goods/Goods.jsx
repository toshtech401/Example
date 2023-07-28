import React from 'react'
import whisk from '../Images/Whiskey.jpg'
import toy from '../Images/toys.jpg'
import soft from '../Images/soft.jpg'
import clean from '../Images/clean.jpg'
import snack from '../Images/snacks.jpg'
import coffee from '../Images/coffee.jpg'
import lipuor from '../Images/liquor.jpg'
import per from '../Images/personal.jpg'
import home  from '../Images/home.jpg'
import wine from '../Images/wine.jpg'
import food from '../Images/food.jpg'
import bake from '../Images/bakery.jpg'
const Goods = () => {
  return (
    <div className='kk'>
        <div className='mid'>
            <img src={whisk} alt="" />
            <img src={toy} alt="" />
        </div>
        <div className='kkk'>
            <div className='top'>
                <h2>Products</h2>
                <button>View More</button>
            </div>
            <div className='pro'>
                <div>
                    <img src={soft} alt="" />
                    <p>Soft Drinks</p>
                </div>
                <div>
                    <img src={clean} alt="" />
                    <p>Cleaning</p>
                </div>
                <div>
                    <img src={snack} alt="" />
                    <p>Snacks</p>
                </div>
                <div>
                    <img src={coffee} alt="" />
                    <p>Coffee Tea</p>
                </div>
                <div>
                    <img src={lipuor} alt="" />
                    <p>Liquor</p>
                </div>
            </div>
            <div className='pro'>
                <div>
                    <img src={per} alt="" />
                    <p>Personal Care</p>
                </div>
                <div>
                    <img src={home} alt="" />
                    <p>Appliances</p>
                </div>
                <div>
                    <img src={wine} alt="" />
                    <p>Wine</p>
                </div>
                <div>
                    <img src={food} alt="" />
                    <p>Foods</p>
                </div>
                <div>
                    <img src={bake} alt="" />   
                    <p>Bakery</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Goods