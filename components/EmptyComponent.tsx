import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import images from "../constants/images";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

export default function EmptyComponent({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <View className="justify-center items-center px-5 mb-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-lg text-center font-psemibold text-white">
        {title}
      </Text>
      <Text className="text-sm font-pmedium text-gray-100">{subTitle}</Text>
      <CustomButton
        isLoading={false}
        title="Create Video"
        containerStyles="w-full my-5"
        handlePress={() => router.push("/Create")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
