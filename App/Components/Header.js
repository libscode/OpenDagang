import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import {
  HeaderCart,
  HeaderChat
} from '../Themes/Svg'

// styles
import styles from './Styles/HeaderStyle'
import { apply } from '../Themes/OsmiCSX'

const header = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.staticSearchContainer}>
        <Text style={styles.staticSearchPlaceholder}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.9} style={apply('px-2')}>
        <HeaderChat width={30} height={30} />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.9} style={apply('px-2')}>
        <HeaderCart width={30} height={30} />
      </TouchableOpacity>
    </View>
  )
}

export default header
