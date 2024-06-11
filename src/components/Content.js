import React from 'react'
import './style.css'

const Content = () => {
    return (
        <div>
            <div className="container">
                 <div className="text">

                    <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="shopping-btn">
                    <button className="shop-btn"><a href="/">Shop Now</a></button>
                    <button className="sec-btn"><a href="/">Category</a></button>
                </div>
                <div className='avaliable'>
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/images/flipkart.png" alt="flipkart"></img>
                        <img src="/images/amazon.png" alt="amazon"></img>
                    </div>
                </div>

            </div>
            <div className="content-image">
                <img src="/images/shoe_image.png" alt="shoe_image"></img>
            </div>
        </div>
    </div>
    )
}

export default Content