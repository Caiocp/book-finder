import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import BookList from '../../components/BookList';

export default function Main({ navigation }) {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar por título ou autor"
          placeholderTextColor="#888"
          onChangeText={setSearch}
          value={search}
        />
      </View>

      <BookList term={search} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginTop: Constants.statusBarHeight + 20,
  },
  searchSection: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    height: 45,
    width: '90%',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#e0e0e0',
  },
});
