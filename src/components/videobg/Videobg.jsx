import React from 'react';
import PropTypes from 'prop-types';
import './Videobg.css';
// import '../project3/'

const VideoBackground = ({ videoFile, title, buttonText }) => {
  return (
    <div className="video-background">
      <video autoPlay  className="video"   preload='auto' loop muted playsInline  >
        <source src={videoFile} type="video/mp4" />
       
      </video>
      {/* Your content goes here */}
      <div className="contentvideo">
        <h1>{title}</h1>
        <a href='/contact'>{buttonText && <button className='btn4' style={{marginTop:"5%", background:"#bc975a"}}>{buttonText}</button>}       
</a>
        {/* <p>Y</p> */}
      </div>

    </div>
  );
};

VideoBackground.propTypes = {
  videoFile: PropTypes.string.isRequired,
};

export default VideoBackground;
