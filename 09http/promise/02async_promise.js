/**
 * 教你promise实现原理
 * - Promise标准解读
 * 1.只有一个then方法，没有catch，race，all等方法，甚至没有构造函数
 * 2.then方法返回一个新的Promise
 * 3.不同Promise的实现需要可以相互调用(interoperable)
 * 4.Promise的初始状态为pending，它可以由此状态转换为fulfilled（本文为了一致把此状态叫做resolved）或者rejected，一旦状态确定，就不可以再次转换为其它状态，状态确定的过程称为settle
 */
class Promise_ {
  // Promise构造函数接收一个executor函数，executor函数执行完同步或异步操作后，调用它的两个参数resolve和reject
  constructor(executor) {
    /*
      如果操作成功，调用resolve并传入value
      如果操作失败，调用reject并传入reason
    */

    var _this = this
    _this.status = 'pending'// Promise当前的状态
    _this.data = undefined // Promise的值
    _this.onResolvedCallback = []// Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
    _this.onRejectedCallback = []// Promise reject时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
    
    // 定义resolve和reject这两个函数
    /**
     * 基本上就是在判断状态为pending之后把状态改为相应的值，并把对应的value和reason存在this的data属性上面，之后执行相应的回调函数
     */
    function resolve(value) {
      setTimeout(function() { // 异步执行所有的回调函数
        if (_this.status === 'pending') {
          _this.status = 'resolved'
          _this.data = value// Promise的值
          for (var i = 0; i < _this.onResolvedCallback.length; i++) {
            _this.onResolvedCallback[i](value)
          }
        }
      })
    }
  
    function reject(reason) {
      setTimeout(function() { // 异步执行所有的回调函数
        if (_this.status === 'pending') {
          _this.status = 'rejected'
          _this.data = reason// Promise的值
          for (var i = 0; i < _this.onRejectedCallback.length; i++) {
            _this.onRejectedCallback[i](reason)
          }
        }
      })
    }
  
    try {// 考虑到执行executor的过程中有可能出错，所以我们用try/catch块给包起来，并且在出错后以catch到的值reject掉这个Promise
      executor(resolve, reject)// 执行executor并传入相应的参数
    } catch (reason) {
      reject(reason)
    }

  }

  /**
   * then方法
   * Promise对象有一个then方法，用来注册在这个Promise状态确定后的回调，很明显，then方法需要写在原型链上。
   * then方法会返回一个Promise，
   */
  // then方法接收两个参数，onResolved，onRejected，分别为Promise成功或失败后的回调
  then(onResolved, onRejected) {
    var _this = this
    var promise2
    // 根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理
    onResolved = typeof onResolved === 'function' ? onResolved : function(v) {
      return v
    }
    onRejected = typeof onRejected === 'function' ? onRejected : function(r) {
      throw r
    }

    // Promise总共有三种可能的状态，我们分三个if块来处理，在里面分别都返回一个new Promise。
    if (_this.status === 'resolved') {
      // 如果promise1(此处即为this/self)的状态已经确定并且是resolved，我们调用onResolved
      // 因为考虑到有可能throw，所以我们将其包在try/catch块里
      return promise2 = new Promise_(function(resolve, reject) {
        setTimeout(function() { // 异步执行onResolved
          try {
            var x = onResolved(_this.data)
            if(x instanceof Promise_) {// 如果onResolved的返回值是一个Promise对象，直接取它的结果做为promise2的结果
              x.then(resolve,reject)
            }else {
              resolve(x)// 否则，以它的返回值做为promise2的结果
            }
          } catch (reason) {
            reject(reason)// 如果出错，以捕获到的错误做为promise2的结果
          }
        })
      })
    }
    // 此处与前一个if块的逻辑几乎相同，区别在于所调用的是onRejected函数，就不再做过多解释
    if (_this.status === 'rejected') {
      return promise2 = new Promise_(function(resolve, reject) {
        setTimeout(function() { // 异步执行onRejected
          try {
            var x = onRejected(_this.data)
            if(x instanceof Promise_) {
              x.then(resolve,reject)
            }else {
              resolve(x)
            }
          } catch (reason) {
            reject(reason)
          }
        })
      })
    }
  
    if (_this.status === 'pending') {
      // 如果当前的Promise还处于pending状态，我们并不能确定调用onResolved还是onRejected，
      // 只能等到Promise的状态确定后，才能确实如何处理。
      // 所以我们需要把我们的**两种情况**的处理逻辑做为callback放入promise1(此处即this/self)的回调数组里
      // 逻辑本身跟第一个if块内的几乎一致，此处不做过多解释

      // 这里之所以没有异步执行，是因为这些函数必然会被resolve或reject调用，而resolve或reject函数里的内容已是异步执行，构造函数里的定义
      return promise2 = new Promise_(function(resolve, reject) {
        _this.onResolvedCallback.push(function(value) {
          try {
            var x = onResolved(value)
            if(x instanceof Promise_) {
              x.then(resolve,reject)
            }else {
              resolve(x)
            }
          } catch (r) {
            reject(r)
          }
        })
  
        _this.onRejectedCallback.push(function(reason) {
            try {
              var x = onRejected(reason)
              if(x instanceof Promise_) {
                x.then(resolve,reject)
              }else {
                resolve(x)
              }
            } catch (r) {
              reject(r)
            }
          })
      })
    }
  }
  // 为了下文方便，我们顺便实现一个catch方法
  catch(onRejected) {
    return this.then(null, onRejected)
  }
}



