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

import React, { Component } from 'react';
import {AppRegistry, Image, ScrollView, Text } from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <ScrollView>
        <Image source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}} />
        <Text>
          On iOS, a React Native ScrollView uses a native UIScrollView.
          On Android, it uses a native ScrollView.

          On iOS, a React Native Image uses a native UIImageView.
          On Android, it uses a native ImageView.

          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
        </Text>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
