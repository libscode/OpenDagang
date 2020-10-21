import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grayMedium
  },
  cardContainer: {
    alignItems: 'center'
  },
  cardNotif: {
    height: 90,
    width: responsiveWidth(95),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
    marginTop: 20,
    paddingLeft: 20,
    backgroundColor: Colors.ricePaper
  },
  rowContent: {
    flexDirection:'row', 
    flex: 1
  },
  imageContent: {
    width: 40, 
    height: 40, 
    marginTop: 15,
    resizeMode: 'stretch'
  },
  columnImage : {
    flexDirection:'column'
  },
  columnContent: {
    marginLeft: 25, 
    flexDirection:'column'
  },
  fontTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10
  }, 
  fontDescription: {
    paddingRight: 30
  },
})
