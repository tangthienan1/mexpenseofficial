import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { icons, MFONTS, MSIZES } from '../consts';

const WelcomeUser: FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Account')}
            style={styles.WelcomeUserWrapper}
        >
            <Image style={styles.img} source={icons.emptyAvatar} />
            <Text style={{ ...MFONTS.body2, marginHorizontal: MSIZES.padding }}>Hi Andy!</Text>
        </TouchableOpacity>
    );
};

export default WelcomeUser;
const styles = StyleSheet.create({
    img: {
        width: 32,
        height: 32,
    },
    WelcomeUserWrapper: {
        flexDirection: 'row',
    },
});
