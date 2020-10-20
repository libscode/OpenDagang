import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, Metrics } from '../Themes';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';

const ButtonMedium = ({ onPress, textButton, type }) => {
    if (type == 'blue') {
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.button, { backgroundColor: Colors.blueTheme }]}>
                    <Text style={styles.textNext}>{textButton}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, { backgroundColor: '#ED5353' }]}>
                <Text style={styles.textNext}>{textButton}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: responsiveWidth(40),
        height: responsiveHeight(7),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginBottom: responsiveHeight(2.6),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    viewButton: {
        alignItems: 'flex-end',
        width: responsiveWidth(100),
        marginBottom: responsiveHeight(2.33),
        backgroundColor: 'white',
        paddingVertical: responsiveHeight(1.6),
        height: responsiveHeight(8),
    },
    textNext: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ButtonMedium;