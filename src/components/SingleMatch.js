import React from 'react'
import * as img from '../utils/images'

const SingleMatch = () => {
  return (
    <article className='match victory'>
      <div className='match-result'>
        <h4 className='match-type'>Ranked Solo</h4>
        <p>2 days ago</p>
        <div className='underline'></div>
        <p className='success'>Victory</p>
        <p>22 min 57 sec</p>
      </div>
      <div className='player'>
        <div className='player-icon'>
          <img src={img.playerIcon} className='player-champ' alt='' />
        </div>
        <div className='player-spells'>
          <img src={img.sumSpel1} alt='' />
          <img src={img.sumSpel2} alt='' />
          <img src={img.rune1} alt='' />
          <img src={img.rune2} alt='' />
        </div>
        <div className='player-items'>
          <img src={img.item1} alt='' />
          <img src={img.item2} alt='' />
          <img src={img.item3} alt='' />
          <img src={img.item4} alt='' />
          <img src={img.item5} alt='' />
          <img src={img.item6} alt='' />
          <img src={img.item7} alt='' />
        </div>
      </div>
      <div className='match-info'>
        <p className='danger'>P/Kill 80%</p>
        <p>Control Ward 2</p>
        <div className='underline'></div>
        <p>CS 190 (6.5)</p>
        <p>Grandmaster</p>
      </div>
      <div className='match-players'>
        <div className='team-1'>
          <p>
            <img src={img.champIconSmall1} alt='' />
            Player name 1
          </p>
          <p>
            <img src={img.champIconSmall2} alt='' />
            Player name 1
          </p>
          <p>
            <img src={img.champIconSmall3} alt='' />
            Player name 1
          </p>
          <p>
            <img src={img.champIconSmall4} alt='' />
            Player name 1
          </p>
          <p>
            <img src={img.champIconSmall5} alt='' />
            Player name 1
          </p>
        </div>
        <div className='team-2'>
          <p>
            <img src={img.champIconSmall1} alt='' />
            Player name 1
          </p>
          <p>
            <img src={img.champIconSmall2} alt='' />
            Player name 1
          </p>
          <p>
            <img src={img.champIconSmall3} alt='' />
            Player name 1
          </p>
          <p>
            <img src={img.champIconSmall4} alt='' />
            Player name 1
          </p>
          <p>
            <img src={img.champIconSmall5} alt='' />
            Player name 1
          </p>
        </div>
      </div>
    </article>
  )
}

export default SingleMatch
