import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import BookTransactionsScreen from './screens/BookTransactionsScreen';
import SearchScreen from './screens/SearchScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: BookTransactionsScreen},
  Search: {screen: SearchScreen},
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName;
      if(routeName==='Transaction'){
        return(
          <Image source={require('assets/book.png')} style={{width:30, height:30}} />
        )
      }
      else if(routeName==='Search'){
        return(
          <Image source={require('assets/searchingbook.png')} style={{width:30, height:30}} />
        )
      }
    }
  })
});

const AppContainer = createAppContainer(TabNavigator);
