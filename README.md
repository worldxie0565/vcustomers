# vcustomers

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 重点 
- Home.vue 中添加updated钩子函数，会循环执行，原因未知
- Home.vue filterCustomer 方法要放在computed属性中，否则无效

## 参考来源:  
 https://www.bilibili.com/video/BV1qb41187fZ p38-p36

## 数据源准备  
可参考https://github.com/typicode/json-server#add-custom-routes  
### 安装和初始化json-server
- mkdir JSONSERVER
- sudo npm install -g json-server 
- npm init 
- 按照如下内容编辑本地文件db.json
```
{
  "users": [
    {
      "name": "nihao",
      "phone": "nihao",
      "email": "nihao",
      "id": 6
    },
    {
      "name": "asdfasd",
      "phone": "asdfasdfasdf",
      "email": "asdfasdf",
      "id": 7
    },
    {
      "name": "asdfasdf",
      "phone": "asdfasdf",
      "email": "adfasdf",
      "id": 8
    }
}
```
- 修改package.json文件
替换scripts对象中的内容为
```
"json:server": "json-server --watch db.json"
```
- npm run json:server
- 浏览器访问 http://localhost:3000/users,显示db.json内容
