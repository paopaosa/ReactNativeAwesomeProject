/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {displayText: true};

//     // Toggle the state every second
//     setInterval(() => {
//       this.setState({ displayText: !this.state.displayText });
//     }, 1000);
//   }

//   render() {
//     let display = this.state.displayText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }

// class AwesomeProject extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='  ' />
//         <Blink text='I love to blink.' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

// import React, { Component } from 'react'
// import { AppRegistry, StyleSheet, Image, ScrollView, Text, TouchableHighlight } from 'react-native'
// import Button from './src/component/Button'
// var marginSize = 20
// class AwesomeProject extends Component {
//   handleOptionsButtonClick = (e) => {
//     console.log('click ...' + e)
//     // this.setState({showOptionsModal: true});
//   }
//   render() {
//     this.marginSize = 30
//     return (
//       <ScrollView style={{top: 20, bottom: 40, margin: 2, borderWidth: 1, borderColor: '#E1E2F3' }}>
//         <Image source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/' }} />
//         <Text style={[styles.base,{paddingTop: 12}]}>
//           On iOS, a React Native ScrollView uses a native UIScrollView.
//           On Android, it uses a native ScrollView.{"\n"}
//         </Text>
//         <Text style={styles.base}>
//           {"\n"}
//           On iOS, a React Native Image uses a native UIImageView.
//           On Android, it uses a native ImageView.
//           {"\n"}
//         </Text>
//         <Text style={styles.base}>
//           React Native wraps the fundamental native components, giving you
//           the performance of a native app, plus the clean design of React.
//           {"\n"}
//           React Native wraps the fundamental native components, giving you
//           the performance of a native app, plus the clean design of React.
//           {"\n"}
//           React Native wraps the fundamental native components, giving you
//           the performance of a native app, plus the clean design of React.
//           {"\n"}
//           React Native wraps the fundamental native components, giving you
//           the performance of a native app, plus the clean design of React.
//         </Text>
//         <TouchableHighlight
//           // onPress={this.handleOptionsButtonClick.bind(this)}
//           onPress={e => this.handleOptionsButtonClick(e)}
//           // onPress={this.handleOptionsButtonClick()}
//           style={{ alignItems: 'center' }}
//           >
//           <Text>AAAAAA</Text>
//         </TouchableHighlight>
//         <Button style={{ height: 44 }} title={"OK"} color={'#3e2df0'} onPress={this.handleOptionsButtonClick} />
//       </ScrollView>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   base: {
//     borderWidth: 1,
//     borderColor: '#EDEBE0',
//     borderBottomWidth: 1,
//     borderTopWidth: 3,
//     marginLeft: marginSize,
//     marginRight: marginSize
//   }
// })
// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Navigator} from 'react-native';
import MyScene from './src/scene/MyScene';

class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) => {
          return <MyScene title={route.title} />
        }}
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => SimpleNavigationApp);