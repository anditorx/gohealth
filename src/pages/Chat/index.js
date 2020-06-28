import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {colors} from '../../utils/colors';

const Chat = ({navigation, route}) => {
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <Header
        title={dataDoctor.data.fullName}
        desc={dataDoctor.data.profession}
        photo={{uri: dataDoctor.data.photo}}
        type="dark-profile"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
          <ChatItem />
          <ChatItem isMe />
          <ChatItem />
        </ScrollView>
      </View>
      <InputChat
        value={'j'}
        onChangeText={() => alert('input tap')}
        onButtonPress={() => alert('input press')}
      />
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
