const mongoose = require('mongoose');
//schema 是一组类似于一个表单的玩意儿
//modal 是一个由schema生成的一套方法集合，这套方法集合用来操作集合下的文档
const userSchema = new mongoose.Schema({
  nikename:String,
  password:String,
  age:Number,
  gender:String,
});
const userModal = mongoose.model('user',userSchema);


const connect = ()=>{
  //连接数据库
  mongoose.connect('mongodb://127.0.0.1:27017/my-pro');
  //这是用于在数据库被打开时调用一个回调函数来提示数据库成功启动
  mongoose.connection.on('open',()=>{
    console.log('数据库连接成功！');
    //创建一条文档
    const user = new userModal({
      nikename:'金文韬',
      password:'123456',
      age:20,
      gender:'男',
    });
    //保存文档记录
    user.save();
  });
};

connect();