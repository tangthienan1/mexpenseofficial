import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { MFONTS, MSIZES } from '../consts';

const InputTitle = ({ title }) => {
    return <Text style={styles.inputTile}>{title}</Text>;
};

export default InputTitle;

const styles = StyleSheet.create({
    inputTile: {
        marginTop: MSIZES.padding,
        ...MFONTS.body3,
    },
});
