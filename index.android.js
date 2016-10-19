/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Button from './src/component/Button';

class AwesomeProject extends Component {
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
    return (

      // <View style={{alignItems: 'center', height: 60, backgroundColor: 'powderblue'}}>
      //   <Greeting name='Rexxar' />
      //   <Greeting name='Jaina' />
      //   <Greeting name='Valeera' />
      // </View>
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 3, backgroundColor: 'skyblue'}} />
        <View style={[
          {flex: 1, backgroundColor: 'lightgoldenrodyellow'},
          styles.confirmArea]}>
          <Button title="取消"/>
          <Button title="确定"/>
        </View>
        <View style={{flex: 2, backgroundColor: 'purple'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  confirmArea: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 100,
    paddingRight: 30,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

// import React, { Component } from 'react';
// import {AppRegistry, Image, ScrollView, Text } from 'react-native';

// class AwesomeProject extends Component {
//   render() {
//     return (
//       <ScrollView>
//         <Image source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}} />
//         <Text>
//           On iOS, a React Native ScrollView uses a native UIScrollView.
//           On Android, it uses a native ScrollView.

//           On iOS, a React Native Image uses a native UIImageView.
//           On Android, it uses a native ImageView.

//           React Native wraps the fundamental native components, giving you
//           the performance of a native app, plus the clean design of React.
//         </Text>
//       </ScrollView>
//     );
//   }
// }

// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

// import React, { Component } from 'react';
// import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'

// class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//       return(
//         <ScrollView>
//           <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>What's the best</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:80}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }

// AppRegistry.registerComponent(
//   'AwesomeProject',
//   () => IScrolledDownAndWhatHappenedNextShockedMe);

// import React, { Component } from 'react';
// import { AppRegistry, ListView, Text, View } from 'react-native';
//
// public class Video = React.createClass({
//   static getDefaultProps = {
//     autoPlay: false,
//     maxLoop: 10,
//   };
//
// })
//
// class ListViewBasics extends Component {
//   // Initialize the hardcoded data
//   constructor(props) {
//     super(props);
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource: ds.cloneWithRows([
//         'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//       ])
//     };
//   }
//   render() {
//     return (
//       <View style={{paddingTop: 22}}>
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={(rowData) => <Text>{rowData}</Text>}
//         />
//       </View>
//     );
//   }
// }
//
// // App registration and rendering
// AppRegistry.registerComponent('AwesomeProject', () => ListViewBasics);
