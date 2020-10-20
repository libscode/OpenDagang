import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { Colors, Metrics } from '../Themes';

const FormInput = ({ name, placeholder, onChangeText, value, icRight }) => {
    return (
        <View>
            <Text style={styles.textInfo}>{name}</Text>
            <View style={styles.SectionStyle}>
                <TextInput
                    style={{ flex: 1, color: '#555' }}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                />

                <Image
                    source={icRight}
                    style={styles.iconStyle}
                    resizeMode={'contain'}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    textInfo: {
        fontSize: responsiveFontSize(1.6),
        marginBottom: responsiveHeight(0.5),
        marginTop: responsiveHeight(2.33),
        color: Colors.blueProgress,
        marginLeft: responsiveWidth(1.66),
    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: Colors.blueProgress,
        height: responsiveHeight(6),
        borderRadius: 10,
        width: responsiveWidth(90),
    },

    iconStyle: {
        padding: 10,
        margin: 5,
        height: 16,
        width: 16,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
});

export default FormInput;