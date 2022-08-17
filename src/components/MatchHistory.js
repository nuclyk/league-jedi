import React from 'react'
import MatchDetails from './MatchDetails'
import SingleMatch from './SingleMatch'

const MatchHistory = () => {
  return (
    <section className='matches section'>
      <SingleMatch />
      <MatchDetails />
      <SingleMatch />
    </section>
  )
}

export default MatchHistory
