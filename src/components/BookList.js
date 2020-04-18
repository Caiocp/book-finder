import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet, Image } from "react-native";
import { APIKEY } from "../enviroment";
import Axios from "axios";

import defaultImage from "../../assets/book.jpg";

export default function BookList({ term }) {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [timeOuts, setTimeOuts] = useState(null);

  function renderBook({ item }) {
    return (
      <View style={styles.bookContainer}>
        {item.volumeInfo.imageLinks ? (
          <Image
            source={{
              uri: item.volumeInfo.imageLinks.smallThumbnail,
            }}
            style={styles.bookImage}
          />
        ) : (
          <Image source={defaultImage} style={styles.bookImage} />
        )}

        <View style={styles.bookDescriptionContainer}>
          <Text style={styles.bookTitle}>{item.volumeInfo.title}</Text>
          <Text style={styles.bookDescription} numberOfLines={5}>
            {item.volumeInfo.description}
          </Text>
        </View>
      </View>
    );
  }

  useEffect(() => {
    loadBooks();
  }, [term, page]);

  function loadBooks() {
    setTimeOuts(clearTimeout(timeOuts));
    if (term.length) {
      setTimeOuts(
        setTimeout(async () => {
          const { data } = await Axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${term}&key=${APIKEY}&startIndex=${page}`
          );
          data && setBooks(data.items);
        }, 300)
      );
    }
  }

  function loadMore() {
    setPage(page + 10);
  }

  return (
    <View>
      <FlatList
        data={books}
        keyExtractor={(book) => book.id}
        renderItem={renderBook}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 20,
  },
  bookDescriptionContainer: {
    flexDirection: "column",
    width: "70%",
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
  },
  bookImage: {
    height: 150,
    width: 100,
    marginRight: 10,
  },
  bookDescription: {
    fontSize: 14,
    color: "#666",
  },
});
