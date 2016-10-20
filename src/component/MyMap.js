/**
 * Created by user on 2016/10/20.
 */
import React, {
  Component,
  PropTypes,
} from 'react';
import { MapView } from 'react-native';

class MyMap extends Component {
  render() {
    return (
      <MapView style={{width: 300, height: 220}}
               showsUserLocation={true}
      />
    );
  }
}

MyMap.propTypes = {};
MyMap.defaultProps = {};

export default MyMap;
