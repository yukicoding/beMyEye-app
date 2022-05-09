import request from '../../request';

export async function getInfo(params?: any) {
  return request({
    url: 'http://localhost:8082/user',
    method: 'GET',
    data: params,
    interceptors: {
      requestInterceptors: (config) => {
        console.log('接口请求拦截器');
        return config;
      },
      responseInterceptors: (config) => {
        console.log('接口响应拦截器');
        return config;
      },
    },
  });
}
