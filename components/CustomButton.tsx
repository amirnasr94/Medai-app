import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import clsx from "clsx";

export default function CustomButton({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading: boolean;
}) {
  const style = clsx(
    "bg-secondary rounded-xl min-h-[62px] justify-center items-center",
    isLoading ? "opacity-50" : "",
    containerStyles
  );
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={style}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
