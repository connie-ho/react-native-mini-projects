import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import Header from './components/todo/Header';
import TodoItem from './components/todo/TodoItem';
import Form from './components/todo/Form';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1', created_at: Date.now()},
    {text: 'create an app', key: '2', created_at: Date.now()},
    {text: 'apply to jobs', key:  '3', created_at: Date.now()},
    {text: 'do a leetcode practice problem', key: '4', created_at: Date.now()}
  ])

  const pressHandler = (key) => {
    setTodos((prev) => {
      return prev.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text, setText) => {
    setTodos((prev) => {
      return [
        ...prev,
        { text, 
          key: Math.random().toString(), 
          created_at: Date.now()
        }
      ]
    })

    setText(prev => '');
  }


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Form 
          submitHandler={submitHandler}
        />
        <View style={styles.list}>
          <FlatList
            data={todos.sort((a, b) => b.created_at - a.created_at)}
            renderItem={({item}) => (
              <TodoItem 
                item={item} 
                pressHandler={pressHandler}
              />
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
