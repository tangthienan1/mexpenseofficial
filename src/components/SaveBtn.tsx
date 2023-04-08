import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MCOLORS, MFONTS, MSIZES } from '../consts';

const SaveBtn = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.saveButton} onPress={onPress}>
            <Text style={{ color: MCOLORS.white, ...MFONTS.h3 }}>Save</Text>
        </TouchableOpacity>
    );
};

export default SaveBtn;

const styles = StyleSheet.create({
    saveButton: {
        marginVertical: MSIZES.padding,
        marginBottom: MSIZES.padding2 * 4,
        height: 40,
        borderRadius: 20,
        backgroundColor: MCOLORS.emerald,

        justifyContent: 'center',
        alignItems: 'center',
    },
});
