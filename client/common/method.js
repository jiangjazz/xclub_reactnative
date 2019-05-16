/*
 * @Author: Janzen
 * @Date: 2017-12-25 16:03:36
 * @Last Modified by: Janzen
 * @Last Modified time: 2019-05-16 09:37:33
 */
// import Vue from 'vue'
import emojiJSON from '../../assets/emoticonJson/index'
import xboy from '../../assets/emoticonJson/xboy'
let emoji = []
emojiJSON.map((item, index) => {
  emoji[index] = item
  return item
})
// 扩展图片编译
emoji.push({
  title: 'Max',
  type: 'image',
  content: xboy
})
// const {
//   $message
// } = Vue.prototype
/**
 * 加密编辑框内容
 * @param {string} str 传入的编辑框内容
 */
export const encryptionMsg = function (str) {
  if (typeof str !== 'string') {
    // $message.error('格式化的内容不是字符串')
    return ''
  }
  return str.replace(/</g, '[')
    .replace(/>/g, ']')
    .replace(/&nbsp;/g, ' ')
}

/**
 * 格式化时间
 * @param {string|number} str 传入的日期时间戳（计算到秒）
 * @param {number} type 需要转化的时间格式，默认1：精确到秒；2:精确到天
 */
export const formatData = function (value, type = 1) {
  let d = new Date(Number(value) * 1000)
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  let day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
  let hour = d.getHours() < 10 ? '0' + d.getHours() : '' + d.getHours()
  let minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : '' + d.getMinutes()
  let seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : '' + d.getSeconds()
  let result = ''
  switch (type) {
    case 3:
      result = `${year}-${month}-${day} ${hour}:${minutes}`
      break
    case 2:
      result = `${year}-${month}-${day}`
      break
    case 1:
    default:
      result = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
      break
  }
  return result
}
/**
 * 锚点跳转
 * @param {string} selector 元素名称，例：'#id'
 * @param {vue} _this vue上下文
 */
export const goAnchor = function (selector, _this) {
  setTimeout(() => {
    const anchor = _this.$el.querySelector(selector)
    console.log(anchor)
    if (anchor) {
      document.body.scrollTop = anchor.offsetTop // chrome
      document.documentElement.scrollTop = anchor.offsetTop // firefox
    }
  }, 500)
}

/**
 * 格式化html字符串
 * @param {string} str html字符串
 */
export const formatHtml = function (str) {
  let msg = str || ''
  return msg.replace(/\[/gi, '\<').replace(/\]/gi, '\>')
}
/**
 * 格式化emoji表情
 */
export const formatEmoji = function (str, load) {
  // console.log(str)
  let emojiRg = /\{:[a-zA-Z0-9]+_[a-zA-Z0-9]+:}/g
  let emojiImgRg = /[\<\[]img.*?[\>\]]/g // img 正则
  let reString = str || ''
  let _emojiArr = str.match(emojiRg)
  if (load) {
    let _arr = []
    let _obj = {}
    emoji.forEach((item, index) => {
      _arr = _arr.concat(item.content)
    })
    _arr.forEach((item, index) => {
      _obj[item.alt] = item.src
    })
    // 解决历史遗留问题
    reString = reString.replace(emojiImgRg, (item, index, str) => {
      let match = item.match(emojiRg)
      if (match && match[0]) {
        return match[0]
      } else {
        return item
      }
    })
    /* console.log(reString)
    console.log('reString', reString.replace(/data-w-e=\"1\"\>/g, '')) */
    return reString.replace(/(data-w-e=\"1\"\>)/g, '').replace(emojiRg, (item, index, str) => {
      return `<img src="${_obj[item]}" alt="${item}" data-w-e="1" />`
    })
  } else {
    let sIndex = 0
    return reString.replace(emojiImgRg, (item, index, str) => {
      console.log(item)
      if (/\{:[a-zA-Z0-9]+_[a-zA-Z0-9]+:}/.test(item)) {
        return `${_emojiArr[sIndex++]}`
      } else {
        return item
      }
    })
  }
}

/**
 * 面包屑导航
 * @param route
 * @param username
 * @param pathName
 */
export const formatBreadcrumb = function (route, username, pathName, uid) {
  let breadcrumb
  switch (route) {
    case 'ucenter':
      if (uid) {
        breadcrumb = [{
          name: username,
          path: `/ucenter/account/posts?uid=${uid}`
        }, {
          name: pathName,
          path: ''
        }]
      } else {
        breadcrumb = [{
          name: username,
          path: '/ucenter/account/posts'
        }, {
          name: pathName,
          path: ''
        }]
      }
      break
    default:
      break
  }
  this.$store.commit('header/setbreadcrumb', breadcrumb)
}

export const randomString = function (length) {
  length = length || 32
  // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
  let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  let maxPos = $chars.length
  let pwd = ''
  for (let i = 0; i < length; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

export const fileCountry = function(country) {
  let msg = country || ''
  return msg.replace(/\[|CotedIvoire/g, "Côte d'Ivoire")
}

// 匹配路由看当前active的nav
export const matchParams = function (url) {
  let {path} = this.$route
  // 将/global替换为空
  let regexp = new RegExp(`^${url.replace('/en', '').replace('/global', '').replace('/', '\/')}(\\?[\\s\\S]*)?$`, 'gi')
  return {
    active: regexp.test(path)
  }
}
