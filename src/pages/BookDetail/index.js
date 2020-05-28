import React from 'react';
import { WebView } from 'react-native-webview';

export default function BookDetail({ route, navigation }) {
  const { book } = route.params;

  navigation.setOptions({
    headerShown: true,
    title: 'Detalhes do livro',
    headerStyle: {
      backgroundColor: '#486ABC',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  });

  return <WebView source={{ uri: book.volumeInfo.previewLink }} />;
}
