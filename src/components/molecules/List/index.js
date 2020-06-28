import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/colors';
import {
  IconNextDark,
  IconProfileGreen,
  IconLanguages,
  IconStarGreen,
  IconNoteGreen,
} from '../../../assets';

const List = ({picture, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconProfileGreen />;
    }
    if (icon === 'languages') {
      return <IconLanguages />;
    }
    if (icon === 'rate') {
      return <IconStarGreen />;
    }
    if (icon === 'help-center') {
      return <IconNoteGreen />;
    }
    return <IconProfileGreen />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={picture} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconNextDark />}
    </TouchableOpacity>
  );
};

export default List;

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
  },
  content: {flex: 1, marginLeft: 16},
  name: {
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  desc: {
    fontSize: 12,
    fontWeight: '300',
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
