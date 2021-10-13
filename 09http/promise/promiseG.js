
class Promise_ {
  constructor (executor) {
    let that = this
    that.resolveCb = []
    that.rejectCb = []
    that.status = 'pending'

    function resolve (v) {
      setTimeout(()=>{
        if(that.status === 'pending') {
          that.status = 'resolved'
          that.data = v
          that.resolveCb.forEach(e=>{
            e(v)
          })
        }
      })
    }

    function reject(v) {
      setTimeout(() => {
        if(that.status === 'pending') {
          that.status = 'rejected'
          that.data = v
          that.rejectCb.forEach(e=>e(v))
        }
      });
    }
    
    try {
      executor(resolve,reject)
    } catch (e) {
      reject(e)
    }
  }

  then(resolveFn,rejectFn) {
    let that = this
    resolveFn = typeof resolveFn ==='function' ? resolveFn : v=>v
    rejectFn = typeof rejectFn === 'function' ? rejectFn : v=>{throw v}
    let promise2

    if(that.status === 'resolved') {
      return promise2 = new Promise_((resolve,reject)=>{
        setTimeout(function(){
          try {
            let x = resolveFn(that.data)
            if(x instanceof Promise_) {
              x.then(resolve, reject)
            }else {
              resolve(x)
            }
          } catch (e) {
            reject(e)
          }
        })
      })
    }
    if(that.status === 'rejected') {
      return promise2 = new Promise_((resolve,reject)=>{
        setTimeout(function(){
          try {
            let x = rejectFn(that.data)
            if(x instanceof Promise_) {
              x.then(resolve, reject)
            }else {
              resolve(x)
            }
          } catch (e) {
            reject(e)
          }
        })
      })
    }
    if(that.status === 'pending') {
      return promise2 = new Promise_((resolve,reject)=>{
        that.resolveCb.push(v=>{
          try {
            let x = resolveFn(v)
            if(x instanceof Promise_) {
              x.then(resolve,reject)
            }else {
              resolve(x)
            }
          } catch (e) {
            reject(e)
          }
        })

        that.rejectCb.push(v=>{
          try {
            let x= rejectFn(v)
            if(x instanceof Promise_) {
              x.then(resolve,reject)
            }else {
              resolve(x)
            }
          } catch (e) {
            reject(e)
          }
        })
      })
    }
  }

  catch(cb) {
    return this.then(null, cb)
  }
}