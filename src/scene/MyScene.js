import React, {
  Component,
  PropTypes,
} from 'react';
import { ScrollView,Image,Text,View,StyleSheet } from 'react-native';
import Button from '../component/Button';

class MyScene extends Component {
  render() {
    let { title } = this.props;
    // return (
    //   <View style={styles.home}>
    //     <Text>{title}</Text>
    //   </View>
    // );
    return (
      <ScrollView style={{margin: 20, top: 20, bottom: 30, borderWidth: 1, borderColor: '#E1E2F3' }}>
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
        <Text style={styles.base}>
          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
          {"\n"}
          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
          {"\n"}
          Hello world.{"\n"}Hello React Native.
          {"\n"}
          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
        </Text>
        <Button style={{ height: 80 }} title={title} color={'#e86b4e'} onPress={this.handleOptionsButtonClick} />
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
  }
})

export default MyScene;