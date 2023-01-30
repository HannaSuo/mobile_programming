import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList} from 'react-native';


export default function App() {
    const [todo, setTodo] = useState('');
    const[todos, setTodos] = useState([]);

    const addTask = () => {
        setTodos([...todos,todo]);
        setTodo("");
    }

    const listSeparator = () => {
        return(
            <View style={{height:1, backgroundColor: 'pink'}} />
        );
    }
    

    return (
    <View style={styles.container}>
        <TextInput
            style={{width: 200, borderColor: 'gray', borderWidth: 1}}
            value={todo}
            onChangeText={text => setTodo(text)}
        />
        <Button 
        title="Add task"
        onPress={addTask}
        />
        <FlatList
        data={todos}
        ItemSeparatorComponent={listSeparator}
        renderItem={({item}) => <Text style={{fontSize:18}}>{item}</Text>}
        />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
    marginTop:80,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  //if you want to render multiple components you need as many text components inside a parent view