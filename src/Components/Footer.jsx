import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='foot'>
        <div className='feet'>
          <h3>QUICK LINKS</h3>
          <ol>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
          </ol>
        </div>
        <div className='feet'>
          <h3>EXPLORE</h3>
          <ol>
            <li>Bakery & Deli</li>
            <li>Baby</li>
            <li>Recipes</li>
            <li>Butchery</li>
            <li>Liquor</li>
          </ol>
        </div>
        <div className='feet'>
          <h3>TREMS & CONDITIONS</h3>
          <ol>
            <li>Cookie Policy</li>
            <li>Data Privacy Statement</li>
            <li>Website Usage Policy</li>
          </ol>
        </div>
      </div>
      <p>&copy; Retail Supermarkets Nigeria Limited {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  )
}

export default Footer