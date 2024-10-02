import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import images from "@/constants/images";
import FormField from "@/components/FormField";
("../../constants/images");

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //console.log();
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="justify-center items-center px-4 py-6 w-full">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px]"
          />
          <Text className="text-white text-2xl font-semibold font-psemibold">
            Log in to Aora
          </Text>
        </View>
        <FormField
          title="Email"
          placeholder=""
          value={form.email}
          handleChangeText={(value) =>
            setForm((prevState) => ({ ...prevState, email: value as any }))
          }
          styles="mt-7"
          keyboardType="email-address"
        />
        <FormField
          title="Password"
          placeholder=""
          value={form.password}
          handleChangeText={(value) =>
            setForm((prevState) => ({ ...prevState, password: value as any }))
          }
          styles="mt-7"
          keyboardType="email-address"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
