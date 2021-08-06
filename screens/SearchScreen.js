import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}> SearchScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'MV Boli',
    color: 'red',
    alignSelf: 'center',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
    alignContent: 'center',
  },
  // button: {
  //   backgroundColor: 'blue',
  //   borderRadius: 10,
  //   width: 150,
  //   height: 50,
  //   alignSelf: 'center',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // buttontext: {
  //   color: 'white',
  //   alignText: 'center',
  //   fontWeight: 'bold',
  // },
});
