import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import ContactListItem from '../components/ContactListItem';
import { fetchContacts } from '../utility/api';
import {fetchContactsLoading, fetchContactsSucces, fetchContactsError} from '../store';
import { useDispatch, useSelector} from 'react-redux';
import { State } from 'react-native-gesture-handler';
const keyExtractor = ({ phone }) => phone;
const Contacts = ({navigation}) => {

    const {contacts, loading, error} = useSelector((State) =>State);
    const dispatch = useDispatch;
    useEffect(() => {
        dispatch(fetchContactsLoading());
        fetchContacts()
            .then(
                contacts => {
                dispatch(fetchContactsSucces(contacts));
            })
            .catch(
                e=>{
                    dispatch(fetchContactsError());
                })
    }, [])
    const contactsSorted = contacts.sort((a, b) => a.name.localeCompare(b.name));
    const renderContact = ({ item }) => {
        const { name, avatar, phone } = item;
        return <ContactListItem
                name={name}
                avatar={avatar}
                phone={phone}
                onPress={() => navigation.navigate("Profile",{ contact: item})}
            />;
    };

    return (
        <View style={StyleSheet.container}>
            {loading && <ActivityIndicator color='blue' size="large" />}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList
                    data={contactsSorted}
                    keyExtractor={keyExtractor}
                    renderItem={renderContact}
                />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    },
});

export default Contacts;
