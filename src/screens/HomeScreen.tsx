/* eslint-disable react-native/no-inline-styles */
import React, { FC, useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    ListRenderItem,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Layout from '../components/Layout';
import TripSummary from '../components/TripSummary';
import WelcomeUser from '../components/WelcomeUser';
import { AddExpenseScreen, icons, MCOLORS, MFONTS, MSIZES, NoteScreen, TripListScreen } from '../consts';
import { HomeEntriesItemProps } from '../type';

type HomeScreenProps = {
    navigation: any;
};

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
    const totalExpense = 123456;
    const TripInfo = {
        tripName: 'Temp trip name',
        destination: 'temp trip destination',
        budget: '123111',
        date: 'tempDate',
        tag: 'dfa',
        description: 'test description',
        requiredRiskAssessment: true,
    };

    const expenses = [
        {
            type: 'Move',
            amount: 300,
            date: 'Sun 30 Oct',
        },
        {
            type: 'Food',
            amount: 300,
            date: 'Sun 30 Oct',
        },
        {
            type: 'Hotel',
            amount: 200,
            date: 'Sun 30 Oct',
        },
        {
            type: 'Taxi',
            amount: 100,
            date: 'Sun 30 Oct',
        },
        {
            type: 'Move',
            amount: 600,
            date: 'Sun 30 Oct',
        },
        {
            type: 'Food',
            amount: 400,
            date: 'Sun 30 Oct',
        },
        {
            type: 'Hotel',
            amount: 100,
            date: 'Sun 30 Oct',
        },
        {
            type: 'Taxi',
            amount: 700,
            date: 'Sun 30 Oct',
        },
        {
            type: 'TestHigh',
            amount: 800,
            date: 'Sun 30 Oct',
        },
        {
            type: 'Food',
            amount: 400,
            date: 'Sun 30 Oct',
        },
        {
            type: 'Hotel',
            amount: 100,
            date: 'Sun 30 Oct',
        },
        {
            type: 'Taxi',
            amount: 700,
            date: 'Sun 30 Oct',
        },
    ];

    const [expenseList, setExpenseList] = useState<HomeEntriesItemProps[] | undefined>();

    useEffect(() => {
        setExpenseList(expenses)
    }, [])
    
    //ExpenseList max length is 8 for display on banner
    const sortedExpenseList = expenseList?.sort((prev, next) => -prev.amount + next.amount);
    const uniqueExpenseListByValue = [
        ...new Map(sortedExpenseList?.map((item) => [item.amount, item])).values(),
    ];
    const majorExpenseList = uniqueExpenseListByValue.slice(0, 6);

    function renderHeader() {
        return (
            <View style={styles.headerWrapper}>
                <WelcomeUser navigation={navigation} />
            </View>
        );
    }

    function renderBanner(total: number) {
        const BannerHeader = () => {
            return (
                <View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}
                    >
                        <Text style={{ ...MFONTS.h4 }}>Total Expense</Text>
                        <Text style={{ ...MFONTS.h4 }}>$ {total}</Text>
                    </View>
                    <Text style={{ ...MFONTS.h4 }}>Major expenses</Text>
                </View>
            );
        };

        const renderMajorItem: ListRenderItem<HomeEntriesItemProps> = ({ item }) => (
            <View style={{ flex: 1, flexDirection: 'row', marginRight: MSIZES.padding }}>
                <Text style={{ ...MFONTS.body4 }}>{item.type}</Text>
                <Text style={{ ...MFONTS.body4, paddingLeft: 8 }}>${item.amount}</Text>
            </View>
        );

        return (
            <FlatList
                ListHeaderComponent={BannerHeader}
                data={majorExpenseList}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={(_, index) => `_key${index.toString()}`}
                renderItem={renderMajorItem}
                style={styles.bannerWrapper}
            />
        );
    }

    function renderTrip() {
        return (
            <View
                style={{
                    marginTop: MSIZES.padding * 2,
                }}
            >
                <View
                    style={{
                        marginBottom: MSIZES.padding * 2,
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text style={{ ...MFONTS.h3 }}>Trip Summary</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(TripListScreen)}>
                        <Text style={{ color: MCOLORS.gray, ...MFONTS.body4 }}>View All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: MSIZES.padding }}>
                    <TripSummary
                        tripName={TripInfo.tripName}
                        date="14 - oct - 2022"
                        tag="Business"
                        isRequiredRiskAssessment={true}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={[
                            styles.tripItemWrapper,
                            styles.tripOptionWrapper,
                            { marginRight: MSIZES.padding },
                        ]}
                        onPress={() => navigation.navigate(AddExpenseScreen)}
                    >
                        <Image source={icons.expenses} />
                        <Text style={{ fontWeight: 'bold' }}>Expenses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tripItemWrapper, styles.tripOptionWrapper]}>
                        <Image style={{ height: 45 }} source={icons.budget} />
                        <Text style={{ fontWeight: 'bold' }}>Budget</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.tripItemWrapper,
                            styles.tripOptionWrapper,
                            { marginLeft: MSIZES.padding },
                        ]}
                        onPress={() => navigation.navigate(NoteScreen)}
                    >
                        <Image source={icons.bublenote} />
                        <Text style={{ fontWeight: 'bold' }}>Note</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    function renderEntries() {
        const HeaderComponent = () => (
            <View>
                {renderHeader()}
                {renderBanner(totalExpense)}
                {renderTrip()}
                {renderRecentEntries()}
            </View>
        );

        const renderRecentEntries = () => (
            <View
                style={{
                    flexDirection: 'column',
                    marginVertical: MSIZES.padding * 2,
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={{ ...MFONTS.h3 }}>Recent Entries</Text>
                </View>
            </View>
        );

        const renderItem: ListRenderItem<HomeEntriesItemProps> = ({ item }) => (
            <View style={styles.recentEntriesItemWrapper}>
                <View>
                    <Text style={{ ...MFONTS.h3 }}>{item.type}</Text>
                    <Text>{item.date}</Text>
                </View>
                <Text style={{ ...MFONTS.h3, color: MCOLORS.emerald }}>${item.amount}</Text>
            </View>
        );

        return (
            <FlatList
                ListHeaderComponent={HeaderComponent}
                contentContainerStyle={{ paddingHorizontal: MSIZES.padding * 3 }}
                numColumns={1}
                data={expenseList}
                keyExtractor={(item, index) => `_key${index.toString()}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{ marginBottom: 80 }} />}
            />
        );
    }

    return <Layout>{renderEntries()}</Layout>;
};
const styles = StyleSheet.create({
    recentEntriesItemWrapper: {
        marginVertical: MSIZES.base,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    recentEntriesCategoryDot: {
        backgroundColor: MCOLORS.black,
        borderRadius: 4,
        height: 10,
        width: 10,
    },
    recentEntriesCategoryItem: {
        padding: MSIZES.padding,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: MSIZES.padding,
    },
    recentEntriesCategoryText: {
        paddingLeft: 3,
        color: MCOLORS.white,
    },
    headerWrapper: {
        flex: 1,
        marginVertical: MSIZES.padding * 2,
        flexDirection: 'row',
    },
    bannerWrapper: {
        flex: 1,
        borderRadius: 20,
        padding: MSIZES.padding * 1.5,
        backgroundColor: MCOLORS.emerald,
    },
    tripItemWrapper: {
        padding: MSIZES.padding * 1.5,
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
    tripOptionWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});

export default HomeScreen;
