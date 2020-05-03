import React, { useState } from 'react'
import { FlatList, TouchableOpacity, View, Text } from 'react-native'
import NavigationServices from '../Services/NavigationServices'
import formatData from '../Lib/FormatData'

// styles
import styles from './Styles/HomeTagsStyle'
import { apply } from '../Themes/OsmiCSX'

const homeTags = props => {
  const { extraData, data } = props

  const _renderItem = ({ item, index }) => {
    return item?.empty ? (
      <View style={apply('flex')} />
    ) : (
      <TouchableOpacity
      activeOpacity={0.8}
      style={styles.btnWrapper}
      onPress={() => item.id === 8 ?
        NavigationServices.navigate('Category', { selectedTag: data }) :
        alert('clicked!')
      }>
        <View style={styles.boxed}>
          {item.icon}
        </View>

        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={formatData(data, 4)}
      extraData={extraData}
      keyExtractor={(item, index) => index}
      numColumns={4}
      renderItem={_renderItem}
      style={apply('flex mt-9 mb-5 bg-white')}
    />
  )
}

export default homeTags
