import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../utils/fetchAPI'
// import test from '../utils/test.json'
import { Category, Videos } from './'

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('예능')
  const [videos, setVideos] = useState(null)
  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectCategory}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [selectCategory])
  // const [videos, setVideos] = useState(test.items)
  // useEffect(() => {
  //   setVideos(test.items)
  // }, [])

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>

      <section id="contents">
        <h2>
          <em>{selectCategory}</em> ↓↓↓↓
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  )
}

export default MainConts
