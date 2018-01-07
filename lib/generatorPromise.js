var fs = require('fs');

// 将普通的异步api封装成promise
var readFile = function(name,type) {
    return new Promise(function(resolve,reject){
        fs.readFile(name,type,function(err,data){
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

var gen = function* (){
    var r1 = yield readFile('../static/text1.txt','utf-8');
    console.log(r1);
    var r2 = yield readFile('../static/text2.txt','utf-8');
    console.log(r2);
    var r3 = yield readFile('../static/text3.txt','utf-8');
    console.log(r3);
}

/**
 * generator 执行器的实现，此处已经简单兼容了下promise和thunk两个形式的操作
 * 
 */

var run = function (gen) {
    var g = gen();

    function next (err,data) {
        var lastData = arguments.length == 1 ? err : data; //区分promise和普通thunk回调的不同参数
        var g1 = g.next(lastData);
        if(g1.done) return;
        if(g1.value instanceof Promise) {
            console.log('primise');
            g1.value.then(next); // 执行promise
        } else {
            console.log('thunk');
            g1.value(next); // 执行普通callback
        }
    }
    next();
};

run(gen);
