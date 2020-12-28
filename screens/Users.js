import React from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';


const users = [
    {id: '1', name: 'Lian'},
    {id: '2', name: 'Ervin'},
]
export default () => {
  return (
    <View style={styles.container}>
      <FlatList 
          data={users}
          keyExtractor={x => x.id}
          renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
