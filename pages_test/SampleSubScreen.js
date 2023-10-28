import * as React from 'react';
import { Text, View } from 'react-native';

export default function SampleSubScreen({ navigation, route }) {
  const {
    params: { subscriptionName },
  } = route;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{subscriptionName}</Text>
    </View>
  );
}
