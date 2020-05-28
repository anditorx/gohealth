import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DumDokter2} from '../../../assets';
import {colors} from '../../../utils/colors';

const ListDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={DumDokter2} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Dr. Merry Carentina</Text>
        <Text style={styles.chat}>
          Baik ibu, terima kasih banyak atas wakt...
        </Text>
      </View>
    </View>
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

    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },

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
