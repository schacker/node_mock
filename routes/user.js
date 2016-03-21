
/*
 * GET users listing.
 */
 //类处理思路，参考Java里面的映射
 // 一个初始化函数，处理映射关系
 var fs = require('fs');
 var url = require('url');
 var querystring = require('querystring');
 var contype = {'Content-Type': 'text/html'};
 var rt = require('./index.js');
 var common = require('./common/common.js');
 //文件mock
 var mockserver = require('./mock/mockserver.js');
/*
 * 走路由
 */
 function initRoute(req, res, pojo){
 	console.log('user route');
 	/* 需要处理调用函数 */
 	getAllUser(req, res, pojo);
 }
/*
 * 获取所有用户信息
 */
function getAllUser(req, res) {
  	rt.rt.query(global.client, 'select * from user', function(data) {
  		if (!data) {
  			common.send404(req, res);
  		} else {
  			common.data2json(req, res, data);
  		}
  	});
}
/*
 * 通过Id查询：
 * client 数据库实例 {}
 * pojo 表实例 {}
 * id 数据项id string
 * callback 回调函数 Function
 */
function getUserById(req, res, pojo) {
	if (!req.url) {
		common.searchNull(req, res, 'response dead cause by url is invalidate！');
	}
	var id = getParam(req.url).id;
	if (id != undefined && id != null) {
		rt.rt.getById(global.client, pojo, id, function(data){
			if (!data) {
	  			common.send404(req, res);
	  		} else {
	  			common.data2json(req, res, data);
	  		}
		});
	} else {
		common.searchNull(req, res, 'id is not usefull!');
	}
}
/*
 * 通过Ids查询：
 * client 数据库实例 {}
 * pojo 表实例 {}
 * ids 数据项ids string
 * callback 回调函数 Function
 */
function getUserByIds(req, res, pojo) {
	if (!req.url) {
		common.searchNull(req, res, 'response dead cause by url is invalidate！');
	}
	var ids = getParam(req.url).ids;
	console.log(ids);
	if (ids != undefined && ids != null) {
		rt.rt.getByIds(global.client, pojo, ids, function(data){
			console.log(data);
			if (!data) {
	  			common.send404(req, res);
	  		} else {
	  			common.data2json(req, res, data);
	  		}
		});
	} else {
		common.searchNull(req, res, 'ids is not usefull!');
	}
}
/*
 * 获取搜索参数
 */
function getParam(url){
    var data = {};
    if (url) {
	    var search = url.substring(url.lastIndexOf("?")+1, url.length);
	    var params = search.split("&");
	    var len = params.length;
	    for (var i = 0;i < len;i++) {
	        var temp = params[i].split("=");
	        if (temp.length) {
	            data[temp[0]] = temp[1];
	        }
	    }
    }
    return data;
}

exports.userAction = getAllUser;
exports.initRoute = initRoute;
//每一个数据库实例都必须有的属性_pojo
exports._pojo = 'user';
