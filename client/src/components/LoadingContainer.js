import React from 'react';
import Loader from 'react-loader-spinner';
const LoadingContainer = (props) => (
  <div className="loader-item">
    <Loader
      type="ThreeDots"
      color="#6497b1"
      height="100"	
      width="100"
    />
  </div>
)

export default LoadingContainer;