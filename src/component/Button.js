/**
 * Created by user on 2016/10/18.
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
    //Initial
    this.state = { status: 1};
  }

  customPress = ()=> {
    // alert('click something.');
    Alert.alert(
      'My Demo',
      'My Demo Alert.',
      [{text: '确定', onPress: ()=> {
        console.log('confirm clicked.')
      },}]);
  };

  // customPress = Alert.alert('My Demo', 'My Demo Alert.',[ text: '确定']);

  render() {
    // 解构
    const { title } = this.props;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.customPress}
      >
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  confirmArea: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    height: 40,
    width: 100,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'orangered',
    marginBottom: 5,
    marginLeft: 30,
    marginRight: 30,
  },
  buttonTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});