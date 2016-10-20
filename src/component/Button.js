/**
 * Created by user on 2016/10/18.
 */

import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
    //Initial
    this.state = { status: 1, defaultColor: 'orangered' };
  }

  customPress = (e)=> {
    // alert('click something.');
    // Alert.alert(
    //   'My Demo',
    //   'My Demo Alert.',
    //   [{text: '确定', onPress: ()=> {
    //     console.log('confirm clicked.')
    //   },}]);
    e();
  };

  // customPress = Alert.alert('My Demo', 'My Demo Alert.',[ text: '确定']);

  render() {
    // 解构
    const { title, color, onPress } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.71}

        style={[styles.button, { backgroundColor:color }]}
        onPress={onPress}
      >
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  color: React.PropTypes.string
};

// Specifies the default values for props:
Button.defaultProps = {
  color : 'orangered'
};

const styles = StyleSheet.create({
  confirmArea: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    height: 40,
    // width: 100,
    flex: 1,
    justifyContent: 'center',
    borderRadius: 20,
    // backgroundColor: 'orangered',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});