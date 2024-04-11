import React from 'react'
import LOGO from '../Assets/Images/30.jpeg'
import "../Assets/CSS/TrendingQuizCard.css"


const TrendingQuizCard = ({category,Level,Number_of_Questions,imageUrl,Type,Points}) => {
    var description = "We are on a very excited journey towards version 3.0 of this component which will be rewritten in hooks/context completely. It means smaller bundle size, performance improvement and easier customization of the component and so many more benefits.";
    console.log(`../Assets/Images/${imageUrl}.jpeg`);
    return (
        <div className="card">
           
            <div className='container'>
            <img className="product--image" src={require(`../Assets/Images/${imageUrl}.jpeg`)}  alt="product image" />
          </div>
          <h5>Category:{category}</h5>
          <div className='TrendingQuizCardBody'>
            <p style={{color:"black"}}>Level:{Level}</p>
            <p style={{color:"black"}}>Number of Questions:{Number_of_Questions}</p>
            <p style={{color:"black"}}>Type:{Type}</p>
            <p style={{color:"black"}}>Points:{Points}</p>
          </div>
          
          <div className="btn">
            <button id="cart">Do Now</button>
        </div>
        </div>
      );
}

export default TrendingQuizCard
