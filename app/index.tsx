import { Link, Stack } from 'expo-router';

import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';

export default function Home() {
  return (
    <View>
      <Text className="mt-5 text-center text-3xl text-red-500">Home</Text>
    </View>
  );
}
