import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HolidayDetails = ({ route }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.holiday}</Text>
            <Text style={styles.detail}>📅 Date: {item.date}</Text>
            <Text style={styles.detail}>📍 Location: {item.observed}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: 'bold' },
    detail: { fontSize: 18, marginTop: 10 }
});

export default HolidayDetails;
