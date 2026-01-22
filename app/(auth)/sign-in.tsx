import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })


  const signIn = async () => {
    if (!form.email || !form.password) return Alert.alert('Error', 'Please fill in all fields')

    setIsSubmitting(true)

    try {
      // Call Appwrite Sign In function
      Alert.alert('Success', 'User signed in successfully')
      router.replace('/');
    } catch (error) {
      Alert.alert('Error', 'Failed to sign in')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
      <CustomInput
        placeholder='Enter your email'
        label='Email'
        value={form.email}
        keyboardType='email-address'
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))} />

      <CustomInput
        placeholder='Enter your password'
        label='Password'
        value={form.password}
        secureTextEntry={true}
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))} />

      <CustomButton
        title='Sign In'
        onPress={signIn}
        isLoading={isSubmitting}
      />

      <View className='flex justify-center mt-5 flex-wrap flex-row gap-2'>
        <Text className='base-regular text-gray-100'>
          Don't have an account?
        </Text>
        <Link href='/sign-up' className='base-bold text-primary'>Sign Up</Link>
      </View>
    </View>
  )
}

export default SignIn