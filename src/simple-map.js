import React from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: ["AIzaSyD8uemwikPBO6MoQocjb5UCzwx_81WTXtU"] }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
    );
  }
}

