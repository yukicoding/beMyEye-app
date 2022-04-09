import * as React from 'react';
import { View, TextInput, StyleSheet, Text, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';

export default function LoginScreen({ navigation }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>userName</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="userName"
        rules={{ required: true }}
      />
      <Text style={styles.label}>password</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button
          color={'#ec5990'}
          title="Button"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
