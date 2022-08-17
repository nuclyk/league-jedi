import React from 'react'
import * as img from '../utils/images'

const MatchDetailsPlayer = () => {
  return (
    <tr>
      <td className='cell-1'>
        <img src={img.champion} className='item-1' alt='' />
        <div className='item-2'>
          <img src={img.sumSpel1} alt='' />
          <img src={img.sumSpel2} alt='' />
          <img src={img.rune1} alt='' />
          <img src={img.rune2} alt='' />
        </div>
        <div className='item-3'>
          <p>Player Name</p>
          <span className='small-text'>Grandmaster</span>
        </div>
      </td>
      <td className='cell-2'>
        <p>5/3/12 (41%)</p>
        <p>5.67:1</p>
      </td>
      <td className='cell-3'>
        <div className='item-1'>23,160</div>
        <div className='item-2'></div>
      </td>
      <td className='cell-3'>
        <p>0</p>
        <p>9 / 1</p>
      </td>
      <td className='cell-4'>
        <p>181</p>
        <p>6.2/m</p>
      </td>
      <td className='cell-5'>
        <img src={img.item1} alt='' />
        <img src={img.item2} alt='' />
        <img src={img.item3} alt='' />
        <img src={img.item4} alt='' />
        <img src={img.item5} alt='' />
        <img src={img.item6} alt='' />
        <img src={img.item7} alt='' />
      </td>
    </tr>
  )
}

export default MatchDetailsPlayer
