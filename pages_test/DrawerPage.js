import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SampleSubScreen from './SampleSubScreen';

const subs = [
  { name: 'Sub 1' },
  { name: 'Sub 2' },
  { name: 'Sub 3' },
  { name: 'Foo' },
];

function getSubCountString(subCount) {
  const count = subCount;
  const isPlural = (subCount = 0 || subCount > 1);

  return `You have ${count} sub${isPlural && 's'}`;
}

function HomeScreen({ navigation, route }) {
  const {
    params: { subCount },
  } = route;

  const subString = getSubCountString(subCount);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Text>{subString}</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerPage() {
  const screens = subs.map(sub => (
    <Drawer.Screen
      initialParams={{ subscriptionName: sub.name }}
      name={sub.name}
      component={SampleSubScreen}
    />
  ));

  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen
        initialParams={{ subCount: subs.length }}
        name='Home'
        component={HomeScreen}
      />

      {screens}
    </Drawer.Navigator>
  );
}
