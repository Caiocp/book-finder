import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import BookList from "../../components/BookList";

export default function Main() {
  const [search, setSearch] = useState("");
  console.log(`o termo '${search}' foi passado`);

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

      <BookList term={search} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  searchSection: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    height: 45,
    width: "90%",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#ebebeb",
  },
  searchIcon: {},
});
