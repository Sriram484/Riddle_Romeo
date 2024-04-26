import React, { useEffect, useState } from 'react'
import "../../Assets/CSS/LeaderBoard.css"
import goldCup from '../../Assets/Images/gold.png'; // Import gold cup image
import silverCup from '../../Assets/Images/silver.jpeg'; // Import silver cup image
import bronzeCup from '../../Assets/Images/bronze.jpeg';


const LeaderBoardProfiles = ({leaderboard}) => {
    console.log(leaderboard);
   
    return (
        <div id="profile">
            {Item(leaderboard)}
        </div>
  )
}

function getMedalImage(index) {
    switch (index) {
        case 0:
            return goldCup;
        case 1:
            return silverCup;
        case 2:
            return bronzeCup;
        default:
            return null;
    }
}


function Item(data){
    console.log(data);
    return (
        
        <div className='Leader'>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className='itemNumber'>
                            {index+1}
                        </div>

                        <div className="item">
                            <img src={value.image} alt="" style={{ maxWidth: "100%", height: "87px" }} />
                        </div>
                        <div className="info" style={{ flex: 1 }}>
                            <h3 className='name text-dark'>{value.name}</h3>    
                            <span>{value.country}</span>
                        </div>                
                        <div className="item" style={{ textAlign: "right", minWidth: "50px" }}>
                            <span>{value.score}</span>
                        </div>
                    </div>

                
                    )
                )
            }
        </div>


)
}
export default LeaderBoardProfiles
