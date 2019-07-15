import React from "react";
import Timer from './timer';

function ScoreBoard(props) {
    console.log(props);
    return (
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            <div className="home__score">{props.homeScoreParent}</div>
          </div>

          {/* timer is now it's own component */}
          <Timer />
          {/* <div className="timer">00:03</div> */}

          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{props.awayScoreParent}</div>
          </div>
        </div>
    );
}

export default ScoreBoard;