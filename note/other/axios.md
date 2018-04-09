> 手上在整理vue admin的东西，关于axios的内容，用到什么就详细整理一下对应的api。 整理完这篇，感觉自己是完全在翻译官方文档了😂 ，当然都是按自己理解写的，很多自己的语言，反正是给自己看的。 参照然后改写官方的提供的examples，api理解起来还是比较简单的。

`注意几点`
- axios请求的结果以Promise形式返回


### 1. get请求

```js
  // get方法接收一个url参数, 第二个参数(可选)是一个对象，对象的属性是固定的为params，即请求需要带的参数
  axios.get('/user?ID=123')
    .then(function(res){
      console.log(res)
    })
    .catch(function(error){
      console.log(error)  
    })

  // 带第二个参数的写法
  axios.get('/user', {
    params: {
      ID: 123
    }
  })
  .then(function(res){
    console.log(res)
  })
  .catch(function(error){
    console.log(error)
  })  
```

### 2. post请求

```js
  // post方法，固定的接收两个参数，第一个是url地址， 第二个是需要提交的参数对象
  axios.post('/user', {
    firstName: 'will',
    lastName: 'wang'
  })
  .then(function(res){
    console.log(res)
  })
  .catch(function(error){
    console.log(error)
  })
```

### 3. 并发请求

> 并发请求，即实现多个请求同时发出，并发时长由请求接口中耗时最长的接口决定

```js
  // 步骤 1. 定义请求函数
  function getUserAccount() {
    return axios.get('/user/12345')
  }
  function c {
    return axios.get('/user/12345/permission')
  }
  
  // 2. 调用axios的all方法，实现并发，依次获取结果
  // all方法接收一个数组作为参数，数组的每项，是返回结果为一个axios请求的函数
  axios.all([getUserAccount(), getUserAccount()])
    .then(axios.spread(function(acct, perms) {
      // 当并发的请求都完成后，才会调用该函数
      // acct 为接口1获得结果
      // perms 为接口2获得结果
    }))
```

### 4. 自定义axios实例

> axios.create方法接收一个自定义配置参数，生成一个新的axios实例。 比如下面的例子，新实力继承了axios的所有方法，并且自定义了默认配置参数，每个通过instance发出的请求都将带有这些配置。

```js
  var instance = axios.create({
    baseURL: 'https://some-domain.com/api/', // 定义域名地址，方便和url的值进行拼接
    timeOut: 1000, // 请求超时时间限制
    headers: {'X-Custom-Header' : 'foobar'} // 自定义请求头
  })

  
```

### 5. axios请求配置属性解读

> 请求时可添加配置

- url(请求的服务器地址)属性是必填项
- 请求方法method默认是get请求

```js
  {
    // 必填项
    url: '/user',

    // 请求方式
    method: 'get', // 默认值

    // `baseURL` 定义了接口地址的相同部分，类似于做了基础配置，上面的url是接口的具体地址，最终发出的请求的url应当是 `baseURL + url`。 前提是url不是绝对路径，axios如果判断url是一个绝对路径(带协议、域名)，则请求的最终地址只是 `url` 里的地址
    // 自定义的axios实例里可以很方便的去定义baseURL
    baseURL: 'https://some-domain.com/api/',

    // `transformRequest` 跟后面要说的拦截应该是一个意思，有一些不同点 
    // 1. 这里的`transformRequest`，是在请求发出前的对数据的处理，也可以修改headers
    // 2. 只适用于'PUT', 'POST', 'PATCH'三种请求方式
    // 3. 函数必须有返回，且必须满足以下几种格式之一：string、Buffer、 FormData 、 StreamArrayBuffer
    // 4. 注意书写的格式：数组包函数，接受两个参数，请求时带的参数和headers对象
    transformRequest: [function (data, headers) {
      // 数据处理

      return data;
    }],

    // `transformResponse` 也是在数据被then\catch处理前，对数据进行处理
    transformResponse: [function (data) {
      // 数据处理

      return data;
    }],

    // `headers` 自定义请求头，业务中经常会加上几个业务区别字段
    headers: {'X-Requested-With': 'XMLHttpRequest'},

    // `params` 请求时添加到url中的参数，适用于get请求
    // 要求：必须是一个普通的对象或者URLSearchParams对象
    params: {
      ID: 12345
    },

    // TODO 没理解
    // `paramsSerializer` is an optional function in charge of serializing `params`
    // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
    paramsSerializer: function(params) {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    },

    // `data` 用于请求体中传递数据
    // 仅适用于三个方法：'PUT', 'POST', and 'PATCH'
    // 必须满足以下格式：
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - Browser only: FormData, File, Blob
    // - Node only: Stream, Buffer
    data: {
      firstName: 'Fred'
    },

    // `timeout` 指定请求时间，超过这个时间还无响应，本次请求就会被中止。单位毫秒
    timeout: 1000,

    // TODO 不太理解怎么使用
    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    withCredentials: false, // default

    // TODO 后面再看
    // `adapter` allows custom handling of requests which makes testing easier.
    // Return a promise and supply a valid response (see lib/adapters/README.md).
    adapter: function (config) {
      /* ... */
    },

    // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
    // This will set an `Authorization` header, overwriting any existing
    // `Authorization` custom headers you have set using `headers`.
    auth: {
      username: 'janedoe',
      password: 's00pers3cret'
    },

    // `responseType` 表示服务器返回的格式
    // 其他选项： 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // default

    // `responseEncoding` indicates encoding to use for decoding responses
    // Note: Ignored for `responseType` of 'stream' or client-side requests
    responseEncoding: 'utf8', // default

    // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
    xsrfCookieName: 'XSRF-TOKEN', // default

    // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
    xsrfHeaderName: 'X-XSRF-TOKEN', // default

    // 这个属性很不错
    // 暴露上传事件，可以添加上传过程中交互事件
    // `onUploadProgress` allows handling of progress events for uploads
    onUploadProgress: function (progressEvent) {
      // Do whatever you want with the native progress event
    },

    // 下载
    // `onDownloadProgress` allows handling of progress events for downloads
    onDownloadProgress: function (progressEvent) {
      // Do whatever you want with the native progress event
    },

    // 限制内容大小
    // `maxContentLength` defines the max size of the http response content allowed
    maxContentLength: 2000,

    // 筛选过滤
    // 根据http返回的状态码
    // 以下三种返回promise都会被resolve，然后交个then方法：返回true、null、undefined
    // 其他的返回都会将promise reject掉
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },

    // `maxRedirects` defines the maximum number of redirects to follow in node.js.
    // If set to 0, no redirects will be followed.
    maxRedirects: 5, // default

    // `socketPath` defines a UNIX Socket to be used in node.js.
    // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
    // Only either `socketPath` or `proxy` can be specified.
    // If both are specified, `socketPath` is used.
    socketPath: null, // default

    // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
    // and https requests, respectively, in node.js. This allows options to be added like
    // `keepAlive` that are not enabled by default.
    httpAgent: new http.Agent({ keepAlive: true }),
    httpsAgent: new https.Agent({ keepAlive: true }),

    // 'proxy' defines the hostname and port of the proxy server
    // Use `false` to disable proxies, ignoring environment variables.
    // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
    // supplies credentials.
    // This will set an `Proxy-Authorization` header, overwriting any existing
    // `Proxy-Authorization` custom headers you have set using `headers`.
    proxy: {
      host: '127.0.0.1',
      port: 9000,
      auth: {
        username: 'mikeymike',
        password: 'rapunz3l'
      }
    },

    // `cancelToken` specifies a cancel token that can be used to cancel the request
    // (see Cancellation section below for details)
    cancelToken: new CancelToken(function (cancel) {
    })
  }
```


### 6. axios返回对象属性解读


### 7. 请求、响应拦截


### 8. 错误处理


### 9. 取消请求


### 10. 注意事项