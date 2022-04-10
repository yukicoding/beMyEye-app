import * as React from 'react';
import { useEffect } from 'react';

import { View, TextInput, StyleSheet, Text, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';

import { getInfo } from '../utils/request/service/getInfo';
/**
 *
 *  Redux tools
 */

import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { descrease, increase } from '../store/slices/countSlice';

interface RootState {
  count: {
    value: number;
  };
}

export default function LoginScreen({ navigation }: any) {
  useEffect(() => {
    getInfo();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(increase({ value: data.addCount }));
  };
  const count = useSelector((state: RootState) => state.count.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>count:{count}</Text>
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
        name="addCount"
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
        name="descreaseCount"
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
