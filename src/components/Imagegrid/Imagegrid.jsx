import React from 'react'
import './imagegrid.css'
import PropTypes from 'prop-types';

const Imagegrid = ({img1, img2, img3, img4, img5}) => {
  return (
    <div style={{marginTop:'2%', padding:"5%"}}>
        <div className="image-grid">
		<img className="image-grid-col-2 image-grid-row-2" src={img1} alt="architecture"/>
		<img src={img2} alt="architecture"/>
		<img src={img3} alt="architecture"/>
		<img src={img4} alt="architecture"/>
		<img src={img5} alt="architecture"/>
	</div>
    </div>

  )

}
Imagegrid.propTypes = {
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    img3: PropTypes.string.isRequired,
    img4: PropTypes.string.isRequired,
    img5: PropTypes.string.isRequired,

  };

export default Imagegrid