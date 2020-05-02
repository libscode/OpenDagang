import React from 'react'
import { TouchableOpacity, FlatList, View, Image, Text } from 'react-native'

import { IconSeeAll } from '../Themes/Svg'

// styles
import styles from './Styles/FeaturedProductStyle'
import { apply } from '../Themes/OsmiCSX'

const featuredProduct = props => {
  const { titleSection, data } = props

  const _renderItem = ({ item, index }) => (
    <View style={styles.productWrapper}>
      <Image source={item.thumb} style={styles.productThumb} />

      <View style={apply('flex wrap')}>
        <Text style={[styles.productName, !item.promo && apply('mb-4')]}>{item.name}</Text>
        {item.promo && <Text style={styles.productPromo}>{item.promo}</Text>}
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>

      <TouchableOpacity activeOpacity={0.8} style={styles.btnBuy}>
        <Text style={styles.btnBuyLabel}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      style={apply('flex')}
      contentContainerStyle={apply('p-5')}
      renderItem={_renderItem}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{titleSection}</Text>

          <View style={apply('row items-center justify-end')}>
            <Text style={styles.headerMore}>See All</Text>
            <IconSeeAll width={24} height={24} />
          </View>
        </View>
      )}
    />
  )
}

export default featuredProduct
