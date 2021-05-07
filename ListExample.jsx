import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'connie', id: '1'},
    { name: 'yoshi', id: '2'},
    { name: 'mario', id: '3'},
    { name: 'luigi', id: '4'},
    { name: 'peach', id: '5'},
    { name: 'toad', id: '6'},
    { name: 'bowser', id: '7'},
  ])

  const pressHandler = (id) => {
    setPeople((prev) => {
      return prev.filter( item => item.id !== id);
    })
  }


  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
      { people.map(person => (
            <View key={person.key} >
              <Text style={styles.person}>{person.name}</Text>
            </View>
      ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10
  }

});
