import React, { useEffect, useState } from 'react'
import LeaderBoardProfiles from './LeaderBoardProfiles';
import "../../Assets/CSS/LeaderBoard.css"
import Navigation from './Navigation';
import { getResultArray } from '../Functions/LeaderBoard';

const LeaderBoard = ({ userStatus }) => {
  const [btns, setBtns] = useState({
    overAll: true,
    weekly: false,
    events: false
  });
  const toggleButton = (btn) => {
    setBtns(prevState => {
      const newState = {
        overAll: false,
        weekly: false,
        events: false
      };
      newState[btn] = true;
      return newState;
    });

  };
  const [leaderboard, setLeaderboard] = useState([]);

  //Fetch the leader board
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        //LeaderBoard Function
        const resultArray = await getResultArray();
        setLeaderboard(resultArray);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboard();
  }, [btns]);


  return (
    <div>
      <Navigation userStatus={userStatus} />
      <div id='main'>
        <div className="board">
          <h1 className='leaderboard'>Leaderboard</h1>

          <div className='LeaderButtonContainer'>
            <button
              className={btns.overAll ? "ActiveBtn LeaderButton" : "LeaderButton"}
              onClick={() => toggleButton("overAll")}
              value="overAll"
            >
              Over All
            </button>
            <button
              className={btns.weekly ? "ActiveBtn LeaderButton" : "LeaderButton"}

              onClick={() => toggleButton("weekly")}
              value="weekly"
            >Weekly</button>
            <button
              className={btns.events ? "ActiveBtn LeaderButton" : "LeaderButton"}
              onClick={() => toggleButton("events")}
              value="events"
            >Events</button>

          </div>

          <LeaderBoardProfiles leaderboard={leaderboard} />

        </div>
      </div>
    </div>

  )
}

export default LeaderBoard
