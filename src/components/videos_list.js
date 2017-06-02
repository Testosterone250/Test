import React from 'react'
import Item from './video_item'

const List = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.map((video) => {
        return <Item 
        onVideoSelect={props.onVideoSelect} 
        video={video} 
        key={video.etag} /> })}
    </ul>
  )
}

export default List