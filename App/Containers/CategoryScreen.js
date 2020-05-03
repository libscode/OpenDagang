import React, { Component } from 'react'
import { SafeAreaView, TouchableOpacity, StatusBar, FlatList, View, Text } from 'react-native'
import { connect } from 'react-redux'
import formatData from '../Lib/FormatData'

import {
  TagBill,
  TagReward,
  TagTicket,
  TagWaranty,
  TagPromo,
  TagCashback,
  TagCOD,
  TagSale,
  TagVoucher,
  TagCheapest,
  TagFreeShipping,
  TagFlashSale,
  IconCheck
} from '../Themes/Svg'

// styles
import styles from './Styles/CategoryStyle'
import { apply } from '../Themes/OsmiCSX'

// component
import Header from '../Components/Header'

class CategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerShown: false
  })

  constructor (props) {
    super(props)

    const selectedTag = props.navigation.getParam('selectedTag', [])

    this.state = {
      tags: [{
        id: 9,
        icon: <TagPromo width={50} height={50} />,
        label: 'Promo'
      }, {
        id: 10,
        icon: <TagTicket width={50} height={50} />,
        label: 'Ticket'
      }, {
        id: 11,
        icon: <TagBill width={50} height={50} />,
        label: 'Bill'
      }, {
        id: 7,
        icon: <TagFlashSale width={50} height={50} />,
        label: 'Flash Sale'
      }, {
        id: 12,
        icon: <TagReward width={50} height={50} />,
        label: 'Reward'
      }, {
        id: 13,
        icon: <TagWaranty width={50} height={50} />,
        label: 'Warranty'
      }, {
        id: 4,
        icon: <TagVoucher width={50} height={50} />,
        label: 'Voucher'
      }, {
        id: 5,
        icon: <TagCheapest width={50} height={50} />,
        label: 'Cheapest'
      }, {
        id: 6,
        icon: <TagFreeShipping width={50} height={50} />,
        label: 'Free Shipping'
      }, {
        id: 1,
        icon: <TagCashback width={50} height={50} />,
        label: 'Cashback'
      }, {
        id: 2,
        icon: <TagCOD width={50} height={50} />,
        label: 'COD'
      }, {
        id: 3,
        icon: <TagSale width={50} height={50} />,
        label: 'Sale'
      }],
      selectedTag
    }
  }

  toggleSelect = (item) => {
    const { selectedTag } = this.state
    const filterArr = selectedTag.filter((selected) => selected.id === item.id)

    if (filterArr.length > 0) {
      this.setState({
        selectedTag: selectedTag.filter((selected) => selected.id !== item.id)
      })
    } else {
      const newArr = [...selectedTag, item]
      this.setState({
        selectedTag: newArr
      })
    }
  }

  _renderItem = ({ item, index }) => {
    const { selectedTag } = this.state

    return item?.empty ? (
      <View style={apply('flex')} />
    ) : (
      <TouchableOpacity
      activeOpacity={0.8}
      style={styles.btnWrapper}
      onPress={() => this.toggleSelect(item)}>
        {selectedTag.filter((selected) => selected.id === item.id).length > 0 &&
        <View style={styles.checkWrapper}>
          <IconCheck width={20} height={20} />
        </View>}

        <View style={styles.boxed}>
          {item.icon}
        </View>

        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { tags } = this.state

    console.tron.log('=== LOG SELECTED ===', this.state.selectedTag)

    return (
      <SafeAreaView style={apply('flex bg-white')}>
        <StatusBar backgroundColor={apply('white')} barStyle='dark-content' />
        <Header navigation={this.props.navigation} title='Choose a Category' withBack />

        <FlatList
          data={formatData(tags, 3)}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          renderItem={this._renderItem.bind(this)}
          contentContainerStyle={apply('pt-9 justify-between')}
          style={apply('flex')}
        />

        <View style={apply('full items-center px-8 mb-10')}>
          <TouchableOpacity activeOpacity={0.9} style={styles.btnBrowse} onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.btnBrowseLabel}>Browse</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen)
