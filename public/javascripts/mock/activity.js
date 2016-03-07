module.exports = {
    getNoviceAward : function(){
        var ret = {
            "data": {
                "serverTime" : "1440068381000",
                "startDate" : "1440068380897",
                "endDate" : "1440068401648",
                "additionalProfitRate" : ".05",
                "additionalProfitRateDesc" : "5%",
                "profitRate" : "0.09435",
                "profitRateDesc" : "9.435%",
                "days" : "7",
                "daysDesc" : "7天",
                "userMaxAmount" : "30000",
                "userMaxAmountDesc" : "3万",
                "fundCode" : "0000009271"
            },
            "errorCode": "200",
            "errorMsg": ""
        };

        return ret;
    },
    getPropagate : function(){
      var ret = {
        "data": {
          "activityFund": {
                  "fundName": "鹏华安盈宝货币基金",
                  "fundCode": "0000009271",
                  "fundType": "MONETARY_FUND",

              },
          "activityRule": {
            "experienceAmount": 10000,
            "validTerm": 7,
            "firstInvestmentSubsidy": 5
            }
        },
        "errorCode": "200",
        "errorMsg": ""
        };

        return ret;
    },
    getWxShareAwardsApi:function(args){
        var data = {
            "activity" : {
                "days" : "7",
                "fund" : {
                    "fundCode" : "",
                    "fundName" : ""
                }
            },
            "awards" : {
                "totalAmount" : "160000",
                "shareFriends" : 106,
                "rank" : 10000
            },
            "shareFriends" : [{
                    "nickname": "candy",
                    "headimgurl":"http://source.qunarzz.com/site/images/pay/qunarbabytouch/wechatbg01.png",
                    "buyTime" : 1446019690078,
                    "buyAmount" : "20000"
                },{
                    "nickname": "candy2",
                    "headimgurl":"http://source.qunarzz.com/site/images/pay/qunarbabytouch/wechatbg01.png",
                    "buyTime" : 1446019690078,
                    "buyAmount" : "20"
                },{
                    "nickname": "candy3",
                    "headimgurl":"http://source.qunarzz.com/site/images/pay/qunarbabytouch/wechatbg01.png",
                    "buyTime" : 1446019690078,
                    "buyAmount" : "20"
                },{
                    "nickname": "candy4",
                    "headimgurl":"http://source.qunarzz.com/site/images/pay/qunarbabytouch/wechatbg01.png",
                    "buyTime" : 1446019690078,
                    "buyAmount" : "20"
                },{
                    "nickname": "candy5",
                    "headimgurl":"http://source.qunarzz.com/site/images/pay/qunarbabytouch/wechatbg01.png",
                    "buyTime" : 1446019690078,
                    "buyAmount" : "20"
                },{
                    "nickname": "candy6",
                    "headimgurl":"http://source.qunarzz.com/site/images/pay/qunarbabytouch/wechatbg01.png",
                    "buyTime" : 1446019690078,
                    "buyAmount" : "20"
                }
            ],
            "top3" : [{
                    "nickname" : "中文",
                    "totalAmount" : 1000000,
                    "shareFriends" : 100,
                    "rank" : 1
                },{
                    "nickname" : "test1234",
                    "totalAmount" : 160000,
                    "shareFriends" : 18,
                    "rank" : 2
                },{
                    "nickname" : "t",
                    "totalAmount" : 10000,
                    "shareFriends" : 1,
                    "rank" : 3
                }
            ]
        };
        var ret ={
            "data":data,
            "errorCode": "200",
            "errorMsg": ""
        }
        return ret;
    },
    getActivityList: function(args){
        var ret = {
            "data": [
                {},{
                    "name" : "shareAward",
                    "bannerImg" : "活动banner图片",
                    "adPage" : "广告活动页",
                    "serverTime" : 1442903331891,
                    "startDate" : 1442903331891,
                    "endDate" : 1442903331891,
                    "promotionNo" : "1231324645",

                    "additionalProfitRateDesc" : "5%",
                    "userMaxAmountDesc" : "3万",
                    "amount" : 10000,
                    "amountDesc" : "10000元体验金",
                    "days" : 7,
                    "daysDesc" : "7天",
                    //基金信息
                    "funds" : [{
                        "fundCode" : "",
                        "fundType" : "",
                        "fundName" : ""
                    }]
                },{}
            ],
            "errorCode": "200",
            "errorMsg": ""
        }
        return ret;
    },
    getQUserUid: function(args){
        var ret = {
            "data": {
                "uid": "12354566",
                "nickname":  "nickname",
                "headimgurl": "http://source.qunarzz.com/site/images/pay/qunarbabytouch/wechatbg01.png"
            },
            "errorCode": "200",
            "errorMsg": ""
        };
        return ret;
    },
    getUserInfo: function(args){
        var ret = {
            "data": {
                "uid": "12354566",
                "nickname":  "nickname",
                "headimgurl": "http://source.qunarzz.com/site/images/pay/qunarbabytouch/wechatbg01.png"
            },
            "errorCode": "200",
            "errorMsg": ""
        };
        return ret;
    },
    getCurrentUserInfoApi:function(args){
        var ret = {
            "data":{
                "uid" : "1234567",
                "userName" : "zhangsan",
                "wxInfo" : {
                    "openId" : "xxxx",
                    "nickname": "dd",
                    "sex": "1",
                    "province": "PROVINCE",
                    "city": "CITY",
                    "country": "COUNTRY",
                    "headimgurl": ""
                }
            },
            "errorCode": "200",
            "errorMsg": ""
        }
        return ret;
    },
    getJsTicketApi: function(args){
        var ret = {
            "data": {
                "appId" : "wx51914f138d82f145",
                "timestamp" : 1445327311,
                "nonceStr" : "50meysovhs62yb9",
                "signature" : "83190153f961cf683746682cbc360c2b77bc0079"
            },
            "errorCode": "200",
            "errorMsg": ""
        }
        return ret;
    }
}
