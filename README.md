### 异步方法同步形式调用

实践了利用generator函数，async/await 进行的异步编程

### generator.js

* 简单实现了一个thunk化方法 thunkify
* thunk化一个异步api
* 依次读取文件的一个generator函数
* 简单实现一个generator执行器，run。满足thunk和promise两种形式。

### generatorPromise.js

* 和generator.js只有一处不同：使用promise封装了异步方法

### co.js

* 使用tj 大大 提供的 thunkify模块和co库去分别thunk化方法和自动执行generator

### asyncAwait.js

* 使用es7 的async/await 不需要额外引入执行器，有内置的。
* co 只能自动执行 thunk和promise，但async/await后面可以跟promise和更多的原始数据对象