import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function LayoutAuth() {
  return (
    <>
      <Stack>
        <Stack.Screen name='signIn' options={{headerShown:false,title:'sign-in',headerTitle:'sss'}}/>
        <Stack.Screen name='signUp' options={{headerShown:false}}/>
      </Stack>
    </>
  )
}

const styles = StyleSheet.create({})