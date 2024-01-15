import React from 'react'
import PropTypes from 'prop-types';


const TestBox = ({para, cliet}) => {
  return (
    <div>
    <div className="box shadow">
        <p>{para}</p>
        <br />
        <h4>{cliet}</h4>
    </div>
    </div>
  )
}


TestBox.propTypes = {
   
    cliet:PropTypes.string,
    para:PropTypes.string
}


export default TestBox