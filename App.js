import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: 1},
    {text: 'create an app', key: 2},
    {text: 'apply to jobs', key:  3},
    {text: 'do a leetcode practice problem', key: 4}
  ])


  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.content}>
        {/* {to do form} */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }


});
