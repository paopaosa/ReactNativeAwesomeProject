import React, {
  Component,
  PropTypes,
} from 'react';
import { ScrollView,Image,Text,View,StyleSheet } from 'react-native';
import Button from '../component/Button';

class MyScene extends Component {
  handleOptionsButtonClick = (e) => {
    console.log("click button.")
  }

  render() {
    let { title } = this.props;
    // return (
    //   <View style={styles.home}>
    //     <Text>{title}</Text>
    //   </View>
    // );
    return (
      <ScrollView style={styles.container} >
        <Image source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/' }} />
        <Text style={[styles.base,{paddingTop: 0}]}>
          {"\n"}
          On iOS, a React Native ScrollView uses a native UIScrollView.
          On Android, it uses a native ScrollView.{"\n"}
        </Text>
        <Text style={styles.base}>
          {"\n"}
          On iOS, a React Native Image uses a native UIImageView.
          On Android, it uses a native ImageView.
          {"\n"}
        </Text>
        <Text style={[styles.base,{ color: 'gray' }]}>
          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
          {"\n"}
          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
          {"\n"}
          <Text style={styles.titleStyle}>Hello world.</Text>{"\n"}Hello React Native.
          {"\n"}
          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
        </Text>
        <Button style={{ height: 50 }} title={title} color={'#e86b4e'} onPress={this.handleOptionsButtonClick} />
      </ScrollView>
    );
  }
}

MyScene.propTypes = {
  title: React.PropTypes.string.isRequired,
};
MyScene.defaultProps = {
  title: "Default Title",
};

const styles = StyleSheet.create({
  home: {
    top: 20,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  base: {
    padding: 10,
  },
  container: {
    margin: 20, 
    marginTop: 40, 
    top: 0, 
    bottom: 30, 
    borderWidth: 1, 
    borderColor: '#E1E2F3' 
  },
  titleStyle: {
    color: 'mediumslateblue',
    fontSize: 33,
  },
})

export default MyScene;