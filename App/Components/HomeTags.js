import React, { useState } from 'react'
import { FlatList, TouchableOpacity, View, Text } from 'react-native'
import NavigationServices from '../Services/NavigationServices'
import formatData from '../Lib/FormatData'

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

// styles
import { apply } from '../Themes/OsmiCSX'

const homeTags = props => {
  const { extraData } = props
  const [menus, setMenus] = useState([{
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
  }])

  console.tron.log('==== menus ====', menus)

  return (
    <FlatList
      data={formatData(menus, 4)}
      extraData={extraData}
      keyExtractor={(item, index) => index.toString()}
      numColumns={4}
      renderItem={({item,index}) =>
        item.empty ? (
          <View style={apply('flex')} />
        ) : (
          <TouchableOpacity activeOpacity={0.8} style={styles.btnWrapper}>
            <View style={styles.boxed}>
              {item.icon}
            </View>

            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        )
      }
    />
  )
}

export default homeTags
