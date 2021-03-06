import HttpRequest from './axios';
import config from '../config';
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
const request = new HttpRequest(baseUrl);

export default request;