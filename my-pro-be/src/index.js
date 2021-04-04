const koa = require('koa');
const app = new koa();


//通过app.use注册中间件
//中间件本质上就是一个函数

app.listen(3000, () => {
  console.log('启动成功');
});


