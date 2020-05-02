import React, { Component } from 'react'
import { SafeAreaView, StatusBar, ScrollView, View, Text } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'

import {
  TagCashback,
  TagCOD,
  TagSale,
  TagVoucher,
  TagCheapest,
  TagFreeShipping,
  TagFlashSale,
  TagMore
} from '../Themes/Svg'

// Styles
import headerStyles from '../Navigation/Styles/NavigationStyles'
import styles from './Styles/HomeScreenStyle'
import { apply } from '../Themes/OsmiCSX'

// Components
import Header from '../Components/Header'
import HomeTags from '../Components/HomeTags'
import TopProduct from '../Components/TopProduct'
import FeaturedProduct from '../Components/FeaturedProduct'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerShown: false
  })

  constructor (props) {
    super(props)

    this.state = {
      menus: [{
        icon: <TagCashback width={30} height={30} />,
        label: 'Cashback'
      }, {
        icon: <TagCOD width={30} height={30} />,
        label: 'COD'
      }, {
        icon: <TagSale width={30} height={30} />,
        label: 'Sale'
      }, {
        icon: <TagVoucher width={30} height={30} />,
        label: 'Voucher'
      }, {
        icon: <TagCheapest width={30} height={30} />,
        label: 'Cheapest'
      }, {
        icon: <TagFreeShipping width={30} height={30} />,
        label: 'Free Shipping'
      }, {
        icon: <TagFlashSale width={30} height={30} />,
        label: 'Flash Sale'
      }, {
        icon: <TagMore width={30} height={30} />,
        label: 'More'
      }],
      topProducts: [{
        thumb: Images.topProduct1,
        name: 'Kursi Kayu',
        price: '$83'
      }, {
        thumb: Images.topProduct2,
        name: 'Bangku Pink',
        price: '$95'
      }, {
        thumb: Images.topProduct1,
        name: 'Kursi Kayu',
        price: '$83'
      }],
      flashSale: [{
        name: 'Gedang Mburitan',
        thumb: Images.featured2,
        promo: 'Rp2.999.000',
        price: 'Rp899.000'
      }, {
        name: 'Es Tung',
        thumb: Images.featured1,
        promo: 'Rp30.000',
        price: 'Rp26.000'
      }, {
        name: 'Kursi Kayu',
        thumb: Images.featured3,
        price: 'Rp825.000'
      }]
    }
  }

  render () {
    const { menus, topProducts, flashSale } = this.state

    return (
      <SafeAreaView style={apply('flex bg-white')}>
        <StatusBar backgroundColor={apply('white')} barStyle='dark-content' />
        <Header />

        <ScrollView>
          <HomeTags data={menus} extraData={this.state} />
          <TopProduct data={topProducts} />
          <FeaturedProduct titleSection='Flash Sale' data={flashSale} />
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
