## 问题：如何判断 object 为空



常用方法：

Object.keys(obj).length === 0

JSON.stringify(obj) === '{}'

for in 判断

以上方法都是不太严谨，因为处理不了 const obj = { [Symbol('a')]: 1 }. 这种情况

更严谨的方法： Reflect.ownKeys(obj).length === 0;


## 问题：强制类型转换、隐式类型转换

```js
var num = Number("42"); // 强制将字符串转换为数字​
var str = String(123); // 强制将数字转换为字符串​
var bool = Boolean(0); // 强制将数字转换为布尔值
```

```js
var result = 10 + "5"; // 隐式将数字和字符串相加，结果为字符串 "105"​
true == 1; // 隐式将布尔值转换为数字 1​
false == 0; // 隐式将布尔值转换为数字 0

```


## 问题：== 和 === 的区别

- "==" ，先隐式类型转换，再判断值是否相等​
- "==="，直接判断 类型 + 值 是否相等

```js
console.log(1 == "1"); // true，因为在比较之前，字符串"1"会被转换为数值1​
console.log(true == 1); // true，因为在比较之前，布尔值true会被转换为数值1
```

```js

console.log(1 === "1"); // false，因为它们的类型不同​
console.log(true === 1); // false，因为它们的类型不同
```

问题补充：当 a = ? 以下代码成立？

```js
if (a == 1 && a == 2 && a == 3) {​
  console.log('Hello World!');​
}
```

```js
const a = {​
  i: 1,​
  ​
  valueOf: function () {​
    return this.i++;​
  }​
}​
if (a == 1 && a == 2 && a == 3) {​
  console.log('Hello World!');​
}
```

## 问题：javascript 的数据类型有哪些
```js
基本数据类型：

- Number（数字）：表示数值，包括整数和浮点数
- String（字符串）：表示文本数据，使用引号（单引号或双引号）括起来
- Boolean（布尔值）：表示逻辑值，即true（真）或false（假）
- Null（空）：表示一个空值或没有值的对象
- Undefined（未定义）：表示一个未被赋值的变量的值
- Symbol（符号）：表示唯一的标识符 【ES6】

复杂数据类型（引用类型）：

- Object（对象）：表示复杂数据结构，可以包含键值对的集合
- Array（数组）：表示有序的集合，可以包含任意类型的数据
- Function（函数）：表示可执行的代码块

在 ECMAScript 2020（ES11）规范中正式被添加 BigInt 数据类型。用于对"大整数"的表示和操作。
- 结尾用n表示：100000n / 200n

存储方式：
- 基础类型存放于栈，变量记录原始值
- 引用类型存放堆，变量记录地址
```

## 问题：javascript  变量在内存中的堆栈存储

- 基础类型会存放于栈，引用类型会存放在堆​
- 案例：以下代码为什么输出 50 30 ？

```js
function fn(obj) {​
  obj = { m: 50 };​
  console.log(obj.m); // 输出什么？ 50​
}​
const o = { m: 30 };​
fn(o);​
console.log(o.m); // 输出什么？ 30
```

注意：JS 的传参都是值传递

- 当执行 const o = { m: 30 } 时，相当于在堆内存开辟一块空间，存储 { m:30 }，同时利用变量 o 记录该堆内存地址，o 存放于栈。
- 接着执行 fn(o) ，会把 o 记录的地址值作为实参传递到方法 fn 中，同时记录在 obj 副本变量中（注意：JS 的传参都是值传递）​
- 再下来执行 obj = { m: 50 }，相当于重新开辟了一个堆内存空间存储 { m: 50 }，同时把地址记录到 obj 中。
- 然后执行 console.log(obj.m) 会根据 obj 记录的地址2，找到 { m: 50 }，所以输出 50。​
- 最后同理，执行 console.log(o.m) 会根据 o 记录的地址1，找到 { m: 30 }，所以会输出 30。

## 问题：JS  单线程设计的目的

javascript 是浏览器的脚本语言，主要用途是进行页面的一系列交互操作以及用户互动，多线程编程通常会引发竞态条件、死锁和资源竞争等问题。如果以多线程的方式进行浏览器操作，则可能出现不可预测的冲突。假设有两个线程同时操作同一个 DOM 元素，线程 1 要求浏览器修改 DOM 内容，而线程 2 却要求删除 DOM，浏览器就疑惑，无法决定采用哪个线程的操作。所以 JavaScript 的单线程设计很好的简化了这类并发问题，`避免了因多线程而引发的竞态条件、死锁和资源竞争等问题`。当然，如果在开发中确切需要到异步场景， javascript 也有众多的异步队列来帮助我们实现，也就是我们熟知的事件循环，微任务队列，宏任务队列。如果真的需要开辟一个新线程处理逻辑，也可以通过 webworker 实现。

## 问题：如何判断 javascript 的数据类型

typeof 操作符： 可以用来确定一个值的基本数据类型，返回一个表示数据类型的字符串。
```js
typeof 42; // "number"​
typeof "Hello"; // "string"​
typeof true; // "boolean"​
typeof undefined; // "undefined"​
typeof null; // "object" (这是 typeof 的一个常见的误解)​
typeof [1, 2, 3]; // "object"​
typeof { key: "value" }; // "object"​
typeof function() {}; // "function"
```
注意，typeof null 返回 "object" 是历史遗留问题，不是很准确。

Object.prototype.toString： 用于获取更详细的数据类型信息。
```js

Object.prototype.toString.call(42); // "[object Number]"​
Object.prototype.toString.call("Hello"); // "[object String]"​
Object.prototype.toString.call(true); // "[object Boolean]"​
Object.prototype.toString.call(undefined); // "[object Undefined]"​
Object.prototype.toString.call(null); // "[object Null]"​
Object.prototype.toString.call([1, 2, 3]); // "[object Array]"​
Object.prototype.toString.call({ key: "value" }); // "[object Object]"​
Object.prototype.toString.call(function() {}); // "[object Function]"
```

instanceof 操作符： 用于检查对象是否属于某个类的实例。
```js
var obj = {};​
obj instanceof Object; //  true​
var arr = [];​
arr instanceof Array; // true​
function Person() {}​
var person = new Person();​
person instanceof Person; // true
```

Array.isArray：用于检查一个对象是否是数组。
```js
Array.isArray([1, 2, 3]); // true​
Array.isArray("Hello"); // false​
```

## 问题：ES 每个版本引入了什么内容
ECMAScript是一种用于编写 JavaScript 的标准化脚本语言。下面是每个版本的一些重要特性和区别：

ES6（ECMAScript 2015）:
- 引入了let和const关键字，用于声明块级作用域的变量
- 引入了箭头函数（arrow functions）
- 添加了模板字符串（template strings）
- 引入了解构赋值（destructuring assignment）
- 引入了类和模块（classes and modules）
- 引入了 Promise

ES7（ECMAScript 2016）:
- 引入了Array.prototype.includes()方法，用于检查数组是否包含特定元素
- 引入了指数操作符（exponentiation operator）

ES8（ECMAScript 2017）:
- 引入了异步函数（async/await）
- 添加了Object.values()和Object.entries()方法，用于遍历对象的值和键值对
- 引入了字符串填充方法（string padding）

ES9（ECMAScript 2018）:
- 引入了异步迭代器（asynchronous iterators）
- 添加了Promise.finally()方法，用于指定无论Promise状态如何都会执行的回调函数
- 引入了对象的扩展运算符（object spread）

ES10（ECMAScript 2019）:
- 引入了Array.prototype.flat()和Array.prototype.flatMap()方法，用于处理嵌套数组
- 添加了String.prototype.trimStart()和String.prototype.trimEnd()方法，用于去除字符串开头和结尾的空格
- 引入了动态导入（dynamic imports）

ES11（ECMAScript 2020）:
- 引入了可选链操作符（optional chaining）
- 添加了空值合并操作符（nullish coalescing）
- 引入了BigInt类型，用于处理超出Number类型范围的整数

## 问题：let 声明变量的特性

1. 块级作用域
```js
for (var i = 0; i < 10; ++i) {​
  setTimeout(() => {​
      console.log(i);​
  }, 1000)​
}​    
```

1 秒后输出 10 个 10，循环体变量 i 会渗透到循环体外部，所以在 setTimeout 1 秒 的过程中，i 的值实质变成了 10，因此会在 1 秒后输出 10 个 10。

```js
for (let i = 0; i < 10; ++i) {​
  setTimeout(() => {​
      console.log(i);​
  }, 1000)​
}
```
变会 let 定义之后，问题会消失，正常在 1 秒后，输出 0 - 9，因为 let 是块级作用域，仅局限于循环体内部。

```js

for (var i = 0; i < 10; ++i) {​
  (function (index) {​
      setTimeout(() => {​
          console.log(index);​
      }, 1000)​
  })(i)​
}
```

如果用 var 定义，可通过在循环体内添加一个立即执行函数，把迭代变量的作用域保护起来。

2. 暂时性死区（temporal dead zone）

在 let 声明之前的执行瞬间被称为 “暂时性死区”，此阶段引用任何后面声明的变量会抛出 ReferenceError 错误

3. 同级作用域下不能重复声明

4. 全局声明会挂到 Script 作用域下，不会挂在 window

## 问题：变量提升 & 函数提升 (优先级)

```js

// 以下代码输出什么结果​
console.log(s); ​
var s = 2; ​
function s() {} ​
console.log(s);​
​
// 答案​
[Function: s]​
2
```
- var 在会变量提升​
- 优先级：函数提升 > 变量提升​
- 代码演变过程


## 问题：如何判断对象相等
较为常用：JSON.stringify(obj1) === JSON.stringify(obj2)

## 问题：null 和 undefined 的区别


undefined 
- 当声明了一个变量但未初始化它时，它的值为 undefined。​
- 当访问对象属性或数组元素中不存在的属性或索引时，也会返回 undefined。​
- 当函数没有返回值时，默认返回 undefined。​
- 如果函数的参数没有传递或没有被提供值，函数内的对应参数的值为 undefined。
```js
let x;​
console.log(x); // undefined​
​
const obj = {};​
console.log(obj.property); // undefined​
​
function exampleFunc() {}​
console.log(exampleFunc()); // undefined​
​
function add(a, b) {​
  return a + b;​
}​
console.log(add(2)); // NaN​
```

null
- null 是一个特殊的关键字，表示一个空对象指针。​
- 它通常用于显式地指示一个变量或属性的值是空的，null 是一个赋值的操作，用来表示 "没有值" 或 "空"。​
- null 通常需要开发人员主动分配给变量，而不是自动分配的默认值。
- null 是原型链的顶层：所有对象都继承自Object原型对象，Object原型对象的原型是null。

```js
const a = null;​
console.log(a); // null​
​
const obj = { a: 1 };​
const proto = obj.__proto__;​
console.log(proto.__proto__); // null
```

## 问题：用 setTimeout 来实现倒计时 ，与 setInterval 的区别？

```js
const countDown = (count) => {​
  setTimeout(() => {​
    count--;​
    if (count > 0) {​
      countDown(count);​
    }​
  }, 1000);​
}​
countDown(10);
```

```js
let count = 10;​
let timer = setInterval(() => {​
  count--;​
  if (count <= 0) {​
    clearInterval(timer);​
    timer = null;​
  }​
}, 1000);​
​
```
- setTimeout：每隔一秒生成一个任务，等待一秒后执行，执行完成后，再生成下一个任务，等待一秒后执行，如此循环，所以左边任务间的间隔保证是1秒。​
- setInterval:  无视执行时间，每隔一秒往任务队列添加一个任务，等待执行，这样会导致任务执行间隔小于1秒，甚至任务堆积。

PS：setInterval 中当任务执行时间大于任务间隔时间，会导致消费赶不上生产。​
​
![image](/WX20250702-174730@2x.png)

## 问题：JS 事件循环机制 - 宏任务微任务是如何工作的？

1. 同步任务直接执行​
2. 遇到微任务放到微任务队列（Promise.then / process.nextTick 等等）​
3. 遇到宏任务放到宏任务队列（setTimeout / setInterval 等等）​
4. 执行完所有同步任务​
5. 执行微任务队列中的任务​
6. 执行宏任务队列中的任务

## 问题：事件循环 - 以下代码输出结果

```js
setTimeout(() => {​
  console.log('timeout')​
});​
​
function test () {​
  console.log('test');​
  return Promise.resolve().then(() => {​
    test()​
  });​
}​
​
test();
```

- 考察重点：事件循环中，宏任务与微任务的执行优先级。​
- 答案：持续输出 test 且 不会输出 timeout (重点)​
- 解释：微任务执行优先级高于宏任务，pormise.then callback 会挂载到微任务队列，而 setTimeout callback 会挂载到宏任务队列，每次在执行微任务队列任务时，又重新执行 test()，test运行时会往微任务队列中添加一个微任务，如此循环，所以宏任务队列始终没机会，所以不会输出 timeout。

## 问题：什么是内存泄漏

内存泄漏是指应用程序中的内存不再被使用但仍然被占用，导致内存消耗逐渐增加，最终可能导致应用程序性能下降或崩溃。内存泄漏通常是由于开发者编写的代码未正确释放不再需要的对象或数据而导致的。​

特征: 程序对内存失去控制​

内存泄漏的案例：
- 意外的全局变量
```js
function someFunction() {​
  // 这个变量会变成全局变量，并可能导致内存泄漏​
  myObject = { /* ... */ };​
}
```
- 闭包: 闭包可能会无意中持有对不再需要的变量或对象的引用，从而阻止它们被垃圾回收。
```js
function createClosure() {​
  const data = [/* 大量数据 */];​
  return function() {​
    // 闭包仍然持有对 'data' 的引用，即使它不再需要​
    console.log(data);​
  };​
}​
const closureFunction = createClosure();​
// 当 'closureFunction' 不再需要时，它仍然保留着 'data' 的引用，导致内存泄漏。
```

- 事件监听器: 忘记移除事件监听器可能会导致内存泄漏，因为与监听器相关联的对象将无法被垃圾回收。

```js
function createListener() {​
  const element = document.getElementById('someElement');​
  element.addEventListener('click', () => {​
    // ...​
  });​
}​
createListener();​
// 即使 'someElement' 从 DOM 中移除，该元素及其事件监听器仍将在内存中。
```

- 循环引用: 对象之间的循环引用会阻止它们被垃圾回收。
```js
function createCircularReferences() {​
  const obj1 = {};​
  const obj2 = {};​
  obj1.ref = obj2;​
  obj2.ref = obj1;​
createCircularReferences();​
// 由于循环引用，'obj1' 和 'obj2' 都将保留在内存中。
```

- setTimeout/setInterval: 使用 setTimeout 或 setInterval 时，如果没有正确清理，可能会导致内存泄漏，特别是当回调函数持有对大型对象的引用时。

```js
function doSomethingRepeatedly() {​
  const data = [/* 大量数据 */];​
  setInterval(() => {​
    // 闭包持有对 'data' 的引用，即使它不再需要​
    console.log(data);​
  }, 1000);​
}​
doSomethingRepeatedly();​
// 'doSomethingRepeatedly' 不再使用时，定时器仍然在运行，导致内存泄漏。​
```

## 问题：什么是闭包，有什么作用。
定义：闭包是指引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。​

作用：闭包可以保留其被定义时的作用域，这意味着闭包内部可以访问外部函数的局部变量，即使外部函数已经执行完毕。这种特性使得闭包可以在后续调用中使用这些变量。​

注意：闭包会使得函数内部的变量在函数执行后仍然存在于内存中，直到没有任何引用指向闭包。如果不注意管理闭包，可能会导致内存泄漏问题。​

案例：
```js
const accumulation = function(initValue = 0) {​
  let result = initValue;​
  return function(value) {​
    result += value;​
    return result;​
  }​
}
```
```js
for (var i = 0; i < 10; ++i) {​
  (function (index) {​
    setTimeout(function() {​
      console.log(index);​
    }, 1000);​
  })(i);​
}
```

## 问题：常用的 console 方法有哪些，JS 调试方法
```js
// 普通打印​
console.log('a');​
​
// 按级别打印​
console.error('a');​
console.warn('a');​
console.info('a');​
console.debug('a');​
​
// 占位符打印​
console.log('%o a', { a: 1 });​
console.log('%s a', 'xx');​
console.log('%d d', 123);​
​
// 打印任何对象，一般用于打印 DOM 节点​
console.dir(document.body);​
​
// 打印表格​
console.table({a: 1, b: 2});​
​
// 计数​
for (let i = 0; i < 10; ++i) { console.count('a'); }​
​
// 分组​
console.group('group1');​
console.log('a');​
  console.group('group2');​
  console.log('b');​
  console.groupEnd('group2');​
console.groupEnd('group1');​
​
// 计时​
console.time('a');​
const now = Date.now();​
while(Date.now() - now < 1000) {}​
console.timeEnd('a');​
​
// 断言​
console.assert(1 === 2, 'error');​
​
// 调用栈​
function a() {​
  console.trace();​
}​
function b() {​
  a();​
}​
b();​
​
// 内存占用​
console.memory;
```

## 问题：数组去重的方法

- Set 只允许存储唯一的值，可以将数组转换为Set，然后再将Set转换回数组以去重。
```js
const arr = [1, 2, 2, 3, 4, 4, 5];​
const uniqueArr = [...new Set(arr)];
```

- 利用 filter 方法来遍历数组，只保留第一次出现的元素。
```js
const arr = [1, 2, 2, 3, 4, 4, 5];​
const uniqueArr = arr.filter((value, index, self) => self.indexOf(value) === index);
```
- 使用reduce方法逐个遍历数组元素，构建一个新的数组，只添加第一次出现的元素。
```js
const arr = [1, 2, 2, 3, 4, 4, 5];​
const uniqueArr = arr.reduce((acc, current) => {​
  if (!acc.includes(current)) {​
    acc.push(current);​
  }​
  return acc;​
}, []);
```
- 使用indexOf方法 ，遍历数组，对于每个元素，检查其在数组中的索引，如果第一次出现，则添加到新数组。
```js
const arr = [1, 2, 2, 3, 4, 4, 5];​
const uniqueArr = [];​
arr.forEach((value) => {​
  if (uniqueArr.indexOf(value) === -1) {​
    uniqueArr.push(value);​
  }​
});
```
- 使用includes方法：类似于indexOf方法，只不过使用includes来检查元素是否已存在于新数组。
```js
const arr = [1, 2, 2, 3, 4, 4, 5];​
const uniqueArr = [];​
arr.forEach((value) => {​
  if (!uniqueArr.includes(value)) {​
    uniqueArr.push(value);​
  }​
});
```

## 问题：JS 数组常见操作方式及方法

```js
// 遍历​
for (let i = 0; i < list.length; ++i) {} // 遍历性能最好​
for (const key in list) {}​
for (const item of list) {}​
list.forEach(item => {}); // 仅遍历​
list.map(item => {}); // 返回构造后的新数组​
​
// 逻辑判断​
list.every(item => {}); // 全部返回 true 则函数返回 true​
list.some(item => {}); // 有一项返回 true，则函数返回 true，内部 或 关系​
​
// 过滤​
list.filter(item => {}); // 返回过滤后的新数组​
​
// 查找​
list.indexOf(); // 第一个找到的位置，否则为 -1​
list.lastIndexOf(); // 最后一个找到的位置，否则为 -1​
list.includes();ˆ// 接受一个参数，如果数组有目标值，则返回 true​
list.find(); // 如果找到目标值，返回目标值，否则返回 undefined​
list.findIndex(); // 如果找到目标值，返回下标，否则返回 -1​
```

## 问题：JS 数组 reduce 方法的使用
```js
// 累加​
const result = [1,2,3].reduce((pre, cur) => pre + cur);​
console.log(result);​
​
// 找最大值​
const result = [1,2,3,2,1].reduce((pre, cur) => Math.max(pre, cur));​
console.log(result);​
​
// 数组去重​
const resultList = [1,2,3,2,1].reduce((preList, cur) => {​
  if (preList.indexOf(cur) === -1) {​
    preList.push(cur);​
  }​
  return preList;​
}, []);​
console.log(resultList);​
​
// 归类​
const dataList = [{​
  name: 'aa',​
  country: 'China'​
}, {​
  name: 'bb',​
  country: 'China'​
}, {​
  name: 'cc',​
  country: 'USA'​
}, {​
  name: 'dd',​
  country: 'EN'​
}];​
const resultObj = dataList.reduce((preObj, cur) => {​
  const { country } = cur;​
  if (!preObj[country]) {​
    preObj[country] = [];​
  }​
  preObj[country].push(cur);​
  return preObj;​
}, {});​
console.log(resultObj);​
​
// 字符串反转​
const str = 'hello world';​
const resultStr = Array.from(str).reduce((pre, cur) => {​
  return `${cur}${pre}`;​
}, '');​
console.log(resultStr);
```

## 问题：如何遍历对象

```js
// for in​
const obj = { a: 1, b: 2, c: 3 };​
for (let key in obj) {​
  console.log(key, obj[key]);​
}​
​
// Object.keys​
const obj = { a: 1, b: 2, c: 3 };​
const keys = Object.keys(obj);​
keys.forEach(key => {​
  console.log(key, obj[key]);​
});​
​
// Object.entries​
const obj = { a: 1, b: 2, c: 3 };​
const entries = Object.entries(obj);​
entries.forEach(([key, value]) => {​
  console.log(key, value);​
});​
​
// Reflect.ownKeys​
const obj = { a: 1, b: 2, c: 3 };​
Reflect.ownKeys(obj).forEach(key => {​
  conosle.log(key, obj[key]);​
});
```
## 问题：创建函数的几种方式​


- 函数声明（Function Declaration）：使用 function 关键字定义函数，可以在任何位置声明并使用，函数声明提升（hoisting），所以可以在声明之前调用函数。
```js
function sayHello() {​
  console.log("Hello, World!");​
}​
sayHello(); // 调用函数
```

- 函数表达式（Function Expression）：将函数赋值给变量或属性，函数表达式的名称是可选的，与函数声明不同，函数表达式不会提升。
```js
var sayHi = function() {​
  console.log("Hi there!");​
};​
sayHi(); // 调用函数​
​
// 匿名函数表达式​
var greet = function(name) {​
  console.log("Hello, " + name);​
};​
greet("Alice"); // 调用函数
```
- 箭头函数（Arrow Function）：箭头函数是ES6引入的一种函数声明方式，它具有更短的语法和词法作用域，箭头函数没有自己的 this，它继承自外围作用域。
```js
onst add = (a, b) => a + b;​
console.log(add(2, 3)); // 输出 5
```

- 匿名函数（Anonymous Function）：函数没有名字，通常用于回调函数或临时函数。

```js
setTimeout(function() {​
  console.log("This is an anonymous function.");​
}, 1000);
```

## 问题：创建对象的几种方式

- 对象字面量（Object Literal）：使用大括号 {} 创建对象，可以在大括号内定义对象的属性和方法。

```js
var person = {​
  name: "Alice",​
  age: 30,​
  sayHello: function() {​
    console.log("Hello!");​
  }​
};

```

- 构造函数（Constructor Function）：使用构造函数创建对象，通过 new 关键字调用以创建对象。

```js
function Person(name, age) {​
  this.name = name;​
  this.age = age;​
}​
​
var person1 = new Person("Alice", 30);
```

- Object.create() 方法：使用 Object.create() 方法创建对象，可以指定对象的原型。

```js
var person = Object.create(null); // 创建一个空对象​
person.name = "Alice";​
person.age = 30;
```

- 工厂函数（Factory Function）：使用工厂函数创建对象，工厂函数是一个返回新对象的函数。

```js
function createPerson(name, age) {​
  return {​
    name: name,​
    age: age,​
  };​
}​
​
var person1 = createPerson("Alice", 30);
```

-类（ES6中引入的类）：使用类定义对象，类是一种对象构造器的语法糖。

```js
class Person {​
  constructor(name, age) {​
    this.name = name;​
    this.age = age;​
  }​
}​
​
var person1 = new Person("Alice", 30);
```

## 问题：宿主对象、内置对象、原生对象

- 宿主对象（Host Objects）：​

    - 宿主对象是由宿主环境（通常是浏览器或Node.js）提供的对象。它们不属于JavaScript的核心，而是根据运行环境提供的功能而存在。宿主对象可以包括​

    - 浏览器环境中的window、document、XMLHttpRequest​

    - Node.js环境中的global、process等。​

    - 宿主对象的定义和行为取决于宿主环境，因此它们可能在不同的环境中有不同的特性。

- 内置对象（Built-in Objects）：​
    - 内置对象是JavaScript语言本身提供的对象，它们包含在JavaScript的标准规范中。这些对象包括全局对象、数学对象、日期对象、正则表达式对象等。内置对象可以直接在任何JavaScript环境中使用，无需额外导入或引入。例如，全局对象Math用于数学计算，日期对象Date用于日期和时间操作。
    ```js
    const pi = Math.PI; // 访问全局对象 Mathvar
    currentDate = new Date(); // 创建日期对象
    ```

- 原生对象（Native Objects）：​
    - 原生对象是JavaScript语言的一部分，但它们不是内置对象。原生对象是通过构造函数或字面量方式创建的对象，例如数组、字符串、函数、对象等。这些对象可以通过JavaScript代码自定义，它们通常是开发人员用来构建应用程序的基本构建块。
    ```JS
    const arr = [1, 2, 3]; // 创建数组对象​
    const func = function() {}; // 创建函数对象​
    const obj = { key: "value" }; // 创建对象​
    ```

## 问题：什么是类数组（伪数组），如何将其转化为真实的数组？

类数组（或伪数组）是一种类似数组的对象，它们具有类似数组的结构，即具有数字索引和length属性，但不具有数组对象上的方法和功能。​
​
- 常见的类数组：​
    - 函数内部的arguments对象​
    - DOM 元素列表（例如通过 querySelectorAll 获取的元素集合）​
    - 一些内置方法（如 getElementsByTagName 返回的集合）

- 类数组转化为真实的数组方法：
Array.from() 方法：
```js
const nodeList = document.querySelectorAll('.my-elements'); // 获取DOM元素集合​
const arrayFromNodeList = Array.from(nodeList); // 转换为数组
```
- Array.prototype.slice.call() 方法：

```js
const nodeList = document.querySelectorAll('.my-elements'); // 获取DOM元素集合​
const arrayFromNodeList = Array.prototype.slice.call(nodeList); // 转换为数组
```
- Spread 运算符：
```js
var nodeList = document.querySelectorAll('.my-elements'); // 获取DOM元素集合​
var arrayFromNodeList = [...nodeList]; // 转换为数组
```

## 问题：什么是作用域链

作用域链是 JavaScript 中用于查找变量的一种机制，它是由一系列嵌套的作用域对象构成的链式结构，每个作用域对象包含了在该作用域中声明的变量以及对外部作用域的引用，目的是确定在给定的执行上下文中如何查找变量。当您引用一个变量时，JavaScript 引擎会首先在当前作用域对象中查找该变量，如果找不到，它会沿着作用域链向上查找，直到找到该变量或达到全局作用域，如果变量在全局作用域中也找不到，将抛出一个引用错误。​
​
作用域链的形成方法：​
- 在函数内部，会创建一个新的作用域对象，包含了函数的参数、局部变量以及对外部作用域的引用。​
- 如果在函数内部嵌套了其他函数，那么每个内部函数都会创建自己的作用域对象，形成一个链。​
- 这个链条会一直延伸到全局作用域。

## 问题：JavaScript 动画和 CSS3 动画有什么区别？ 

实现方式：
- JavaScript 动画：JavaScript 动画是通过编写 JavaScript 代码来操作 DOM 元素的样式和属性，从而实现动画效果。您可以使用 setTimeout、setInterval 或现代的动画库（如 GreenSock Animation Platform）来创建 JavaScript 动画。
- CSS3 动画：CSS3 动画是使用 CSS3 的动画属性和关键帧动画来定义和控制动画效果。您可以通过在 CSS 中定义关键帧和过渡效果来创建 CSS3 动画。

性能：
- JavaScript 动画：JavaScript 动画可以在更复杂的动画场景下提供更多的控制和灵活性，但性能取决于代码的质量。不合理的 JavaScript 动画可能导致性能问题，因为它们通常需要大量的计算。
- CSS3 动画：CSS3 动画通常更具性能优势，因为浏览器可以使用硬件加速来处理它们，而不需要 JavaScript 的运行时计算。CSS3 动画通常更流畅和高效，特别是在简单的过渡效果中。

适用场景：
- JavaScript 动画：适用于需要更多控制和互动性的场景，例如游戏、用户交互和需要基于条件的动画。JavaScript 动画可以响应用户输入，并在运行时根据条件调整动画。
- CSS3 动画：适用于简单的过渡效果、页面加载动画、滑动效果、渐变等。CSS3 动画是为了更好的性能和可维护性而设计的，适合许多常见的动画需求。

可维护性：
- JavaScript 动画：JavaScript 动画可能需要更多的代码和维护工作，尤其是对于复杂的动画效果。它们通常需要手动处理动画的每一帧。
- CSS3 动画：CSS3 动画通常更容易维护，因为它们将动画效果与样式分开，可以在样式表中轻松修改动画的属性和参数。

## 问题：获取元素位置？

getBoundingClientRect() 方法： 
```js
const element = document.getElementById("myElement");​
const rect = element.getBoundingClientRect();​
console.log("元素左上角的X坐标：" + rect.left);​
console.log("元素左上角的Y坐标：" + rect.top);​
console.log("元素右下角的X坐标：" + rect.right);​
console.log("元素右下角的Y坐标：" + rect.bottom);
```

offsetTop 和 offsetLeft 属性： 
```js
const element = document.getElementById("myElement");​
console.log("元素的上边缘的偏移量：" + element.offsetTop);​
console.log("元素的左边缘的偏移量：" + element.offsetLeft);
```

pageX 和 pageY 属性： 

```js
element.addEventListener("mousemove", function(event) {​
  console.log("鼠标的X坐标：" + event.pageX);​
  console.log("鼠标的Y坐标：" + event.pageY);​
});​
```

clientX 和 clientY 属性：
```js
element.addEventListener("mousemove", function(event) {​
  console.log("鼠标在视口中的X坐标：" + event.clientX);​
  console.log("鼠标在视口中的Y坐标：" + event.clientY);​
});
```

## document.write 和 innerHTML 的区别？

输出位置：
- document.write：
  - 将内容直接写入到页面的当前位置，会覆盖已存在的内容
  - 如果在页面加载后调用，会覆盖整个页面内容，因此通常不建议在文档加载后使用它

- innerHTML：
  - 是 DOM 元素的属性，可以用来设置或获取元素的 HTML 内容
  - 可以用于特定元素，而不会覆盖整个页面

用法：
- document.write：
  - 通常用于在页面加载过程中动态生成 HTML 内容
  - 是一种旧的、不太推荐的方法，因为它可能导致页面结构混乱，不易维护

- innerHTML：
  - 通常用于通过 JavaScript 动态更改特定元素的内容
  - 更加灵活，允许您以更精确的方式操作 DOM

DOM 操作：
- document.write：
  - 不是 DOM 操作，它仅用于输出文本到页面

- innerHTML：
  - 是 DOM 操作，允许您操作特定元素的内容，包括添加、删除和替换元素的 HTML 内容

## 问题：mouseover 和 mouseenter 的区别

触发时机：
- mouseover：
  - 当鼠标指针从一个元素的外部进入到元素的范围内时触发该事件
  - 会在进入元素内部时触发一次，然后在鼠标在元素内部（有子元素）移动时会多次触发

- mouseenter：
  - 当鼠标指针从一个元素的外部进入到元素的范围内时触发该事件
  - 不同于 mouseover，mouseenter 只在第一次进入元素内部时触发一次，之后鼠标在元素内部移动不会再次触发

冒泡：
- mouseover 会冒泡，也就是说当鼠标进入子元素时，父元素的 mouseover 事件也会被触发
- mouseenter 不会冒泡，只有在真正进入指定元素时触发

应用场景：
- mouseover 更常用于需要监听鼠标进入和离开元素的情况，特别是当需要处理子元素的情况
- mouseenter 更常用于只需要在鼠标第一次进入元素时触发事件的情况，通常用于菜单、工具提示等需要忽略子元素的场景

## 问题：链式调用实现方式

链式调用是通过在对象的方法中返回对象自身（this）来实现的。可使多个方法调用连续写在一起，形成链式调用。

```js
class Calculator {​
  constructor(num) {​
    this.value = num;​
  }​
​
  add(num) {​
    this.value += num;​
    return this; // 返回自身，以实现链式调用​
  }​
​
  subtract(num) {​
    this.value -= num;​
    return this;​
  }​
​
  multiply(num) {​
    this.value *= num;​
    return this;​
  }​
​
  divide(num) {​
    this.value /= num;​
    return this;​
  }​
​
  getValue() {​
    return this.value;​
  }​
}​
​
const calculator = new Calculator(10);​
const result = calculator.add(5).subtract(2).multiply(3).divide(4).getValue();​
​
console.log(result); // 输出 2.25
```

## 问题：new 操作符内在逻辑

```js
function myNew(constructor, ...args) {​
  const obj = Object.create(constructor.prototype); // 创建一个新对象并链接到构造函数的原型​
  const result = constructor.apply(obj, args); // 将构造函数的 this 指向新对象并执行构造函数​
  return result instanceof Object ? result : obj; // 确保构造函数返回一个对象，如果没有则返回新对象​
}​
​
function Person(name) {​
  this.name = name;​
}​
​
const person1 = myNew(Person, 'Alice');​
console.log(person1.name); // 输出 "Alice"​
```

## 问题：bind，apply，call 的区别，及内在实现

call 方法：​
- 用于调用一个函数，显式指定函数内部的 this 指向，参数以列表的形式传递给函数。​
- 语法：func.call(thisArg, arg1, arg2, ...)​
- 直接调用函数，立即执行。​
- 用法 与 模拟实现：
```js
Function.prototype.myCall = function (context, ...args) {​
  context = context || window; // 如果没有传入上下文，则默认为全局对象​
  const uniqueID = Symbol(); // 创建一个唯一的键，以避免属性名冲突​
  context[uniqueID] = this; // 在上下文中添加一个属性，将函数赋值给这个属性​
  const result = context[uniqueID](...args); // 调用函数​
  delete context[uniqueID]; // 删除属性​
  return result; // 返回函数执行的结果​
};​
​
function greet(message) {​
  console.log(`${message}, ${this.name}!`);​
}​
​
const person = {​
  name: 'Alice',​
};​
​
greet.myCall(person, 'Hello'); // 输出 "Hello, Alice!"​
​
// 原生方法​
greet.call(person, 'Hello'); // 输出 "Hello, Alice!"
```

apply 方法：​
- 用于调用一个函数，显式指定函数内部的 this 指向，参数以数组的形式传递给函数。​
- 语法：func.apply(thisArg, [arg1, arg2, ...])​
- 用法 与 模拟实现：

```js
Function.prototype.myApply = function (context, args) {​
  context = context || window;​
  const uniqueID = Symbol();​
  context[uniqueID] = this;​
  const result = context[uniqueID](...args);​
  delete context[uniqueID];​
  return result;​
};​
​
function greet(message) {​
  console.log(`${message}, ${this.name}!`);​
}​
​
const person = {​
  name: 'Alice',​
};​
​
greet.myApply(person, ['Hi']); // 输出 "Hi, Alice!"​
​
// 原生方法​
greet.apply(person, ['Hi']);  // 输出 "Hi, Alice!"
```

bind 方法：​
- bind 方法不会立即调用函数，而是创建一个新的函数，该函数的 this 指向由 bind 的第一个参数指定，参数以列表的形式传递给函数。​
- 语法：newFunc = func.bind(thisArg, arg1, arg2, ...)​
- 不会立即执行函数，而是返回一个新函数。​
- 用法 与 模拟实现：

```js
Function.prototype.myBind = function (context, ...args) {​
  const func = this;​
  return function (...newArgs) {​
    return func.apply(context, args.concat(newArgs));​
  };​
};​
​
function greet(message) {​
  console.log(`${message}, ${this.name}!`);​
}​
​
const person = {​
  name: 'Alice',​
};​
​
const myBoundGreet = greet.myBind(person, 'Hey');​
myBoundGreet(); // 输出 "Hey, Alice!"​
​
// 原生方法​
const boundGreet = greet.bind(person, 'Hey');​
boundGreet(); // 输出 "Hey, Alice!"
```

## 问题：Ajax 避免浏览器缓存方法

Http 请求时，有时浏览器会缓存响应数据，以提高性能。但在某些情况下，你可能希望禁用缓存或控制缓存行为，以确保获得最新的数据。以下是解决浏览器缓存问题的方法：​
- 添加时间戳或随机参数：​

    在 Ajax 请求的 URL 中添加一个时间戳或随机参数，以使每个请求看起来不同，从而防止缓存。例如：
    ```
    var timestamp = new Date().getTime();​
    var url = 'data.json?timestamp=' + timestamp;
    ```
- 禁用缓存头信息：
    可以在请求头中添加 Cache-Control: no-cache 或 Pragma: no-cache，告诉服务器不使用缓存。
    ```
    var xhr = new XMLHttpRequest();​
    xhr.open('GET', 'data.json', true);​
    xhr.setRequestHeader('Cache-Control', 'no-cache');​
    xhr.send();
    ```
- 设置响应头：​
    服务器可以在响应头中设置缓存控制信息，以告诉浏览器不要缓存响应。
    ```
    Cache-Control: no-cache, no-store, must-revalidate​
    Pragma: no-cache​
    Expires: 0
    ```
- 使用 POST 请求：​
    GET 请求通常更容易被浏览器缓存，而 POST 请求通常不会被缓存。如果没有特殊需求，可以考虑使用 POST。
    ```js
    var xhr = new XMLHttpRequest();​
    xhr.open('POST', 'data.json', true);​
    xhr.send();
    ```

## 问题：eval 的功能和危害

eval 是 JavaScript 中的一个全局函数，用于将包含 JavaScript 代码的字符串作为参数，并执行该代码。它的作用是动态执行字符串中的 JavaScript 代码，可以在运行时生成 JavaScript 代码并执行它。​
例如，你可以使用 eval 来执行动态生成的表达式或函数。
```js
var x = 10;​
var y = 20;​
var code = 'x + y';​
var result = eval(code); // 执行 x + y，result 值为 30
```

eval 函数具有潜在的危害，主要包括以下几个方面：

- 安全风险：
  使用 eval 可能会导致安全漏洞，因为它允许执行来自不受信任的来源的代码。如果恶意代码被注入到 eval 中，它可能会访问和修改你的应用程序的敏感数据，甚至执行恶意操作。

- 性能问题：
  eval 的使用会导致性能下降，因为它需要在运行时解析和执行代码。这可能会影响应用程序的响应时间，特别是在循环中频繁使用 eval 的情况下。

- 可读性问题：
  使用 eval 会使代码变得难以理解和维护。由于它执行的代码是字符串，很难进行分析和调试。

- 移植性问题：
  依赖 eval 的代码可能不具备良好的移植性，因为不同的 JavaScript 引擎对 eval 的实现可能有差异，从而导致代码在不同环境中出现问题。

- 限制代码优化：
  eval 的存在可能会阻碍 JavaScript 引擎的代码优化，因为它使得引擎难以进行静态分析和优化，从而影响性能。

因此，通常情况下，应该尽量避免使用 eval，特别是在处理来自不受信任的源的数据时。如果需要动态执行代码，可以考虑使用其他更安全的方式，例如使用函数、Function 构造函数、闭包等。

## 问题：惰性函数

惰性函数是指在第一次调用时执行特定操作，之后将函数重写或修改，以便在以后的调用中直接返回缓存的结果，而不再执行该操作。这通常用于性能优化，以避免重复执行开销较大的操作。
```js
function addEvent(element, type, handler) {​
  if (element.addEventListener) {​
    addEvent = function (element, type, handler) {​
      element.addEventListener(type, handler, false);​
    };​
  } else if (element.attachEvent) {​
    addEvent = function (element, type, handler) {​
      element.attachEvent("on" + type, handler);​
    };​
  } else {​
    addEvent = function (element, type, handler) {​
      element["on" + type] = handler;​
    };​
  }​
​
  return addEvent(element, type, handler); // 首次调用​
}​
​
// 使用示例​
const myButton = document.getElementById("myButton");​
addEvent(myButton, "click", function () {​
  console.log("Button clicked!");​
});​

```

过去：惰性函数是一种聪明的浏览器兼容 + 性能优化手段。

现在：你可以放心地不写惰性函数了，直接写标准代码，由 Babel / 构建工具 / 浏览器来搞定兼容问题。

未来：除非明确有兼容性需求，否则不再推荐使用惰性函数。

## 问题：JS 监听对象属性的改变

- Object.defineProperty
```js
// 在 get/set 中使用下划线前缀是一种命名约定
// 用来区分实际存储值的属性(_firstName)和访问器属性(firstName)
// 避免在 getter/setter 中直接访问 firstName 造成无限递归
const person = {​
  firstName: "John",​
  lastName: "Doe",​
};​
​
// 监听属性 "firstName"​
Object.defineProperty(person, "firstName", {​
  get() {​
    // _firstName 是实际存储值的内部属性
    return this._firstName;​
  },​
  set(value) {​
    // 将值存储在 _firstName 中,而不是 firstName
    this._firstName = value;​
    console.log(`firstName 改变为: ${value}`);​
  },​
  configurable: true,​
});​
​
// 修改属性 "firstName" 会触发监听​
person.firstName = "Alice"; // 输出: "firstName 改变为: Alice"
```

- Proxy
```js
const person = {​
  firstName: "John",​
  lastName: "Doe",​
};​
​
const handler = {​
  get(target, property) {​
    console.log(`访问了属性 ${property}`);​
    return target[property];​
  },​
  set(target, property, value) {​
    console.log(`设置属性 ${property} 为 ${value}`);​
    target[property] = value;​
    return true;​
  },​
};​
​
const proxyPerson = new Proxy(person, handler);​
console.log(proxyPerson.firstName); // 输出: "访问了属性 firstName"，然后输出 "John"​
proxyPerson.lastName = "Smith"; // 输出: "设置属性 lastName 为 Smith"
```

## 问题：prototype  和  __proto__  的 区别与关系

### prototype

- 函数对象（构造函数）特有属性，每个函数对象都有一个 prototype 属性，它是一个对象。

- 通常用于定义共享的属性和方法，可以被构造函数创建的实例对象所继承。可以在构造函数的 prototype 上定义方法，以便多个实例对象共享这些方法，从而节省内存。

- 主要用于原型继承，它是构造函数和实例对象之间的链接，用于共享方法和属性。

### __proto__

- 每个对象（包括函数对象和普通对象）都具有的属性，它指向对象的原型，也就是它的父对象。

- 用于实现原型链，当你访问一个对象的属性时，如果对象本身没有这个属性，JavaScript 引擎会沿着原型链（通过 __proto__ 属性）向上查找，直到找到属性或到达原型链的顶部（通常是 Object.prototype）。

- 主要用于对象之间的继承，它建立了对象之间的原型关系。

### 总结

prototype 和 __proto__ 是不同的，但它们在 JavaScript 中一起用于实现原型继承。构造函数的 prototype 对象会被赋予给实例对象的 __proto__ 属性，从而建立了原型链。
```js
// 创建一个构造函数​
function Person(name) {​
  this.name = name;​
}​
​
// 在构造函数的 prototype 上定义一个方法​
Person.prototype.sayHello = function() {​
  console.log(`Hello, my name is ${this.name}`);​
}​
​
// 创建一个实例对象​
const person1 = new Person("Alice");​
​
// 访问实例对象的属性和方法​
console.log(person1.name); // 输出: "Alice"​
person1.sayHello(); // 输出: "Hello, my name is Alice"​
​
// 查看实例对象的 __proto__ 属性，它指向构造函数的 prototype 对象​
console.log(person1.__proto__ === Person.prototype); // 输出: true
```

首先定义了一个构造函数 Person，然后在构造函数的 prototype 上定义了一个方法 sayHello。接着，创建了一个 person1 实例对象，并访问了它的属性和方法。最后，验证了 person1 实例对象的 proto 属性确实指向构造函数 Person 的 prototype 对象，建立了原型链关系。

## 问题：原型链的实践 - 以下代码输出2的原因

```js
const Foo = function () {​
  this.a = function() {​
    console.log('2')​
  }​
}​
​
Foo.prototype.a = function() {​
  console.log('3')​
}​
​
Foo.a = function () {​
  console.log('4')​
}​
​
let obj = new Foo();​
obj.a(); // 打印 2​

```
输出结果为 2，当 js 尝试访问一个方法的属性时，首先会在实例本身去寻找，找不到就会往 prototype 上找，在该案例中，foo 实例本身就拥有了 a 方法，所以就会直接执行，输出2。​

所以，当 Foo 中没有 a 方法时，就会寻找到 prototype 上的 a 方法，输出 3。​
而 Foo.a 则是 Foo 的静态方法，通过 Foo.a() 直接执行。​
​
## 问题：如何理解 箭头函数 没有 this

所谓的没有 this，不是箭头函数中没有 this 这个变量，而是箭头函数不绑定自己的 this，它们会捕获其所在上下文的 this 值，作为自己的 this 值。这对于回调函数特别有用，可以避免传统函数中常见的 this 指向问题。例如，在对象方法中使用箭头函数可以确保 this 保持一致。

## 问题：上下文与 this 指向

```js
globalThis.a = 100;​
function fn() {​
  return {​
    a: 200,​
    m: function() {​
      console.log(this.a);​
    },​
    n: ()=>{​
      console.log(this.a);​
    },​
    k: function() {​
      return function() {​
        console.log(this.a)​
      }​
    }​
  };​
}​
​
const fn0 = fn();​
fn0.m(); // 输出 200，this 指向 {a, m, n}​
fn0.n(); // 输出 100，this 指向 globalThis​
fn0.k()(); // 输出 100, this 指向 globalThis​
​
const context = {a: 300}​
const fn1 = fn.call(context); // 改变箭头函数 this 指向​
fn1.m(); // 输出 200，this 指向 {a, m, n}​
fn1.n(); // 输出 300，this 指向 context​
fn1.k().call(context); // 输出 300，this 指向 context
```

## 问题：上下文与 this 指向 （1）

```js
var name = 'window'​
​
const person1 = {​
  name: 'person1',​
  foo1: function() {​
    console.log(this.name)​
  },​
  foo2: () => {​
    console.log(this.name)​
  },​
  foo3: function() {​
    return function() {​
      console.log(this.name)​
    }​
  }​
}​
​
const person2 = {​
  name: 'person2'​
}​
person1.foo1() // person1​
person1.foo1.call(person2) // person2​
​
person1.foo2() // window​
person1.foo2.call(person2) // window​
​
person1.foo3()() // window​
person1.foo3.call(person2)() // window
```

## 问题：上下文与 this 指向（2）

```js

let length = 10;​
​
function fn() {​
  return this.length + 1​
}​
​
const obj = {​
  length: 5,​
  test1: function() {​
    return fn()​
  }​
}​
​
obj.test2 = fn;​
​
console.log(obj.test1()); // window 的窗口数 （window.length 是页面子窗口数量）​
console.log(fn() === obj.test2()) // false
```

## 问题：去除字符串首尾空格

```js

const originalString = "任意字符串";​
const trimmedString = originalString.trim();​
console.log(trimmedString);
```

## 问题：Symbol 特性与作用 
- 唯一性：每个Symbol值都是唯一的，即使它们具有相同的描述字符串，它们也不相等。​
- 不可枚举：Symbol类型的属性通常是不可枚举的，这意味着它们不会出现在for...in循环中。​
- 用作属性名：主要用途是作为对象属性的键，以确保属性的唯一性。
```js
const mySymbol = Symbol("mySymbol");​
const obj = {​
  [mySymbol]: "这是Symbol作为属性名的值"​
};​
```
- Symbol常量：在代码中，可以使用Symbol来定义常量，以避免意外的值修改。
```js
const COLOR_RED = Symbol("red");​
const COLOR_GREEN = Symbol("green");
```

## 问题：promise 和 await/async 的关系​
​
Promise：
- 一种用于处理异步操作的对象
- 代表了一个异步操作的最终完成或失败
- 允许在异步操作完成后执行相关的代码
- 提供了一种更灵活的方式来管理异步代码，尤其是在处理多个异步操作的情况下

async/await：
- 一种构建在Promise之上的语法糖
- ECMAScript 2017 (ES8) 引入的特性
- 旨在简化异步代码的编写和理解
- async 函数返回一个Promise
- 允许在函数内使用 await 关键字等待异步操作完成

关系：
1. async 函数返回一个Promise对象
2. 可以在async函数内使用await来等待Promise对象的解决
3. await暂停async函数的执行，直到Promise状态变为:
   - resolved（成功）
   - rejected（失败）
4. async/await 是一种更直观的方式来处理Promise，可以避免嵌套的回调函数（回调地狱）

## 问题：Array.propertype.sort 在 V8 的实现机制

知识点：默认情况下都会把数组项，转换为 字符串 进行比较​
​

V8 版本查看方式：
- 浏览器 chrome://version
- node 
    ```
    node -p process.versions.v8 
    // out : 11.3.244.8-node.29
    ```
5.9版本以前：用 Javascript 语言实现（不稳定）
- 源码地址：https://github.com/v8/v8/blob/5.9.221/src/js/array.js
- 实现策略：
  - 数组项 0 ~ 10 以内：插入排序
  - 数组项 10 ~ 1000 以内：常规快速排序
  - 数组项大于 1000：优化快速排序（快排中间值通过多个中间值求得）

7.6版本以后：用 Torque 语言实现（稳定）
- 源码地址：https://github.com/v8/v8/blob/main/third_party/v8/builtins/array-sort.tq
- 实现策略：采用 timSort 算法实现

## 问题：JS 装箱机制（auto boxing）

为什么以下代码第二行输出 true，第三行输出 false？

```js
const a = 1;​
console.log(a.__proto__ === Number.prototype); // 输出 true​
console.log(a instanceof Number); // 输出 false
```
首先，基础类型是没有 __proto__ 的，第二行之所以会输出 true，是因为触发了 js 的 autoboxing 机制，也叫装箱机制，当一个基础类型尝试访问 __propt__ 时，js 会把基础类型临时装箱，理解为 const a = new Number(1)，所以第二行会输出 true，而第三行没有触发装箱机制，因此输出 false。

## 问题：函数传值

EcmaScript 中的所有参数都按值传递的。不可能按引用传递参数。如果把对象作为参数传递，那么传递的就是这个对象的地址。 ------- 《Javascript 高级程序设计（第四版）》（红宝书）-- （292页）

## console.log  被重写，重新获取的方法

```js

const iframe = document.createElement('iframe')​
iframe.style.display = 'none'​
document.body.appendChild(iframe)​
console.log = iframe.contentWindow.console.log

```
