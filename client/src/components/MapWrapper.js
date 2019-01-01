import React, { Fragment } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker, Polyline } from 'google-maps-react';
import Loader from 'react-loader-spinner'

const LoadingContainer = (props) => (
  <div className="loaderItem">
    <Loader
      type="ThreeDots"
      color="#6497b1"
      height="100"	
      width="100"
    />
  </div>
)

const mapStyles = {
  width: '100%',
  height: '100%'
};

export const MapContainer = (props) => {
  const {
    users,
    onMouseoverMarker,
    onMouseoutMarker,
    activeMarker,
    showingInfoWindow,
    perUserDetails,
    google
  } = props;
  const renderMarker = () => {
    return users.map((user) => {
      return (<Marker
        key={user.id}
        onMouseover={onMouseoverMarker}
        position={user.address.geo}
        onMouseout={onMouseoutMarker}
      />)
    })
  }
  const renderInfoWindow = () => {
    return (<InfoWindow
      marker={activeMarker}
      visible={showingInfoWindow}
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
  apiKey: '',
  LoadingContainer
})(MapContainer);