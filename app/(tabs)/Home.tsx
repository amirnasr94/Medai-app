import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import images from "../../constants/images";
import Search from "@/components/Search";
import Trending from "@/components/Trending";
import EmptyComponent from "@/components/EmptyComponent";

export default function Home() {
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  async function handleRefresh() {
    setRefreshing(true);
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id: 1 }]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => <Text>asd</Text>}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="flex-row items-start justify-between my-6">
              <View>
                <Text className="text-3xl text-white font-pmedium">
                  Welcome Back
                </Text>
                <Text className="text-2xl text-white font-pbold">
                  Amir Nasr
                </Text>
              </View>
              <View className="mt-5">
                <Image
                  source={images.logoSmall}
                  resizeMode="contain"
                  className="w-9 h-10"
                />
              </View>
            </View>
            <Search value={search} handleChangeText={(e) => setSearch(e)} />
            <View className="w-full flex-1 my-2">
              <Text className="text-gray-100 font-plight">Trending Videos</Text>
            </View>
            <Trending data={[{ id: 1 }, { id: 2 }]} />
          </View>
        )}
        ListEmptyComponent={() => {
          return (
            <EmptyComponent
              title="No Videos Found"
              subTitle="Be the dirst one to upload video"
            />
          );
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
