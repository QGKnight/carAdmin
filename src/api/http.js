import axios from 'axios'
import store from '@/store/index.js'
import { Message } from 'element-ui'
const http = {}
const baseUrl = 'http://localhost:8080'
var instance = axios.create({
    timeout: 5000,
    baseUrl
})

// 添加请求拦截器
instance.interceptors.request.use(
    function(config) {
        // 请求头添加token
        if (store.state.UserToken) {
            config.headers.Authorization = store.state.UserToken
        }
        return config
    },
    function(error) {
        return Promise.reject(error)
    }
)

// 响应拦截器即异常处理
instance.interceptors.response.use(
    response => {
        return response.data
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
            case 400:
                err.message = '请求出错'
                break
            case 401:
                Message.warning({
                    message: '授权失败，请重新登录'
                })
                store.commit('LOGIN_OUT')
                setTimeout(() => {
                    window.location.reload()
                }, 1000)

                return
            case 403:
                err.message = '拒绝访问'
                break
            case 404:
                err.message = '请求错误,未找到该资源'
                break
            case 500:
                err.message = '服务器端出错'
                break
            }
        } else {
            err.message = '连接服务器失败'
        }
        Message.error({
            message: err.message
        })
        return Promise.reject(err.response)
    }
)

http.get = function(url, options) {
    return new Promise((resolve, reject) => {
        instance
            .get(url, options)
            .then(response => {
                if (response.code === 0) {
                    resolve(response.data)
                } else {
                    Message.error({
                        message: response.message
                    })
                    reject(response.message)
                }
            })
            .catch(e => {
                console.log(e)
            })
    })
}

http.post = function(url, data, options) {
    return new Promise((resolve, reject) => {
        instance
            .post(url, data, options)
            .then(response => {
                if (response.code === 0) {
                    resolve(response.data)
                } else {
                    Message.error({
                        message: response.message
                    })
                    reject(response.message)
                }
            })
            .catch(e => {
                console.log(e)
            })
    })
}

export default http

// import axios from 'axios'
// import { Message, Loading } from 'element-ui';
// import * as utils from '../utils'
// import router from '../router/router.js'

// let loading;

// function startLoading() {    
//     loading = Loading.service({
//         lock: true,
//         text: '加载中...',
//         background: 'rgba(0, 0, 0, 0.7)'
//     })
// }
// function endLoading() {    
//     loading.close()
// }
// axios.defaults.timeout = 5000;
// // 设置默认请求头
// // axios.defaults.headers = {
// //     'X-Requested-With': 'XMLHttpRequest',
// //     'Content-type': 'application/json;charset=UTF-8'
// // }
// // 请求拦截  设置统一header
// axios.interceptors.request.use(config => {
//     // 加载
//     startLoading()
//     const token=utils.storage.get('token');
//     if (token){
//         config.headers.Authorization = token;
//     }   
//     return config
// }, error => {
//     return Promise.reject(error)
// })

// // 响应拦截  401 token过期处理
// axios.interceptors.response.use(response => {
//     endLoading()
//     return response
// }, error => {
//     // 错误提醒
//     endLoading()
//     Message.error(error.response.data)

//     const { status } = error.response
//     if (status == 401) {
//         Message.error('token值无效，请重新登录')
//         // 清除token
//         utils.storage.remove('token');
//         // 页面跳转
//         router.push('/index')
//     }

//     return Promise.reject(error)
// })
// export default axios;