import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/colors';
import {IconNextDark} from '../../../assets';

const ListDoctor = ({picture, name, chat, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={picture} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{chat}</Text>
      </View>
      {type === 'next' && <IconNextDark />}
    </TouchableOpacity>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 17,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  content: {flex: 1},
  name: {
    fontSize: 16,
    color: colors.text.primary,
  },
  chat: {
    fontSize: 12,
    fontWeight: '300',
    color: colors.text.secondary,
  },
});
