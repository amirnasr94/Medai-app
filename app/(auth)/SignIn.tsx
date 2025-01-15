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
import { Link, router } from "expo-router";
("../../constants/images");
import { users } from "../../constants/user";
import * as accounts from "../user.json";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loadiong, setLoading] = useState(false);

  const handleSubmit = () => {
    const allUsers = JSON.parse(JSON.stringify(accounts)).default;
    const index = allUsers.findIndex((user: any) => {
      return user.email === form.email && user.password === form.password;
    });

    if (index !== -1) {
      router.replace('/Home')
    } else alert("faild");
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
        <CustomButton
          title="Sign In"
          containerStyles="mt-7"
          isLoading={loadiong}
          handlePress={handleSubmit}
        />
        <View className="justify-center pt-5 flex-row gap-4">
          <Text className="text-lg text-gray-100 font-pregular">
            Don't have an Account?
          </Text>
          <Link
            href="/signUp"
            className="text-lg text-secondary font-psemibold"
          >
            Sign Up
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
