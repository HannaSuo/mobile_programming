import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList} from 'react-native';


export default function App() {
    const[shopping, setShopping] = useState('');
    const[shoppingList, setShoppingList] = useState([]);

    const addToList = () => {
        if(shopping) {
            setShoppingList([...shoppingList,shopping]);
            setShopping("");
        } else {
            Alert.alert("Please, type in the item first")
        }
        
    }

    const listSeparator = () => {
        return(
            <View style={{height:1, backgroundColor: 'pink'}} />
        );
    }
    

    return (
    <View style={{flex: 10}}>
    <View style={input.container3}>
        <Text>Type in an item: </Text>
        <TextInput
            style={{width: 200, borderColor: 'gray', borderWidth: 1}}
            value={shopping}
            onChangeText={shopping => setShopping(shopping)}
        />
    </View>
    <View style={button.container1}>
        <Button
        title="Add to shopping list"
        onPress={addToList}
        />
        <Button
        title="Clear list"
        onPress={() => setShoppingList([])}/>
    </View>
    <View style={list.container2}>
    {shoppingList.length > 0 && <Text style={{fontSize: 22, textDecorationLine: 'underline', color: 'gray' }}>Things to buy</Text> }
        <FlatList
        data={shoppingList}
        ItemSeparatorComponent={listSeparator}
        renderItem={({item}) => <Text style={{fontSize:18}}>{item}</Text>}
        />
    </View> 
    </View>
      );
}

const button = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    }
  });

  const input = StyleSheet.create({
    container3: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
  })

  const list = StyleSheet.create({
    container2: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });

  //if you want to render multiple components you need as many text components inside a parent view