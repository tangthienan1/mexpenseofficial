import { Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import { icons, MCOLORS, MFONTS, MSIZES } from '../consts';
import Tag from './Tag';

export type TripSummaryProps = {
    title: string;
    date: string;
    tag: string;
    isRequiredRiskAssessment: boolean;
};

const TripSummary: FC<TripSummaryProps> = ({ title, date, tag, isRequiredRiskAssessment }) => {
    const [isShowRequiredAssessmentModal, setIsShowRequiredAssessmentModal] =
        useState<boolean>(false);
    return (
        <View style={styles.tripItemWrapper}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isShowRequiredAssessmentModal}
                onRequestClose={() => {
                    setIsShowRequiredAssessmentModal(!isShowRequiredAssessmentModal);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Required Risk Assessment</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() =>
                                setIsShowRequiredAssessmentModal(!isShowRequiredAssessmentModal)
                            }
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Text style={{ ...MFONTS.body2, marginBottom: MSIZES.padding }}>{title}</Text>
            <View style={styles.contentWrapper}>
                <Text style={styles.date}>Date: {date}</Text>
                <Tag tag={tag} />
            </View>
            {isRequiredRiskAssessment && (
                <TouchableOpacity
                    style={styles.requiredRiskAssessment}
                    onPress={() => setIsShowRequiredAssessmentModal(true)}
                >
                    <Image source={icons.requiredassesment} />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default TripSummary;

const styles = StyleSheet.create({
    tripItemWrapper: {
        padding: MSIZES.padding * 1.5,
        marginVertical: MSIZES.padding,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: MCOLORS.gray,
        backgroundColor: 'white',

        shadowColor: MCOLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    date: {
        fontWeight: 'bold',
    },
    contentWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    requiredRiskAssessment: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: MCOLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: MCOLORS.blue,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
