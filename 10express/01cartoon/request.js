let axios = require('axios')

axios.defaults.baseURL = 'http://localhost:3000/';
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
async function getData() {
  let res=  await axios.get('/')
  console.log(res)
}
getData()