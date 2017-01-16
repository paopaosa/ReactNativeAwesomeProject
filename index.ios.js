/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Navigator, View, Text } from 'react-native';
import MyScene from './src/scene/MyScene';
import Profile from './src/scene/Profile';

class SimpleNavigationApp extends Component {

  _onPress = (navigator) => {
    navigator.push({
      message: '向右拖拽关闭页面',
      scene: 'profile',
      title: 'AAAAA',
      sceneConfig: Navigator.SceneConfigs.FloatFromRight,
      showNavigationBar: false,
    })
  }

  render() {
    let Sences = {
      'home' : MyScene,
      'profile' : Profile,
    }
    return (
      <Navigator
        initialRoute={{ title: 'My Home', index: 0 , first: MyScene}}
        navigationBar = {
         <Navigator.NavigationBar
           routeMapper = {{
             LeftButton: (route, navigator, index, navState) => {
               return (<Text style={styles.leftButton}>Cancel</Text>); },
             RightButton: (route, navigator, index, navState) => {
               return (<Text>Done</Text>); },
             Title: (route, navigator, index, navState) => {
               return (<View style={{ alignItems: 'center', justifyContent: 'center', height: 44, }}>
                <Text style={{ fontSize: 22, color: 'white', textAlign: 'center',}}>{route.title}</Text>
                </View>); },
            }}
          style={{backgroundColor: 'darkseagreen'}}
         />}
        renderScene={(route, navigator) => {
          let Component = route.first;
          if (!Component) {
            Component = Profile;
          }
          return <Component title={route.title} navigator={navigator}/>
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  leftButton: {
    color: 'white',
    textAlign: 'center',
    width: 80,
    height: 80,
    backgroundColor: 'green',
  }
})

AppRegistry.registerComponent('AwesomeProject', () => SimpleNavigationApp);
