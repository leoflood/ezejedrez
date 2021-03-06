import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function GameResultView() {
  const history = useHistory();
  const location = useLocation();
  const language = useSelector((state) => state.language);

  const result = location.state.result;

  return (
    <View style={styles.container}>
      <View style={styles.mainMenu}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>
            {result.draw
              ? language.messages['draw']
              : language.messages[`${result.winner}Wins`]}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => history.push('/')}
        >
          <Text style={styles.text}>{language.messages['back']}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainMenu: {
    alignSelf: 'stretch', // Width 100%
    flex: 1, // Height 100%
    backgroundColor: '#D8AF86',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: 200,
    height: 75,
    backgroundColor: '#8E5431',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  titleContainer: {
    marginBottom: 20,
  },
});
