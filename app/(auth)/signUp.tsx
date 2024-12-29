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
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import * as FileSystem from "expo-file-system";

export default function SignUp() {
  // const fs = require("fs");
  const [form, setForm] = useState({
    Username: "",
    email: "",
    password: "",
  });
  const [loadiong, setLoading] = useState(false);

  const handleSubmit = async () => {
    const user = {
      id: 3,
      name: form.Username,
      email: form.email,
      password: form.password,
    };
    // console.log(FileSystem.documentDirectory);
    
    // FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'z.json', JSON.stringify(user),{encoding:FileSystem.EncodingType.UTF8});
    const file = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'z.json')
    console.log(':',file);
    
  };

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
            Sign up to to Aora
          </Text>
        </View>
        <FormField
          title="Username"
          placeholder=""
          value={form.Username}
          handleChangeText={(value) =>
            setForm((prevState) => ({ ...prevState, Username: value as any }))
          }
          styles="mt-7"
          keyboardType="email-address"
        />
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
        <CustomButton
          title="Sign In"
          containerStyles="mt-7"
          isLoading={loadiong}
          handlePress={handleSubmit}
        />
        <View className="justify-center pt-5 flex-row gap-4">
          <Text className="text-lg text-gray-100 font-pregular">
            Have an already Account?
          </Text>
          <Link
            href="/signIn"
            className="text-lg text-secondary font-psemibold"
          >
            Log In
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
