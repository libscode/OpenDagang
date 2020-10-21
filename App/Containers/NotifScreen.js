import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { ScrollView, 
        Text, 
        View, 
        SafeAreaView, 
        FlatList,
        Image, }  from 'react-native'
import { connect }          from 'react-redux'
import { Images }           from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/NotifScreenStyle'

class NotifScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  renderCardNotif() {
    const data = [
      {
      id  :1,
      name  : 'Yay, kamu dapat diskon 20%!',
      description : "Segera gunakan diskon-mu untuk belanja barang impian. Belanja sekarang!",
      image : Images.alertNotif
      },
      {
        id  :2,
        name  : 'Yay, kamu dapat diskon 50%!',
        description : "Segera gunakan diskon-mu untuk belanja barang impian. Belanja sekarang!",
        image : Images.alertNotif
      },
      {
        id  :3,
        name  : 'Yay, kamu dapat diskon ongkir',
        description : "Segera gunakan diskon-mu untuk mendapat gratis ongkir pada hari sabtu dan minggu.",
        image : Images.alertNotif
      },
    ]
    return(
      <View style={styles.cardContainer}> 
        <FlatList
          data={data}
          showVerticalScrollIndicator={false}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=> this.actionDetail()}>
            <View style={styles.cardNotif}> 
                <View style={styles.rowContent}>
                  <View style={styles.columnImage}>
                    <Image
                      source={item.image}
                      style={styles.imageContent}
                    />
                  </View>
                  <View style={styles.columnContent}>
                      <Text style={styles.fontTitle}>{item.name}</Text>
                      <Text style={styles.fontDescription}>{item.description}</Text>
                    </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index)=> index.toString()}
        />
    </View>
    )
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderCardNotif()}
      </SafeAreaView>
    )
  }

  actionDetail() {
    alert("Hit Detail Promo")
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

export default connect(mapStateToProps, mapDispatchToProps)(NotifScreen)
