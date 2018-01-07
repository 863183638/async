var fs = require('fs');
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

var asynFunction = async function() {
    var r1 = await readFile('../static/text1.txt','utf-8');
    console.log(r1);
    var r2 = await readFile('../static/text2.txt','utf-8');
    console.log(r2);
    var r3 = await readFile('../static/text3.txt','utf-8');
    console.log(r3);
};

asynFunction();