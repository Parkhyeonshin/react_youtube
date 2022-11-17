import React from 'react'
import { VideoCard, Loader } from '../components'

const Videos = ({ videos }) => {
  console.log(videos)
  if (!videos?.length) return <Loader /> //로딩되기전(갯수파악전)에는 로더소스 출력해줌.    '?'는 없어도 출력해준단뜻 ?몰라~~
  return (
    <article className="videos__inner">
      {videos.map((item, idx) => (
        <VideoCard key={idx} video={item} />
      ))}
    </article>
  )
}

export default Videos
