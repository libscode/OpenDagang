import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import NavigationServices from '../Services/NavigationServices'

import {
  HeaderCart,
  HeaderChat,
  IconBack
} from '../Themes/Svg'

// styles
import styles from './Styles/HeaderStyle'
import { apply } from '../Themes/OsmiCSX'

const header = props => {
  const { ...restProps } = props
  const { title, withBack, navigation } = restProps

  return (
    <View style={[
      styles.container,
      withBack && apply('justify-start')
    ]}>
      {withBack && <TouchableOpacity
      activeOpacity={0.9}
      style={styles.backWrapper}
      onPress={() => navigation.goBack()}>
        <IconBack width={24} height={24} />
      </TouchableOpacity>}

      {(withBack && title) && <Text style={styles.title}>{title}</Text>}

      {!withBack && <TouchableOpacity activeOpacity={1} style={styles.staticSearchContainer}>
        <Text style={styles.staticSearchPlaceholder}>Search</Text>
      </TouchableOpacity>}

      {!withBack && <TouchableOpacity activeOpacity={0.9} style={apply('px-2')}>
        <HeaderChat width={30} height={30}/>
      </TouchableOpacity>}

      {!withBack && <TouchableOpacity activeOpacity={0.9} style={apply('px-2')}>
        <HeaderCart width={30} height={30}/>
      </TouchableOpacity>}
    </View>
  )
}

export default header
