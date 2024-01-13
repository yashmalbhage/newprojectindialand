import React from 'react'
import PropTypes from 'prop-types';
// import './missoncard.css'
import { philo } from '../../data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faCrosshairs, faBullseyePointer } from '@fortawesome/free-solid-svg-icons';

const MissonCard = ({icon, name, para}) => {
  return (
   
       
          <div className='box shadow'>
          <FontAwesomeIcon icon={icon} color=' #bc975a'/>



            <h4 style={{color:" #3b5eb0"}}>{name}</h4>
            <p>{para}</p>
          </div>
    
     
  )
}

MissonCard.propTypes = {
   
    title:PropTypes.string,
    para:PropTypes.string
}

export default MissonCard