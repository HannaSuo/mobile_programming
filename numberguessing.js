import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

export default function App() {
    const [guess, setGuess] = React.useState();
    const [counter, setCounter] = React.useState();
    const[random, setRandom] = React.useState();
    const[message, setMessage] = React.useState("");

    useEffect (() => {
      startGame();
    }, []); 

  const startGame = () => {
        setRandom(Math.floor(Math.random() * 100) + 1);
        setCounter(0);
        setMessage("Guess a number between 1-100");
        setGuess();
    }

    const checkGuess = () => {
      if(random - guess == 0) {
        Alert.alert("You guessed the number in " + counter + " guesses");
        startGame();
      } else if(random - guess > 0) {
        setMessage("Your guess " + guess + " is too low");
        setCounter(counter + 1);
        setGuess();
      } else if(random - guess < 0) {
        setMessage("Your guess " + guess + " is too high");
        setCounter(counter + 1);
        setGuess();
      }
    }

  return (
    <View style={styles.container}>
    <View><Text>{message}</Text></View>
    <View>
        <TextInput
            style={{width: 200, borderColor: 'gray', borderWidth: 1}}
            keyboardType='numeric'
            value={guess}
            onChangeText={guess => setGuess(guess)}/>
        <Button
        onPress={checkGuess}
        title="Make a Guess"/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
//onChangeText = {guess => setGuess(guess)}
