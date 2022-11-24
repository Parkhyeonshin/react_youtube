import React, { useState } from 'react'
import { SlMagnifier } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSearch()
    }
  }

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <div className="search" onKeyPress={onKeyPress}>
      <label htmlFor="searchInput" className="glass">
        <SlMagnifier />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__searc"
        placeholder="유튜버 검색"
        title="검색"
        value={searchTerm || ''}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
