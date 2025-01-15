import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import icons from "../constants/icons";

export default function Search({
  value,
  handleChangeText,
}: {
  value: any;
  handleChangeText: (value: string) => void;
}) {
  return (
    <View className="border border-gray-400 w-full h-16 px-4 flex-row bg-black-100 rounded-lg items-center relative">
      <TextInput
        inputMode="text"
        className="flex-1 text-white font-pregular text-base"
        value={value}
        placeholder="search for a videos topic..."
        onChangeText={handleChangeText}
        placeholderTextColor="#7b7b8b"
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
