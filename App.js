import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'connie', key: '1'},
    { name: 'yoshi', key: '2'},
    { name: 'mario', key: '3'},
    { name: 'luigi', key: '4'},
    { name: 'peach', key: '5'},
    { name: 'toad', key: '6'},
    { name: 'bowser', key: '7'},
  ])


  return (
    <View style={styles.container}>
      <FlatList 
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.person}>{item.name}</Text>
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
  person: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }

});
