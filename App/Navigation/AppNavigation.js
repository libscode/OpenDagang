import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import BottomNavigation from './BottomNavigation'

import styles from './Styles/NavigationStyles'

// Home
import HomeScreen from '../Containers/HomeScreen'
import CategoryScreen from '../Containers/CategoryScreen'

// Explore
import ExploreScreen from '../Containers/ExploreScreen'

// Notif
import NotifScreen from '../Containers/NotifScreen'

// Profile
import ProfileScreen from '../Containers/ProfileScreen'

// Manifest of possible screens
const AppStack = createStackNavigator({
  MainScreen: {
    screen: BottomNavigation,
    navigationOptions: ({ navigation }) => ({
      headerShown: false
    })
  },

  // Home Stack
  Home: { screen: HomeScreen },
  Category: { screen: CategoryScreen },

  // Explore Stack
  Explore: { screen: ExploreScreen },

  // Notif Stack
  Notif: { screen: NotifScreen },

  // Profile
  Profile: { screen: ProfileScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(AppStack)
