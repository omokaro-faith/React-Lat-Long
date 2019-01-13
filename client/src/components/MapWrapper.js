import React, { Fragment } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker, Polyline } from 'google-maps-react';
import Loader from 'react-loader-spinner'
import LoadingContainer from './LoadingContainer';


const mapStyles = {
  width: '100%',
  height: '100%',
  top: '5px'
};

export const MapContainer = (props) => {
  const {
    users,
    onClickMarker,
    onCloseWindow,
    activeMarker,
    showingInfoWindow,
    perUserDetails,
    google
  } = props;
  const renderMarker = () => {
    return users.map((user) => {
      return (<Marker
        key={user.id}
        onClick={onClickMarker}
        position={user.address.geo}
      />)
    })
  }
  const renderInfoWindow = () => {
    return (<InfoWindow
      marker={activeMarker}
      visible={showingInfoWindow}
      onClose={onCloseWindow}
      >
      <div className="info-window-text">
        <h2>{perUserDetails.name}</h2>
        Below is {perUserDetails.name} peronal information.
        <p>Company Name: {perUserDetails.company.name}</p>
        <p>Address: {`${perUserDetails.address.suite}, ${perUserDetails.address.street} ${perUserDetails.address.city}.`}</p>
        <p>Website: {perUserDetails.website}</p>
      </div>
    </InfoWindow>)
  }

  return (
      <Map
        google={google}
        zoom={2.2}
        className={'map'}
        style={mapStyles}
      >
      {renderMarker()}
      {renderInfoWindow()}
      </Map>
  )
}

MapContainer.defaultProps = {
 users: []
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  LoadingContainer
})(MapContainer);
