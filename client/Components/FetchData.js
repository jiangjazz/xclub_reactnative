
// cookie
let xclubcookie = ''

export default function FetchData(url, config = {}) {
  console.log(url, 999999)
  let {params = {}, body = {}, method = 'get', ...other } = config

  // 限定post方法才有body
  let formData = null
  if (method === 'post') {
    formData = new FormData();
    Object.keys(body).map(key => {
      formData.append(key, body[key]);
    });
  }
  

  // 格式化url
  let keysMap = Object.keys(params)
  if (keysMap.length > 0) {
    let parmsFormat = keysMap.map(key => {
      // console.log
      return (`${key}=${params[key]}`)
    }).join('&')

    if (url.indexOf('?') >= 0) {
      url =  (`${url}&${parmsFormat}`)
    } else {
      url = (`${url}?${parmsFormat}`)
    }
    
  }

  return fetch(url, {
    method: method,
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    credentials: true,
    body: formData,
    ...other
  })
    .then((response) => {
      console.warn(response, 99999)
      return response.json()
    })
    .catch(err => {
      console.warn(err, 11111)
    });
}