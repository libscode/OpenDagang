import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Image, Text, View, Platform } from 'react-native'

import {
  DefaultHome,
  DefaultExplore,
  DefaultNotif,
  DefaultProfile,
  ActiveHome,
  ActiveExplore
} from '../Themes/Svg'

// Import Styles
import { apply } from '../Themes/OsmiCSX'
import styles from './Styles/NavigationStyles'

// Import Screens
import HomeScreen from '../Containers/HomeScreen'
import ExploreScreen from '../Containers/ExploreScreen'
import NotifScreen from '../Containers/NotifScreen'
import ProfileScreen from '../Containers/ProfileScreen'

const OS = Platform.OS

export default createBottomTabNavigator({
  Home: {
    screen: createStackNavigator({
      HomeScreen
    }, {
      headerMode: 'screen',
      navigationOptions: navigation => ({
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) =>
          focused ? <ActiveHome width={28} height={28} /> : <DefaultHome width={28} height={28} />
      })
    })
  },
  Explore: {
    screen: createStackNavigator({
      ExploreScreen
    }, {
      headerMode: 'screen',
      navigationOptions: navigation => ({
        tabBarLabel: 'Explore',
        tabBarIcon: ({ focused, tintColor }) =>
          focused ? <ActiveExplore width={28} height={28} /> : <DefaultExplore width={28} height={28} />
      })
    })
  },
  Notif: {
    screen: createStackNavigator({
      NotifScreen
    }, {
      headerMode: 'screen',
      navigationOptions: navigation => ({
        tabBarLabel: 'Notification',
        tabBarIcon: ({ focused, tintColor }) =>
          focused ? <DefaultNotif width={28} height={28} /> : <DefaultNotif width={28} height={28} />
      })
    })
  },
  Profile: {
    screen: createStackNavigator({
      ProfileScreen
    }, {
      headerMode: 'screen',
      navigationOptions: navigation => ({
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused, tintColor }) =>
          focused ? <DefaultProfile width={28} height={28} /> : <DefaultProfile width={28} height={28} />
      })
    })
  }
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: apply("primary"),
    inactiveTintColor: apply("soft-primary"),
    style: apply("bg-white pt-2 border-t-0 border-0 shadow-lg"),
    labelStyle: apply("font-regular text-xs mt-1"),
    showLabel: true
  },
  allowFontScaling: false
})
