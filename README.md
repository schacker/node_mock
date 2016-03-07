# node_mock
使用node.js 搭建mock服务器，支持数据库和json文件两种方式
# 搭建
采用express搭建，后期考虑改用原生搭建，移除express
# 配置
在package.json中，可配置是否使用json mock文件、是否采用url_map强关联、mock文件位置
# 使用
直接node app即可，现在数据库方面配置不可变，只能改源码，后期提供配置项
