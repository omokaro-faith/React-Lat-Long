import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import GoogleApiWrapper from './MapWrapper';
import { getUsers }  from '../actions/users';

export class Dashboard extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    user: {
      company: {},
      address: {}
      }
  };

  onClickMarker = (props, marker) => {
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

  componentDidMount(props, state) {
    this.props.getUsers();
  }

  onCloseWindow = () => {
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
      users
    } = this.props;
    return (
      <GoogleApiWrapper
        showingInfoWindow={showingInfoWindow}
        activeMarker={activeMarker}
        selectedPlace={selectedPlace}
        onClickMarker={this.onClickMarker}
        users={users}
        onCloseWindow={this.onCloseWindow}
        perUserDetails={user}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers())
});

const mapStateToProps = (state) => ({
  users: state.users.users
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
