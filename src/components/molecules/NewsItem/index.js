import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';

const NewsItem = ({title, date, image, body}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={{uri: image}} style={styles.image} />
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
