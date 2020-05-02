import React from 'react'
import { TouchableOpacity, ImageBackground, ScrollView, View, Text } from 'react-native'

import { IconSeeAll, ProductWishlist } from '../Themes/Svg'

// styles
import styles from './Styles/TopProductStyle'
import { apply } from '../Themes/OsmiCSX'

const topProduct = props => {
  const { data } = props

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Top Product</Text>

        <View style={apply('row items-center')}>
          <Text style={styles.headerMore}>See All</Text>
          <IconSeeAll width={24} height={24} />
        </View>
      </View>

      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
        {data && data.map((item, index) =>
        <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={[
          styles.productWrapper,
          index === 0 && apply('ml-5'),
          index === data.length - 1 && apply('mr-5')
        ]}>
          <ImageBackground source={item.thumb} style={styles.productThumb}>
            <View style={styles.productWishlist}>
              <ProductWishlist width={14} height={14} />
            </View>
          </ImageBackground>

          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </TouchableOpacity>)}
      </ScrollView>
    </View>
  )
}

export default topProduct
