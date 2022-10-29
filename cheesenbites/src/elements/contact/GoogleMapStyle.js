import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 8.488713832892827,
      lng: 124.65191057334931
    },
    zoom: 21
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
        <GoogleMapReact
          //bootstrapURLKeys={{ key: 'ddd' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
         
          <AnyReactComponent
            lat={8.488713832892827}
            lng={124.65191057334931}
            text="Capitol University"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapStyle;