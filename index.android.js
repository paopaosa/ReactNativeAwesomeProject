/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react';
 import { AppRegistry, StyleSheet, Text, View, Alert } from 'react-native';
 import Button from './src/component/Button';
 import MyMap from './src/component/MyMap';

 class AwesomeProject extends Component {
  customPress = () => {
    Alert.alert(
      '提示',
      '你是否要上传此文件.',
      [
      {text: '稍后再问', onPress: () => console.log('Ask me later pressed')},
      {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: '确定', onPress: () => console.log('OK Pressed')},
      ])
  };

  // customPress = Alert.alert('My Demo', 'My Demo Alert.',[ text: '确定']);

  render() {
    return (
      <View style={{flex: 1}}>
      <View style={[{flex: 1, backgroundColor: 'powderblue'},styles.appTitle]}>
        <Text style={styles.titleText} >
          AwesomeProject
        </Text>
      </View>
      <View style={{flex: 3, backgroundColor: 'snow'}}>
        {/*<MyMap/>*/}
      </View>
      <View style={[
        {flex: 2},
        styles.confirmArea]}>
        <Button color="slategrey" title="取消"/>
        <Button title="上传" onPress={this.customPress}/>
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}} />
        </View>
        )
  }
}

const styles = StyleSheet.create({
  appTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'maroon',
    fontSize: 20,
  },
  confirmArea: {
    backgroundColor: 'lightgoldenrodyellow',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingLeft: 100,
    paddingRight: 5,
    paddingBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
