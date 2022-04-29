/*
 * @Author: your name
 * @Date: 2021-11-24 21:42:50
 * @LastEditTime: 2021-11-25 15:26:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /wmh5playersdk/wmplayer/common/eventEmit.js
 */
'use strict'
export default class EventEmitter {
  constructor() {
    this._events = {}
    this._domEvents = []
  }

  on(eventName, callback) {
    if (!this._events) {
      this._events = {}
    }
    if (this._events[eventName]) {
      // node的EventEmitter模块自带的特殊事件，该事件在添加新事件监听器的时候触发
      if (this.eventName !== 'newListener') {
        this.emit('newListener', eventName)
      }
    }
    const callbacks = this._events[eventName] || []
    callbacks.push(callback)
    this._events[eventName] = callbacks
  }

  emit(eventName, ...args) {
    const callbacks = this._events[eventName] || []
    callbacks.forEach((cb) => cb.call(this, ...args))
  }

  once(eventName, callback) {
    const one = (...args) => {
      callback(...args)
      this.off(eventName, one)
    }
    one.initialCallback = callback
    this.on(eventName, one)
  }

  off(eventName, callback) {
    const callbacks = this._events[eventName] || []
    const newCallbacks = callbacks.filter(
      (fn) =>
        fn != callback &&
        fn.initialCallback != callback /* 用于once的取消订阅 */
    )
    this._events[eventName] = newCallbacks
  }

  /***
   * 移除所有事件
   */
  offAll() {
    this._events = {}
  }

  /**
   *监听事件
   * @param {*} target
   * @param {*} eventType
   * @param {*} handle
   */
  addEvents(target, eventType, handle) {
    this._domEvents.push({
      target: target,
      eventType: eventType,
      handle: handle
    })
    if (document.addEventListener) {
      this.addEvents = (target, eventType, handle) => {
        this._domEvents.push({
          target: target,
          eventType: eventType,
          handle: handle
        })
        target.addEventListener(eventType, handle, false)
      }
    } else {
      this.addEvents = (target, eventType, handle) => {
        this._domEvents.push({
          target: target,
          eventType: eventType,
          handle: handle
        })
        target.attachEvent('on' + eventType, () => {
          handle.call(target, arguments)
        })
      }
    }
    this.addEvents(target, eventType, handle)
  }
  removeEvents(target, eventType, handle) {
    if (document.removeEventListener) {
      this.removeEvents = (target, eventType, handle) => {
        target.removeEventListener(eventType, handle, false)
      }
    } else {
      this.removeEvents = (target, eventType, handle) => {
        target.detachEvent('on' + eventType, () => {
          handle.call(target, arguments)
        })
      }
    }
    this.removeEvents(target, eventType, handle)
  }
  /***
   * 删除dom元素下所有事件
   * @param target
   */
  removeDomEvent(target) {
    for (let i = 0; i < this._domEvents.length; i++) {
      let item = this._domEvents[i]
      if (item.target===target) {
        this.removeEvents(item.target, item.eventType, item.handle)
        this._domEvents.splice(i, 1)
        i--
      }
    }
  }
  removeAllEvent() {
    for (let i = 0; i < this._domEvents.length; i++) {
      let item = this._domEvents[i]
      this.removeEvents(item.target, item.eventType, item.handle)
    }
    this._domEvents = []
  }
}

export {EventEmitter}