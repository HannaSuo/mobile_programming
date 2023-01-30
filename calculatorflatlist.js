import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList} from 'react-native';

export default function App() {
    const [firstNum, setFirstNum] = React.useState();
    const [secondNum, setSecondNum] = React.useState();
    const [result, setResult] = React.useState();
    const[history, setHistory] = React.useState([]);
    let total;

    const add = () => {
        total = parseInt(firstNum) + parseInt(secondNum)
        setResult(total)
        setHistory([...history, firstNum + " + " + secondNum + " = " + total])
        setFirstNum();
        setSecondNum();
    }

    const decrement = () => {
        total = parseInt(firstNum) - parseInt(secondNum)
        setResult(total)
        setHistory([...history, firstNum + " - " + secondNum + " = " + total])
        setFirstNum();
        setSecondNum();
    }
    

  return (
    <View style={{flex: 8, justifyContent: 'center'}}>
        <View style={styles.container}>
        <Text>Result : {result}</Text>
        <TextInput
            style={{width: 200, borderColor: 'gray', borderWidth: 1}}
            keyboardType='numeric'
            value={firstNum}
            onChangeText={text => setFirstNum(text)}/>
        <TextInput
            style={{width: 200, borderColor: 'gray', borderWidth: 1}}
            keyboardType='numeric'
            value={secondNum}
            onChangeText={text => setSecondNum(text)}/>
      </View>
      <View style={buttonStyles.container1}>
        <Button
        onPress={add}
        title="+"/>
      <Button
        onPress={decrement}
        title="-"/>
      </View>
      {history.length > 0 &&
      <View style={historyStyle.container2}>
        <Text>History:</Text>
        <FlatList
        data={history}
        renderItem={({item}) => <Text>{item}</Text> }
        /></View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70
    
  },
});

const buttonStyles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginLeft: 70,
    marginRight: 70
  },
});

const historyStyle = StyleSheet.create({
  container2: {
    flex:5, 
    alignItems: 'center', 
    justifyContent: 'flex-start',

  }
});
//parseFloat or parseInt