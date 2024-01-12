import React from 'react';
import PropTypes from 'prop-types';
import './Videobg.css';
// import '../project3/'

const VideoBackground = ({ videoFile, title }) => {
  return (
    <div className="video-background">
      <video autoPlay  className="video" controls="controls"  preload='auto' loop muted playsInline  >
        <source src={videoFile} type="video/mp4" />
       
      </video>
      {/* Your content goes here */}
      <div className="contentvideo">
        <h1>{title}</h1>
        {/* <p>Y</p> */}
      </div>
    </div>
  );
};

VideoBackground.propTypes = {
  videoFile: PropTypes.string.isRequired,
};

export default VideoBackground;
