import React from "react";

function HomeButtons() {
    return (
        <div className="homeButtons">
          <button 
          className="homeButtons__touchdown"
          // onClick={() => setHomeScore(homeScore + 7)} // click handler works
          >Home Touchdown</button>
          <button 
          className="homeButtons__fieldGoal"
          // onClick={() => setHomeScore(homeScore + 3)} // click handler works 
          >Home Field Goal</button>
        </div>
    );
}

export default HomeButtons;