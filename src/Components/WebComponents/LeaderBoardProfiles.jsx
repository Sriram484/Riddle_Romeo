import React from 'react'
import "../../Assets/CSS/LeaderBoard.css"
import goldCup from '../../Assets/Images/Trophies/gold.png'; // Import gold cup image
import silverCup from '../../Assets/Images/Trophies/silver.jpeg'; // Import silver cup image
import bronzeCup from '../../Assets/Images/Trophies/bronze.jpeg';


const LeaderBoardProfiles = ({ leaderboard }) => {


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


function Item(data) {

    return (

        <div className='Leader'>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className='itemCup'>
                            <img src={getMedalImage(index)} alt="" style={{ width: "30px", height: "30px" }} />
                        </div>
                        <div className='itemNumber'>
                            {index + 1}
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
