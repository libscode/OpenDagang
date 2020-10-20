import React, { Component } from 'react'
import { ScrollView, Text, SafeAreaView, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'
import FormInput from '../Components/FormInput';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import ButtonMedium from '../Components/ButtonMedium';

class ProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      address: '',
      handphoe: ''
    }
  }

  onChangeName(text) {
    this.setState({ name: text })
  }

  onChangeEmail(text) {
    this.setState({ email: text })
  }

  onChangeAddress(text) {
    this.setState({ address: text })
  }

  onchangePhone(text) {
    this.setState({ handphoe: text })
  }

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
    return (
      <View style={{ marginLeft: 25, marginTop: 10 }}>
        <FormInput
          value={this.state.name}
          name={'Nama'}
          onChangeText={(text) => this.onChangeName(text)}
        />
        <FormInput
          value={this.state.email}
          name={'Email'}
          onChangeText={(text) => this.onChangeEmail(text)}
        />
        <FormInput
          value={this.state.address}
          name={'Alamat'}
          onChangeText={(text) => this.onChangeAddress(text)}
        />
        <FormInput
          value={this.state.handphoe}
          name={'No. Handphone'}
          onChangeText={(text) => this.onchangePhone(text)}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: responsiveHeight(3.33),
            marginTop: responsiveHeight(2.33),
          }}>
          <View style={{ marginRight: responsiveWidth(5.33) }}>
            <ButtonMedium
              onPress={() => null}
              textButton="Log Out"
              type="red"
            />
          </View>
          <View style={{ marginRight: responsiveWidth(5.33) }}>
            <ButtonMedium
              onPress={() => null}
              textButton="Simpan"
              type="blue"
            />
          </View>
        </View>
      </View>
    )

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {this.renderCardProfile()}
          {this.renderDataProfile()}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
