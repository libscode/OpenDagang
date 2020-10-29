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
import { apply } from '../Themes/OsmiCSX'

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
      <View style={apply('items-center')}> 
        <FlatList
          data={data}
          showVerticalScrollIndicator={false}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=> this.actionDetail()}>
            <View  
                width={295} height={90} 
                style={apply('rounded-b-lg rounded-t-lg bg-white mt-5 pl-7 items-center')}> 
                <View 
                  style={apply('row flex')}>
                  <View 
                    style={apply('mt-4')}> 
                    <Image
                      source={item.image}
                      style={apply('mt-4 items-stretch'), styles.imageContent}
                    />
                  </View>
                  <View style={apply('column ml-6')}>
                      <Text style={apply('font-semibold text-base mt-2')}>{item.name}</Text>
                      <Text style={apply('pr-8')}>{item.description}</Text>
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
      <SafeAreaView style={apply('bg-gray-300 flex')}>
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
