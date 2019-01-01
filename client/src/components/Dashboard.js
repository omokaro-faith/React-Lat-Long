import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import GoogleApiWrapper from './MapWrapper';
import { getUsers }  from '../actions/users';

class Dashboard extends Component {
  state = {
    showingInfoWindow: false,
    isLoading: true,
    activeMarker: {},
    selectedPlace: {},
    user: {
      company: {},
      address: {}
      }
  };

  onMouseoverMarker = (props, marker, e) => {
    const { users } = this.props;
    const { position } = props;
    users.filter((user) => {
      if(position === user.address.geo) {
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true,
          user
        });
      }
    });
  }

  componentDidMount() {
    this.props.getUsers();
  }

  onMouseoutMarker = (e) => {
    const { showingInfoWindow } = this.state;
    if (showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        selectedPlace: {},
        user: {
          company: {},
          address: {}
        }
      });
    }
  }

  render() {
    const { 
      showingInfoWindow,
      activeMarker,
      selectedPlace,
      user
    } = this.state;
    const {
      users,
      isLoading
    } = this.props;
    return (
      <GoogleApiWrapper
        showingInfoWindow={showingInfoWindow}
        activeMarker={activeMarker}
        selectedPlace={selectedPlace}
        onMouseoverMarker={this.onMouseoverMarker}
        users={users}
        onMouseoutMarker={this.onMouseoutMarker}
        perUserDetails={user}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers())
});

const mapStateToProps = (state) => ({
  users: state.users,
  isLoading: state.isLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);