import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams, Link } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Videos, Loader } from '../components'
const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )
    // relatedToVideoId 있어야 플레이 가능
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])
  //   const {
  //     snippet: { title, channelId, channelTitle },
  //     statistics: { viewCount, likeCount },
  //   } = videoDetail

  if (!videos?.length) return <Loader />
  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__inner">
          <div className="left">
            <div className="video">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
              />
            </div>
            <div className="desc">
              <div className="tag">
                {videoDetail.snippet?.tags.map((e, i) => (
                  <span>#{e}</span>
                ))}
              </div>
              <span className="title">{videoDetail.snippet?.title}</span>
              <div className="channel">
                <Link to={`/channel/${videoDetail.snippet?.channelId}`}>
                  {videoDetail.snippet?.channelTitle}
                </Link>
              </div>
              <div className="count">
                <span className="view">
                  조회수 : {videoDetail.statistics?.viewCount}회
                </span>
                <span className="Like">
                  💕
                  {videoDetail.statistics?.likeCount}
                </span>
              </div>
            </div>
          </div>
          <div className="right Viewside">
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default VideoConts

// import React, { useEffect, useState } from 'react'
// import ReactPlayer from 'react-player'
// import { useParams } from 'react-router-dom'
// import { fetchAPI } from '../utils/fetchAPI'

// const VideoConts = () => {
//   const [videoDetail, setVideoDetail] = useState(null)
//   const [videos, setVideos] = useState(null)
//   const { id } = useParams()

//   useEffect(() => {
//     fetchAPI(`videos?parts=snippet,statistics&id=${id}`).then((data) =>
//       setVideoDetail(data.items[0])
//     )
//     fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).thed(
//       (date) => setVideos(data.items)
//     )
//   }, [id])

//   //   const {
//   //     snippet: { title, channelId, channelTitle },
//   //     statistics: { viewCount, likeCount },
//   //   } = videoDetail

//   return (
//     <section className="videoConts">
//       <div className="container">
//         <div className="video__inner">
//           <div className="left">
//             <div className="play">
//               <ReactPlayer
//                 url={`https://www.youtube.com/watch?v=${id}`}
//                 controls
//               />
//             </div>
//             <div className="desc"></div>
//           </div>
//           <div className="right"></div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default VideoConts
