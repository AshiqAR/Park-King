import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import SearchBar from '../assets/components/SearchBar';
import { BACKEND_URL } from '@env';
import axios from 'axios';

export default function SearchPlaceScreen() {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [listData, setListData] = useState([]);
    let debounceTimer;

    const handleSearch = useCallback(search => {
        setSearchPhrase(search);
        clearTimeout(debounceTimer);
        if (search != "") {
            debounceTimer = setTimeout(() => {
                performSearch(search);
            }, 800);
        }
    }, []);

    const performSearch = async search => {
        try {
            console.log(search);
            const url = `${BACKEND_URL}/searchPlace?searchPhrase=${search}`;
            const { data } = await axios.get(url);
            setListData(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setListData([]);
        }
    };

    useEffect(() => {
        if (!searchPhrase) {
            setListData([]);
        }
    }, [searchPhrase]);

    const renderListItem = useCallback(({ item }) => {
        return (
            <TouchableOpacity
                key={item.index}
                style={{
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightgray',
                    paddingHorizontal: 20,
                }}
                onPress={() => {
                    console.log('pressed', item);
                }}
            >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.city}</Text>
                <Text style={{ fontSize: 14 }}>{item.district}</Text>
            </TouchableOpacity>
        );
    }, []);

    return (
        <View style={{ flexDirection: 'column' }}>
            <SearchBar
                clicked={true}
                searchPhrase={searchPhrase}
                setSearchPhrase={handleSearch}
                setClicked={() => { }}
            />
            {listData.length === 0 && searchPhrase !== '' ? (
                <Text style={{ alignSelf: 'center', color: 'red', fontSize: 15, fontWeight: 'bold' }}>
                    No results found
                </Text>
            ) : null}
            <FlatList
                data={listData}
                renderItem={renderListItem}
                style={{ maxHeight: '100%', width: '100%' }}
            />
        </View>
    );
}
