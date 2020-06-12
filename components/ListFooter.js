import {ActivityIndicator, StyleSheet, View} from "react-native";
import React from "react";

const listFooter = ({loading}) => {
    if (!loading) {
        return null;
    }
    return (
        <View style={styles.indicatorContainer}>
            <ActivityIndicator style={styles.indicator}/>
        </View>
    );
};

const styles = StyleSheet.create({
    indicatorContainer: {
        width: '100%',
        height: '100%'
    },
    indicator: {
        color: '#000'
    }
});

export default listFooter