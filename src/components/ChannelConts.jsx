import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import Videos from './Videos'

const ChannelConts = () => {
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    const fetchResult = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`)
      setChannelDetail(data?.items[0])
      console.log(data?.items[0])

      const videosData = await fetchAPI(
        `search?channelId=${id}&part=snippet&order=date`
      )
      setVideos(videosData?.items)
    }
    fetchResult()
  }, [id])

  return (
    <section id="channelConts">
      <div
        className="channel-header"
        style={{
          backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
        }}
      ></div>
      <div className="channel-infoWrap">
        <div className="channel-info">
          <img
            src={channelDetail?.snippet?.thumbnails?.medium?.url}
            alt="주인장이미지"
          />
          <div>
            <h3>{channelDetail?.snippet?.title}</h3>
            <div className="channel_sub">
              · sub : {channelDetail?.statistics?.subscriberCount}
            </div>
            <div className="channel_video">
              · video : {channelDetail?.statistics?.videoCount}
            </div>
            <div className="channel_view">
              · view : {channelDetail?.statistics?.viewCount}
            </div>
          </div>
        </div>
      </div>
      <div className="channel-videos channelcontainer">
        <Videos videos={videos} />
      </div>
    </section>
  )
}

export default ChannelConts
