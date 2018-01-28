import React from 'react';

const LandingPage = ({ onClick }) => {
  return (
    <div className="LandingPage">
      <h1 className="LandingPage-Header">So you think you know React?</h1>
      <button className="LandingPage-Button" onClick={ onClick }>Let's find out!</button>
    </div>
  )
}

export default LandingPage
