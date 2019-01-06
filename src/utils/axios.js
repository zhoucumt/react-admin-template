/* eslint-disable */
import axios from 'axios';

class HttpRequest {
    constructor (baseUrl = baseURL) {
        this.baseUrl = baseUrl;
        this.queue = {};
    }

    getInsideConfig () {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                // 让每个请求头携带自定义token
                token: ''
            }
        };
        return config;
    }

    destroy (url) {
        delete this.queue[url];
        if (!Object.keys(this.queue).length) {
          // Spin.hide()
        }
    }

    interceptors (instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                // Spin.show() // 不建议开启，因为界面不友好
            }
            this.queue[url] = true;
            return config;
        }, error => {
            return Promise.reject(error);
        })
        // 响应拦截
        instance.interceptors.response.use(res => {
            console.log('response:', res);
            let response = res.data;
            // 如果后端不是正常返回的'0000'状态，进入如下逻辑进行处理
            // mrzhou233
            if (response.resultCode !== '0000') {
                // do sth...,比如可以处理登出逻辑
                console.log('====')
            }

            this.destroy(url);
            const { data, status } = res;
            return { data, status };
        }, error => {
          this.destroy(url);
          // addErrorLog(error.response)
          return Promise.reject(error);
        })
    }

    request (options) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url);
        return instance(options);
    }
}

export default HttpRequest;
