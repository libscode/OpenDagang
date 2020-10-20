import React, { Component } from 'react'
import { ScrollView, Text, SafeAreaView, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'

class ProfileScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }
  renderCardProfile() {
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={styles.cardProfile}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.circleBorder}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={styles.imagePerson}
                  source={require('../Images/icon/person.png')}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginTop: 15,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Name
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  renderDataProfile() {
    <View style={{ marginLeft: 25, marginTop: 10 }}>

    </View>
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderCardProfile()}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
