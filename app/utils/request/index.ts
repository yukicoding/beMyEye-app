import Request from './interface/request.interface';
import { AxiosResponse } from 'axios';

import type { RequestConfig } from './interface/types.inteface';

interface Response<T> {
  statusCode: number;
  desc: string;
  result: T;
}
interface baseRequestConfig<T> extends RequestConfig<Response<any>> {
  data?: T;
}

const baseRequest = new Request({
  baseURL: 'http://127.0.0.1:4523',
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => {
      console.log('实例请求拦截器');
      return config;
    },
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      console.log('实例响应拦截器');
      return result;
    },
  },
});

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {YWZRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const request = <D = any, T = any>(config: baseRequestConfig<D>) => {
  const { method = 'GET' } = config;
  if (method === 'get' || method === 'GET') {
    config.params = config.data;
  }
  return baseRequest.request<Response<T>>(config);
};
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return baseRequest.cancelRequest(url);
};
// 取消全部请求
export const cancelAllRequest = () => {
  return baseRequest.cancelAllRequest();
};

export default request;
