import React from "react";

function AwayButtons(props) {
    console.log('Awaybuttons', props);
    const setAwayScore = props.fromParentSet;
    const awayScore = props.fromParentAway;
    return (
        <div className="awayButtons">
          <button 
          className="awayButtons__touchdown"
          onClick={() => setAwayScore(awayScore + 7)} // click handler works
          >Away Touchdown</button>
          <button 
          className="awayButtons__fieldGoal"
          onClick={() => setAwayScore(awayScore + 3)} // click handler works
          >Away Field Goal</button>
        </div> 
    );
}

export default AwayButtons;