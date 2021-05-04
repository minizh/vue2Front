import axios from '@/utils/request'

/**
 * 获取验证码
 * @param {String} sid 唯一标识
 * @returns {Promise}
 */
const getCode = sid => {
  // return axios.request({
  //   method: 'delete',
  //   url: /delete...'
  // })
  return axios.get('/public/getCaptcha', {
    params: {
      sid: sid
    }
  })
}

/**
 * 找回密码
 * @param {Object} option 用户信息 {邮箱，验证码}
 * @returns {Promise}
 */
const forget = option => {
  return axios.post('/forget', {
    ...option
  })
}

/**
 * 登录
 * @param {Object} loginInfo 用户登陆信息 {}
 * @returns {Promise}
 */
const login = loginInfo => {
  return axios.post('/login/login', {
    ...loginInfo
  })
}

/**
 * 注册接口
 * @param {*} regInfo 用户注册信息
 */
const reg = (regInfo) => {
  return axios.post('/login/reg', {
    ...regInfo
  })
}

/**
 * 重置密码接口
 * @param {*} info 重置密码信息
 */
const reset = (info) => axios.post('/login/reset', {
  ...info
})

export { getCode, forget, login, reg, reset }
