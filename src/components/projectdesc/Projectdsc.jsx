import React, { useState } from 'react';
import './projectdesc.css'; // Import your CSS file

const YourComponent = ({ sections }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const steps = sections.map((section) => section.title);
  const progressWidth = (activeStep ) * (25);

  return (
    <div>
      {/* <h1>Our Process</h1> */}
      <br />
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            {steps.map((step, index) => (
              <li
                key={index}
                className={`step step0${index + 1} ${index <= activeStep ? 'active' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                <span>{index}</span>
              </li>
            ))}
          </ul>

          <div id="line">
            <div
              id="line-progress"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
        </div>

        <div id="progress-content-section">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`section-content ${index === activeStep ? 'active' : ''}`}
            >
              <h2>{section.title}</h2>
              <p>{section.paragraph}</p>
              {section.amenities && section.amenities.length > 0 && (
                <div>
                  <h3>Amenities:</h3>
                  <ul>
                    {section.amenities.map((amenity, i) => (
                      <li key={i}>{amenity}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
