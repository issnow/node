### 1.cookie是什么

cookie 也叫 HTTPCookie，是客户端与服务器端进行会话使用的一个能够在浏览器本地化存储的技术

### 2.cookie的作用

cookie的作用主要是在浏览器存储少量数据, 利用cookie我们可以实现一些保存数据的功能.  比如: 

1, 用户登录的记住密码功能(下次再访问网站时无需输入密码了)；

2, 购物车，加入购物车的商品没有及时付款，使用cookie保存后, 可以在一定时间后再访问网站, 会发现购物车里还有之前的商品列表;

### 3.cookie的使用

cookie由键值对形式的文本组成：name=value。

完整格式为：
name=value;[expires=date];[path=路径];[domain=域名];[secure]

其中中括号[]表示该值是可选。 
name=value: 为你要保存的键值对(必选) 
expires=date: 表示cookie的失效时间, 默认是浏览器关闭时失效(可选)
path=路径: 访问路径, 默认为当前文件所在目录(可选)
domain=域名: 访问域名, 限制在该域名下访问(可选)
secure: 安全设置, 如果设置了则必须使用https协议才可获取cookie(可选)

+ 1, 获取和设置cookie
  使用document对象来获取和设置cookie:

  //设置cookie和获取cookie
  document.cookie = "user="+"张三"; //设置
  console.log(document.cookie);  //获取

  //URI编码后设置cookie, 和URI解码后获取cookie
  document.cookie = "user2=" + encodeURIComponent("张三");
  console.log(decodeURIComponent(document.cookie));

+ 2, expires=失效时间
  失效时间: 表示cookie会在该时间被删除掉, 默认是浏览器关闭的时候;

  可以自己设置cookie的失效时间。 如设置7天后再删除cookie
  var date = newDate();  
  date.setDate(date.getDate() +7); 
  document.cookie = “user=张三;expires=” + date;

  主动删除cookie
  失效时间设置在现在时间或现在之前的时间即可删除指定cookie
  name值为指定要删除的那个cookie

  var date = new Date();
  document.cookie = “user=张三;expires=” + date;

+ 3, path=路径
  设置路径后, 则只有设置的那个路径文件才可以访问cookie, 默认为当前文件所在目录
  一般设置path=/, 表示磁盘(域名)根目录, 则其他路径也可以获取到该cookie值
  document.cookie = “user=abc;expires=" + date + ";path=/"; 

  注意: 在设置路径path时, 要记得设置失效时间expires

+ 4, domain=域名
       用于限制只有设置的域名才可以访问，没有设置则默认为当前域名。
  document.cookie = “user=张三;domain=www.baidu.com”;

+ 5, secure 安全设置
      指明必须通过安全的通信通道来传输(HTTPS)才能获取 cookie。 
  document.cookie = “user=张三;secure”;

### 4.cookie的封装

将cookie相关的操作封装在函数中, 方便以后调用,  一般我们只要设置name, value, expires, path即可;

```js
//设置cookie
function setCookie(name, value, expires, path) {
     var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
     if (expires instanceof Date) {
          cookieText += ";expires="+expires;
     }
     if (path) {
          cookieText += ";path="+path;
     }
     document.cookie = cookieText;
     return decodeURIComponent(document.cookie);
}
//获取cookie
function getCookie(name) {	
      var cookie = decodeURIComponent(document.cookie);	
      var arr = cookie.split(“; ”);	
      for (var i=0; i<arr.length; i++) {			
            var arr2 = arr[i].split(“=”);		
            if (arr2.length >= 2) {		
	   if (arr2[0] == name) {				
                       return arr2[1];			
                  }		
            }	
      }	
      return “”;
}
//删除cookie
function removeCookie(name) {
     document.cookie=encodeURIComponent(name)+“=; expires=” + new Date();
}
```

