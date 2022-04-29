
export const methodTypes = {
  GET: 'GET',
  POST: 'POST',
}
export const ajaxRequest = (url, option, method, contentType = false) => {
  return new Promise((resolve, reject) => {
    let params
    try {
      if (Object.prototype.toString.call(option).slice(8, -1) !== 'Object') {
        reject({
          code: 205,
          data: {},
          success: false,
          desc: '',
          message: 'this params type is error.',
        })
      }
      if (method === methodTypes.GET) {
        let formData = []
        for (let key in option) {
          key != 'headers' && formData.push(''.concat(key, '=', option[key]))
        }
        if (formData.length > 0) {
          if (url.indexOf('?') === -1) {
            url = url + '?' + formData.join('&')
          } else {
            url = url + '&' + formData.join('')
          }
        }
      } else {
        params = JSON.stringify(option)
      }
      let xhr = new XMLHttpRequest()
      xhr.responseType = 'json'
      xhr.withCredentials = false
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response)
          } else {            
            reject({code: 204,status:xhr.status,res:xhr})
          }
        }
      }
      xhr.open(method, url, true)
      if (method === methodTypes.POST) {
        if (contentType) {
          xhr.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
          )
        } else {
          xhr.setRequestHeader('Content-Type', 'application/json')
        }
      }
      if (option.headers) {
        for (let header in option.headers) {
          xhr.setRequestHeader(header, option.headers[header])
        }
      }
      xhr.send(method === methodTypes.POST ? params : '')
    } catch (error) {
      reject({
        code: 205,
        data: {},
        success: false,
        desc: '',
        message: 'this httpRequset is error.',
      })
    }
  })
}
