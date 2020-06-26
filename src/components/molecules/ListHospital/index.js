import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../utils/colors';

const ListHospital = ({id, picture, type, name, address}) => {
  return (
    <View style={styles.content} key={id}>
      <Image source={{uri: picture}} style={styles.imgHospital} />
      <View>
        <Text style={styles.nameHospital}>{type}</Text>
        <Text style={styles.nameHospital}>{name}</Text>
        <Text style={styles.addressHospital}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  content: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 17,
    paddingVertical: 10,
  },
  imgHospital: {
    height: 60,
    width: 80,
    borderRadius: 12,
    marginRight: 12,
  },
  nameHospital: {
    fontSize: 16,
    color: colors.text.primary,
  },
  addressHospital: {
    fontSize: 12,
    fontWeight: '300',
    color: colors.text.secondary,
    marginTop: 5,
  },
});
