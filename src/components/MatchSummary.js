import React from 'react'

const MatchSummary = () => {
  return (
    <div className='match-summary'>
      <div className='match-objectives'>
        <img src='./img/icon-baron.jpg' className='baron-icon' alt='' /> 1
        <img src='./img/icon-dragon.jpg' className='baron-icon' alt='' /> 3
        <img src='./img/icon-tower.jpg' className='baron-icon' alt='' /> 4
      </div>
      <div>
        <div className='total-bar kills'>
          <p>Total Kills</p>
          <div></div>
        </div>
        <div className='total-bar gold'>
          <p>Total Gold</p>
          <div></div>
        </div>
      </div>
      <div className='match-objectives'>
        <img src='./img/icon-baron.jpg' className='baron-icon' alt='' /> 2
        <img src='./img/icon-dragon.jpg' className='baron-icon' alt='' /> 5
        <img src='./img/icon-tower.jpg' className='baron-icon' alt='' /> 3
      </div>
    </div>
  )
}

export default MatchSummary
