import * as React from 'react';
import { useEffect, useState } from 'react';

import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';

import { getInfo } from '../utils/request/service/getInfo';
import request from '../utils/request';
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
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    async function fetchInfo() {
      const result = await getInfo();
      setList(result);
    }
    fetchInfo();
  }, []);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // dispatch(increase({ value: data.addCount }));
  };
  // const count = useSelector((state: RootState) => state.count.value);
  // const dispatch = useDispatch();

  const LoginButton = ({ onPress, title }: any) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  const LoginImage = ({ uri }: any) => {
    return (
      <View>
        <Image style={styles.imageStyle} source={{ uri: uri }} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <LoginImage uri={'https://facebook.github.io/react/logo-og.png'} />
      <View
        style={{ flex: 1, justifyContent: 'space-around', paddingTop: 100 }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>{'我想成为志愿者'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log(1)}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>{'我需要帮助'}</Text>
        </TouchableOpacity>
      </View>
      {list.map((item: any) => {
        return (
          <View>
            <View>小名{item.userName}</View>
            <View>密码：{item.password}</View>
            <View>小名：{item.nickName}</View>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 15,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: 'white',
  },

  imageStyle: {
    width: '100%',
    height: 200,
  },
});
