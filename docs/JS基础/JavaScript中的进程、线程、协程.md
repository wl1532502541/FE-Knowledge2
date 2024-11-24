#  JavaScript中的进程、线程、协程
>reference: https://github.com/coffe1891/frontend-hard-mode-interview/blob/master/1/1.3.4.md
## 01.什么是进程

​		我们都知道计算机的核心是CPU，它承担了所有的计算任务；而操作系统是计算机的管理者，它负责任务的调度、资源的分配和管理，统领整个计算机硬件；应用程序则是具有某种功能的程序，程序是运行于操作系统之上的。

  进程是一个具有一定独立功能的程序在一个数据集上的一次动态执行的过程，是操作系统进行资源分配和调度的一个独立单位，是应用程序运行的载体。进程是一种抽象的概念，从来没有统一的标准定义。

### 进程一般由程序、数据集合和进程控制块三部分组成：

- 程序用于描述进程要完成的功能，是控制进程执行的指令集；
- 数据集合是程序在执行时所需要的数据和工作区；
- 程序控制块(Program Control Block，简称PCB)，包含进程的描述信息和控制信息，是进程存在的唯一标志。

### 进程具有的特征：

- 动态性：进程是程序的一次执行过程，是临时的，有生命期的，是动态产生，动态消亡的；
- 并发性：任何进程都可以同其他进程一起并发执行；
- 独立性：进程是系统进行资源分配和调度的一个独立单位；
- 结构性：进程由程序、数据和进程控制块三部分组成。

## 02.什么是线程

​	   在早期的操作系统中并没有线程的概念，进程是能拥有资源和独立运行的最小单位，也是程序执行的最小单位。任务调度采用的是时间片轮转的抢占式调度方式，而进程是任务调度的最小单位，每个进程有各自独立的一块内存，使得各个进程之间内存地址相互隔离。

  后来，随着计算机的发展，对CPU的要求越来越高，进程之间的切换开销较大，已经无法满足越来越复杂的程序的要求了。于是就发明了线程。

  线程是程序执行中一个单一的顺序控制流程，是程序执行流的最小单元，是处理器调度和分派的基本单位。一个进程可以有一个或多个线程，各个线程之间共享程序的内存空间(也就是所在进程的内存空间)。一个标准的线程由线程ID、当前指令指针(PC)、寄存器和堆栈组成。而进程由内存空间(代码、数据、进程空间、打开的文件)和一个或多个线程组成。

## 03.什么是协程

​       协程，英文Coroutines，是一种基于线程之上，但又比线程更加轻量级的存在，这种由程序员自己写程序来管理的轻量级线程叫做『用户空间线程』，具有对内核来说不可见的特性。

​		因为是自主开辟的异步任务，所以很多人也更喜欢叫它们纤程（Fiber），或者绿色线程（GreenThread）。正如一个进程可以拥有多个线程一样，一个线程也可以拥有多个协程。



## 04.它们之间的区别

​		相对线程和协程，进程更独立，有自己的内存空间，所以进程间通信比较困难。线程比进程轻量级，属于同一进程的多个线程间可以共享全部资源。协程与线程类似，不同点在于，线程由系统控制切换，协程是由用户控制切换。

##### 那么，控制切换，指的是控制什么的切换呢？

​		在一个进程中执行的程序，有时需要同时处理多个工作，这时我们可以创建多个线程，让每个线程处理一个工作。但是，进程只有一个。就好比一个人，你给他分配了多个工作，帮他把每个工作单独拉了一个列表，可还是他一个人干，他只能一会儿干干这一会儿干干那，来模拟多个工作同时进行的状态，这就是所谓的系统控制切换，系统不停的在多个线程间切换来达到并行的效果。你可能会说，那根一件一件干不是一样吗？没错，是一样的，在只有一个cpu的电脑上，用不用多线程程序执行的时间是一样的。但是，如果这个人长了两个脑袋呢？那么他就能同时处理两件工作了。多核cpu就是那个长了好多个脑地的人……而协程的切换是要由用户手动来控制的，所以协程并不适合并行计算，而更多的用来优化程序结构。

## 05.js都支持吗？

​		在浏览器中，可以通过webworkers创建进程，可以通过async/await，yield/Generator/GeneratorFunction实现协程，控制程序切换。

​		在node中，除了可以使用上面浏览器中可以使用的方法，还可以通过cluster，child_process创建进程，通过libuv，tagg创建线程

### 刚才提到的那些都是啥？怎么用？

### webworkers

​		简单点儿说就是使用webworkers你可以在全新的环境中运行一个你指定的js文件。这个全新的环境是独立的，既一个全新的进程，有点儿像一个新iframe还没有window.top，window.parent属性。

​		webworkers创建的进程和主进程之间可以通过message事件传递消息，但是消息只能是字符串，所以想要传对象和数组就只能传json了……这也是他不方便的地方。

具体使用方法可以看MDN上的文章： [使用 Web Workers](https://www.open-open.com/misc/goto?guid=4959732639773170024)

### sync/await

​		async/await是es7中新加的两个关键字，async 可以声明一个异步函数，此函数需要返回一个 Promise 对象。await 可以等待一个 Promise 对象 resolve，并拿到结果。

​		其实就是类似汇编的寄存器和跳转指令……呃，通俗的说就是可以根据状态跳转态另一个函数半中间。

​		由于es7还未在各个环境实现，想要使用的话还的用一些babel-polyfill之类的库做兼容……

​		更详细介绍请看阿阮的文章： [异步操作和Async函数](http://es6.ruanyifeng.com/?search=async&x=0&y=0#docs/async)

### yield/Generator/GeneratorFunction

​		generator是es6中新增的函数，本质是可以将一个函数执行暂停，并保存上下文，再次调用时恢复当时的状态。但是用来解决协程切换的问题貌似有点儿滥用特性的感觉呢……

​		更详细介绍请看阿阮的文章： [Generator 函数](http://es6.ruanyifeng.com/?search=async&x=0&y=0#docs/generator)

### cluster

​		cluster是node官方提供的一个多进程模块，效果和C语言的fork函数类似，当前文件完全重新执行一遍，通过cluster.isMaster判断是不是主进程，在区分不同的操作。进程间通过事件回调来通信，NodeJS 0.6.x 以上的版本开始支持。

​		示例代码就不放了，node官方文档上写的很详细： [cluster](https://www.open-open.com/misc/goto?guid=4959646474498485566)

## child_process

​		node自带的child_process模块里的fork函数可以实现类似浏览器里webworkers的效果，使用方法和webworker一毛一样，都是通过读取新文件开启新进程，通过message通信。

​		具体介绍请看文档： [child_process.fork(modulePath[, args\][, options])](https://www.open-open.com/misc/goto?guid=4959732640049274960)

​		官方文档没有示例，下面给出一个web服务接收参数计算斐波那契数组的例子：

#### index.js

```js
var express = require('express');
var fork = require('child_process').fork;
var app = express();
app.get('/', function(req, res){
    var worker = fork('./work_fibo.js') //创建一个工作进程
    worker.on('message', function(m){//接收工作进程计算结果
        if('object' === typeof m && m.type === 'fibo'){
            worker.kill();//发送杀死进程的信号
            res.send(m.result.toString());//将结果返回客户端
        }
    });
    worker.send({type:'fibo',num:~~req.query.n || 1});//发送给工作进程计算fibo的数量
});
app.listen(8124);

```

#### work_fibo.js

```js
var fibo = functionfibo(n){//定义算法
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}
process.on('message', function(m){
//接收主进程发送过来的消息
    if(typeof m === 'object' && m.type === 'fibo'){
        var num = fibo(~~m.num);
        //计算jibo
        process.send({type: 'fibo',result:num})
        //计算完毕返回结果
    }
});
process.on('SIGHUP', function(){
    process.exit();//收到kill信息，进程退出
});

```

### libuv

​		libuv是node底层实现使用的c++库……呃，所以如果你想使用这个库来实现多线程，那么你就得编写c++的代码了，不得不说，要想真正理解程序的本质，不多掌握几门语言真是不行啊……

对c++不了解我就不瞎BB了，推荐两篇文章延伸阅读：

- [libuv多线程处理的简单示例](https://www.open-open.com/misc/goto?guid=4959732640137785010)
- [利用libuv编写异步多线程的addon实例](https://www.open-open.com/misc/goto?guid=4959732640220648698)

### tagg

​		tagg(Threads a gogo for Node.js)是Jorge Chamorro Bieling开发的一个node包。使用c语言phread库实现的多线程。

还是那刚才的斐波那契数组计算为例：

```js
var Threads = require('threads_a_gogo');//加载tagg包
functionfibo(n){//定义斐波那契数组计算函数
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}
var t = Threads.create().eval(fibo);
t.eval('fibo(35)', function(err, result){//将fibo(35)丢入子线程运行
    if (err) throw err; //线程创建失败
    console.log('fibo(35)=' + result);//打印fibo执行35次的结果
});
console.log('not block');//打印信息了，表示没有阻塞

```

最后结果：

```js
not block
fibo(35)=14930352

```

我们可以看到执行效果与webworker类似，不同的是通信使用了异步回调的方式。

值得一提的是tagg包目前只能在linux下安装运行，这里再推荐一个tagg2包，是跨平台的。

这里需要重点提一下的是，不论tagg还是tagg2包都是利用phtread库和v8的v8::Isolate Class类来实现js多线程功能的。

Isolate代表着一个独立的v8引擎实例，v8的Isolate拥有完全分开的状态，在一个Isolate实例中的对象不能够在另外一个Isolate实例中使用。嵌入式开发者可以在其他线程创建一些额外的Isolate实例并行运行。在任何时刻，一个Isolate实例只能够被一个线程进行访问，可以利用加锁/解锁进行同步操作。

换而言之，我们在进行v8的嵌入式开发时，无法在多线程中访问js变量，这条规则将直接导致我们之前的tagg2里面线程执行的函数无法使用Node.js的核心api，比如fs，crypto等模块。

延伸阅读：

- [tagg](https://www.open-open.com/misc/goto?guid=4959732640301480659)
- [tagg2](https://www.open-open.com/misc/goto?guid=4959732640383245706)

## 06.总结

​		经过以上的学习，我们大概应该了解到进程、线程、协程的使用场景了，进程、线程适合用来处理计算密集型操作，协程适合用来优化代码结构，解决回调函数嵌套问题。线程比进程更轻，更节省资源，但是由于上面提到的线程问题，针对一些可以使用js原生的大量计算或循环还可以用用，涉及到使用nodejs核心api的操作，就要用进程解决了。



## 07.参考

[JavaScript中的进程、线程和协程](https://www.open-open.com/lib/view/open1483144630465.html)

[JavaScript的进程和线程](https://www.jianshu.com/p/d1bbd9049bfc)