var fs = require('fs');
var thunkify = require('thunkify'); // tj 大大提供的thunk化模块
var co = require('co');
var readFile = thunkify(fs.readFile);

co(function* (){
    var r1 = yield [readFile('../static/text1.txt','utf-8'),readFile('../static/text2.txt','utf-8'),readFile('../static/text3.txt','utf-8')];
    console.log(r1);
});