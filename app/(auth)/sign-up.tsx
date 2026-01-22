import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })


  const signIn = async () => {
    if (!form.name || !form.email || !form.password) return Alert.alert('Error', 'Please fill in all fields')

    setIsSubmitting(true)

    try {
      // Call Appwrite Sign Up function
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
        placeholder='Enter your name'
        label='Name'
        value={form.name}
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))} />

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
        title='Sign Up'
        onPress={signIn}
        isLoading={isSubmitting}
      />

      <View className='flex justify-center mt-5 flex-wrap flex-row gap-2'>
        <Text className='base-regular text-gray-100'>
          Already have an account?
        </Text>
        <Link href='/sign-in' className='base-bold text-primary'>Sign In</Link>
      </View>
    </View>
  )
}

export default SignUp