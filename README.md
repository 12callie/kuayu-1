1. [下载代码](https://github.com/12callie/kuayu-1.git)
2. 进入 qq-com 运行 server.js
```
cd kuayu-1/qq-com
node server.js 8888
```
3. 进入 fake-com 运行 server.js
```
cd ../fake-com
node server.js 9999
```
4. 设置 hosts
```
127.0.0.1 qq.com
127.0.0.1 fake.com
```
5. 打开两个页面 qq.com:8888/index.html 和 fake.com:9999/index.html
6. 记得做完之后，删掉 hosts 里的两行，否则 qq.com 无法正常访问！