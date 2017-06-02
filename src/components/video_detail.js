import React from 'react'

const Detail = ({video}) => {
  if (video === null) {
    return (
      <div>Loading...</div>
    )
  }

  let videoId = video.id.videoId;
  let url = 'https://www.youtube.com/embed/' + videoId;
  window.history.pushState( null, null, '/movie/$' + videoId );
  
  return (
        <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={url}></iframe>
    </div>

          <div className="details">
      <div className="video-title">{ video.snippet.title} </div>
      <div className="video-desc">{ video.snippet.description} </div>
      </div>
    </div>
  );
}

export default Detail;