import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const HolidaysList = ({ navigation }) => {
    const [holidays, setHolidays] = useState([]);
    const [search, setSearch] = useState('');

    // Fetch data from the updated API
    useEffect(() => {
        fetch('https://data.gov.sg/api/action/datastore_search?resource_id=d_3751791452397f1b1c80c451447e40b7')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (!data.result || !data.result.records) {
                    throw new Error('Invalid data format received');
                }
                setHolidays(data.result.records);
            })
            .catch(error => console.error('Fetch error:', error));
    }, []);

    // Filter holidays based on search input
    const filteredHolidays = holidays.filter(h =>
        h.holiday.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search Holiday..."
                onChangeText={setSearch}
            />
            <FlatList
                data={filteredHolidays}
                keyExtractor={item => item.date}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('Details', { item })}
                    >
                        <Text style={styles.title}>{item.holiday}</Text>
                        <Text>{item.date}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

// Styles for the screen
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    searchInput: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 8 },
    item: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' },
    title: { fontSize: 18, fontWeight: 'bold' }
});

export default HolidaysList;
