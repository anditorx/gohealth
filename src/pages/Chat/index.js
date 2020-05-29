import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {colors} from '../../utils/colors';

const Chat = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Alexander Guerero"
        type="dark-profile"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
        <ChatItem />
        <ChatItem isMe />
        <ChatItem />
      </View>
      <InputChat />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chatDate: {
    fontSize: 11,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
