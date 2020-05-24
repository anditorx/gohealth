import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DumNews1} from '../../../assets';
import {colors} from '../../../utils/colors';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={DumNews1} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 17,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    maxWidth: '90%',
  },
  date: {
    fontSize: 12,
    color: colors.text.secondary,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
});
