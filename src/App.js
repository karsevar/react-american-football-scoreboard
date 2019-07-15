//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ScoreBoard from './ScoreBoard';
import { useState, useEffect } from 'react';



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [awayScore, setAwayScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);

  // Stretch goal: creating a timer hook using useEffect
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {

  })

  return (
    <div className="container">
      <section className="scoreboard">

        {/*Following markup is in ScoreBoard.js*/}

        {/* <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div> */}

        <ScoreBoard homeScoreParent={homeScore} awayScoreParent={awayScore} />

        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button 
          className="homeButtons__touchdown"
          onClick={() => setHomeScore(homeScore + 7)} // click handler works
          >Home Touchdown</button>
          <button 
          className="homeButtons__fieldGoal"
          onClick={() => setHomeScore(homeScore + 3)} // click handler works 
          >Home Field Goal</button>
        </div>
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
      </section>
    </div>
  );
}

export default App;
