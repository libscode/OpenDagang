import React, { Component } from 'react'
import { SafeAreaView, StatusBar, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import headerStyles from '../Navigation/Styles/NavigationStyles'
import styles from './Styles/HomeScreenStyle'
import { apply } from '../Themes/OsmiCSX'

// Components
import Header from '../Components/Header'
import HomeTags from '../Components/HomeTags'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerShown: false
  })

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <SafeAreaView style={apply('flex')}>
        <StatusBar backgroundColor={apply('white')} barStyle='dark-content' />
        <Header />

        <ScrollView style={apply('flex')}>
          <HomeTags extraData={this.state} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
