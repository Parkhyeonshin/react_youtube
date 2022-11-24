import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Videos } from './'

const SearchConts = () => {
  const [videos, setVideos] = useState(null)
  const { searchTerm } = useParams()
  console.log(searchTerm)
  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  return (
    <>
      <div className="result">
        <em>{searchTerm}</em> 을(를) 검색하였습니다.
      </div>
      <div className="searchVideo__inner">
        <Videos videos={videos} />
      </div>
    </>
  )
}

export default SearchConts
