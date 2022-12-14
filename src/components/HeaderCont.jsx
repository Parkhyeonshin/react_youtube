import React from 'react'
import { SearchBar } from './'
import { Link } from 'react-router-dom'

import { SlSocialYoutube } from 'react-icons/sl'
const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <SlSocialYoutube className="icon" />
          Dev Youtube
        </Link>
      </h1>
      <SearchBar />

      {/* <div className="search">
        <label htmlFor="searchInput" className="glass">
          <SlMagnifier />
        </label>
        <input
          type="text"
          id="searchInput"
          className="input__searc"
          placeholder="개발자 유튜버 검색"
          title="검색"
        />
      </div> */}
    </header>
  )
}

export default HeaderCont
