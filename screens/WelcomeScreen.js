import axios from 'axios';
import { useEffect, useState, useContext } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState(null);

  const authContext = useContext(AuthContext);
  const token = authContext.token;

  useEffect(() => {
    axios
      .get(
        'https://rn-authentication-a3781-default-rtdb.firebaseio.com/message.json?auth=' +
          token
      )
      .then((response) => {
        console.log(response.data);
        setFetchedMessage(response.data);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
