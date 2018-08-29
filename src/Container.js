import  React, { Component } from 'react'
import './Infowindow.css'
import errorIcon from './error.svg'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class Container extends Component {
  
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
  
  //get Information when you click on marker
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
});

   render() {
        const style = {
            width: '100vw',
            height: '100vh'
          }
      
      return (
        <main className={this.props.menu === true? "map" : "fullMap"} aria-label="Google map with different markers" role="application" >
        <Map google={this.props.google} style={style}
        initialCenter={{
          lat:  47.2145717,
          lng:  -1.5561491
        }}
        zoom={13}>
 

        {this.props.locations.map((location) => (
          
           <Marker onClick={this.onMarkerClick} 
              key={location.id}
              title={location.title} 
              name={location.title} 
              content={location.content}
              position={{lat: location.location.lat, lng: location.location.lng }} 
              animation={(this.state.selectedPlace.title === location.title) && this.props.google.maps.Animation.BOUNCE} 
              ref={this.props.setMarkers}
              aria-label="Location marker"/>
          ))
        }
        
  
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          maxWidth={350} 
          aria-label="Information window for locations"
          >
            <div className="infoWindow">
              <h1>{this.state.selectedPlace.name}</h1>
              <p >{this.state.selectedPlace.content}</p>
            </div>
        </InfoWindow>
  
        </Map>

		{
          this.props.issue ? null : ( 
            <div className = "error" >
            <img src={errorIcon} className="error-icon" alt="error info"/><p>Kindly refresh the app.There was an error loading Google map.</p> 
            </div>
          )
		}

      </main>
      )
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyB5CUYM_6ijrRN9E_YdDOPnOk4ANAGsLVQ'
  })(Container)
