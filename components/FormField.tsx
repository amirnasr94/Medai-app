import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import clsx from "clsx";
import icons from "../constants/icons";

export default function FormField({
  title,
  value,
  handleChangeText,
  styles,
  placeholder,
  keyboardType,
  ...props
}: {
  title: string;
  value: any;
  handleChangeText: (value: string) => void;
  styles: string;
  placeholder: string;
  keyboardType: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const style = clsx("space-y-2", styles);
  return (
    <View className={style}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border border-red-500 w-full h-16 px-4 flex-row bg-black-100 rounded-lg focus:border-secondary items-center relative">
        <TextInput
          className="flex-1 w-full h-full text-white font-pbold text-base"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" ? (
          <TouchableOpacity
            onPress={() => setShowPassword((prevState) => !prevState)}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
