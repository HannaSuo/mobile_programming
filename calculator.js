import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

export default function App() {
    const [firstNum, setFirstNum] = React.useState();
    const [secondNum, setSecondNum] = React.useState();
    const [result, setResult] = React.useState();

    const add = () => {
        var total = Number(firstNum) + Number(secondNum)
        setResult(total)
    }

    const decrement = () => {
        setResult(Number(firstNum) - Number(secondNum));
    }

  return (
    <View style={styles.container}>
        <View>
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
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const buttonStyles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5
  },
});