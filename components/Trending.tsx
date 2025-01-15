import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Trending<T extends Record<string, string | number>[]>({
  data,
}: {
  data: T;
}) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      renderItem={(item) => <Text></Text>}
    />
  );
}

const styles = StyleSheet.create({});
