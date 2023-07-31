import React from 'react'
import delii from '../Images/delii.jpg'
import fruits from '../Images/fruits.jpg'
import meat from '../Images/meat.jpg'
import reci from '../Images/recipes.png'
import liqu from '../Images/liq.jpg'
import baby from '../Images/baby.png'

const Explore = () => {
  return (
    <div className='explore'>
        <div>
            <h1>Explore Shoprite</h1>
        </div>
        <div className='last'>
            <div className='las'>
                <img src={delii} alt="" />
                <span>Bakery & Deli</span>
                <p>We serve delicious, fresh-baked goods and deli sandwiches to our community for years. We believe in using only the freshest ingredients, and all of our bread and pastries are made....</p>
                <button>Read more</button>
            </div>
            <div className='las'>
                <img src={fruits} alt="" />
                <span>Fruits & vegetables</span>
                <p>Providing the freshest & highest quality vegetables and fruits to our customers. Our produce is sources from local farmers and markets, and we make sure to inspect eacg item to ensure it meets</p>
                <button>Read more</button>
            </div>
            <div className='las'>
                <img src={meat} alt="" />
                <span>Meat & Poultry</span>
                <p>Delicious as a roast with crisp crackling, irresistible as stickt finger-licking ribs dripping with mouth-watering flavour, or flash fried and served in a fragrant stir-fry, pork really is the most versatile...</p>
                <button>Read more</button>
            </div>
        </div>
        <div className='last'>
            <div className='las'>
                <img src={reci} alt="" />
                <span>Recipes</span>
                <p>A Recipe is a formula of ingredients and a list of instructions for creating prepared foods. It is used to control quality, quantity, and food costs in a foodservice operation</p>
                <button>Read more</button>
            </div>
            <div className='las'>
                <img src={liqu} alt="" />
                <span>Wine & Liquor</span>
                <p>A Shoprite, we've made sure to stock the widest range of your favourite drinks, all at supermarket prices. From truly exclusive whiskies to the world's top wines, it's never been more</p>
                <button>Read more</button>
            </div>
            <div className='las'>
                <img src={baby} alt="" />
                <span>Baby</span>
                <p>Welcome to our Baby Hub! From pregnancy to your baby's first steps, we've got all the baby tips you need to know for your child's development. We'll be your guide as expected parents through....</p>
                <button>Read more</button>
            </div>
        </div>
    </div>
  )
}

export default Explore