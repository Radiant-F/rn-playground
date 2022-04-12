import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CollapsibleHeader1 from '../components/screen/CollapsibleHeader1';

export default function CollapsibleHeader() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <CollapsibleHeader1 />
      <Text>CollapsibleHeader</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
