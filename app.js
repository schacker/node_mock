var express = require('express');
var http = require('http');
var path = require('path');
var common = require('./routes/common/common.js');

var rt = require('./routes/index').rt;
var _mockserver = require('./routes/mock/mockserver');

var app = express(); //web应用实例
global.pojoMap = [];

// all environments
app.set('port', process.env.PORT || 8080); //设置端口
app.set('views', path.join(__dirname, 'views')); //设置视图路径
app.set('view engine', 'mustache'); //设置视图引擎模板
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public'))); //静态文件路径

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//请求列表 可以考虑下使用xml文件管理 请求
common.readFile('./package.json', function(data){
	global.painfo = JSON.parse(data.toString());
    //传入参数 正则匹配
	if (global.painfo && !global.painfo.usemock) {
		app.get(/\/\s*/, rt.route); //调用路由转发
	} else {
		app.get(/\/\s*/, _mockserver.parseRequestUrl); //走mock
	}

	//创建服务器
	http.createServer(app).listen(app.get('port'), function(){
		//读取package.json文件，获取配置信息
		if (global.painfo && !global.painfo.usemock) {
            var accesstoken = {
                user: global.painfo.dbUser,
                password: global.painfo.dbPwd
            };
			rt.connect(accesstoken, global.painfo.dbs); //在监听后链接数据库
			global.pojoMap = common.getFileNames('routes/pojo'); //数据库方式，每张表为一个pojo类，pojo类包含基础逻辑或直接业务逻辑
		}
	  	console.log('Express server listening on port ' + app.get('port'));
	});
});
/*
	mock JSON文件，请求链接最后一层路径，解析为服务器json文件名，最后服务器返回该JSON文件数据
*/
