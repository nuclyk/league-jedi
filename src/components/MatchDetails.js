import React from 'react'
import * as img from '../utils/images'
import MatchDetailsPlayer from './MatchDetailsPlayer'
import MatchSummary from './MatchSummary'

const MatchDetails = () => {
  return (
    <section className='match-table section'>
      <table className='table-victory'>
        <thead>
          <tr>
            <th>Victory (Red Team)</th>
            <th>KDA</th>
            <th>Damage</th>
            <th>Wards</th>
            <th>CS</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          <MatchDetailsPlayer />
          <MatchDetailsPlayer />
          <MatchDetailsPlayer />
          <MatchDetailsPlayer />
          <MatchDetailsPlayer />
        </tbody>
      </table>
      <MatchSummary />
      <table className='table-defeat'>
        <thead>
          <tr>
            <th>Defeat (Red Team)</th>
            <th>KDA</th>
            <th>Damage</th>
            <th>Wards</th>
            <th>CS</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          <MatchDetailsPlayer />
          <MatchDetailsPlayer />
          <MatchDetailsPlayer />
          <MatchDetailsPlayer />
          <MatchDetailsPlayer />
        </tbody>
      </table>
    </section>
  )
}

export default MatchDetails
