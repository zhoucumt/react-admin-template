/**
 * @file 首页请求方法
 * @authour zhouqinghuaicumt@163.com
 * @date 2019-01-06
 */

import request from '../utils/ajax';

export default {
    /**
     * 首页：基础数据
     *
     * @param {Object} params 参数信息
     * @return {Object} obj response信息
     */
    getBasicData(params) {
        return request.request({
            url: '/get-project-info',
            method: 'get',
            params
        });
    }
};