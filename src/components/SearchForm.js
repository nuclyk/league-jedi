import React from 'react'
import { useGlobalContext } from '../context'
import { HANDLE_SEARCH } from '../utils/actions'

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()
  return (
    <form
      className='search-form'
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <input
        type='text'
        className='search-input'
        placeholder='find summoner...'
        value={query}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
      />
    </form>
  )
}

export default SearchForm
