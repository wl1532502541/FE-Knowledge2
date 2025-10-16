import{_ as n,a,o as e,aH as p}from"./chunks/framework.2-_qtiUw.js";const g=JSON.parse('{"title":"Promise面试题","description":"","frontmatter":{},"headers":[],"relativePath":"JS基础/Promise面试题.md","filePath":"JS基础/Promise面试题.md","lastUpdated":1631006240000}'),l={name:"JS基础/Promise面试题.md"};function i(o,s,c,t,d,r){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="promise面试题" tabindex="-1">Promise面试题 <a class="header-anchor" href="#promise面试题" aria-label="Permalink to &quot;Promise面试题&quot;">​</a></h1><h3 id="_1-promise的几道基础题" tabindex="-1">1. Promise的几道基础题 <a class="header-anchor" href="#_1-promise的几道基础题" aria-label="Permalink to &quot;1. Promise的几道基础题&quot;">​</a></h3><h4 id="_1-1-题目一" tabindex="-1">1.1 题目一 <a class="header-anchor" href="#_1-1-题目一" aria-label="Permalink to &quot;1.1 题目一&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> promise1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;promise1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, promise1);</span></span></code></pre></div><p>过程分析：</p><ul><li>从上至下，先遇到<code>new Promise</code>，执行该构造函数中的代码<code>promise1</code></li><li>然后执行同步代码<code>1</code>，此时<code>promise1</code>没有被<code>resolve</code>或者<code>reject</code>，因此状态还是<code>pending</code></li></ul><p>结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;promise1&#39;</span></span>
<span class="line"><span>&#39;1&#39; Promise{&lt;pending&gt;}</span></span></code></pre></div><h4 id="_1-2-题目二" tabindex="-1">1.2 题目二 <a class="header-anchor" href="#_1-2-题目二" aria-label="Permalink to &quot;1.2 题目二&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;success&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">promise.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>过程分析：</p><ul><li>从上至下，先遇到<code>new Promise</code>，执行其中的同步代码<code>1</code></li><li>再遇到<code>resolve(&#39;success&#39;)</code>， 将<code>promise</code>的状态改为了<code>resolved</code>并且将值保存下来</li><li>继续执行同步代码<code>2</code></li><li>跳出<code>promise</code>，往下执行，碰到<code>promise.then</code>这个微任务，将其加入微任务队列</li><li>执行同步代码<code>4</code></li><li>本轮宏任务全部执行完毕，检查微任务队列，发现<code>promise.then</code>这个微任务且状态为<code>resolved</code>，执行它。</li></ul><p>结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1 2 4 3</span></span></code></pre></div><h4 id="_1-3-题目三" tabindex="-1">1.3 题目三 <a class="header-anchor" href="#_1-3-题目三" aria-label="Permalink to &quot;1.3 题目三&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  console.log(1);</span></span>
<span class="line"><span>  console.log(2);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>promise.then(() =&gt; {</span></span>
<span class="line"><span>  console.log(3);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>console.log(4);</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>过程分析</p><ul><li>和题目二相似，只不过在<code>promise</code>中并没有<code>resolve</code>或者<code>reject</code></li><li>因此<code>promise.then</code>并不会执行，它只有在被改变了状态之后才会执行。</li></ul><p>结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1 2 4</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><h4 id="_1-4-题目四" tabindex="-1">1.4 题目四 <a class="header-anchor" href="#_1-4-题目四" aria-label="Permalink to &quot;1.4 题目四&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const promise1 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;promise1&#39;)</span></span>
<span class="line"><span>  resolve(&#39;resolve1&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const promise2 = promise1.then(res =&gt; {</span></span>
<span class="line"><span>  console.log(res)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(&#39;1&#39;, promise1);</span></span>
<span class="line"><span>console.log(&#39;2&#39;, promise2);</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>过程分析：</p><ul><li>从上至下，先遇到<code>new Promise</code>，执行该构造函数中的代码<code>promise1</code></li><li>碰到<code>resolve</code>函数, 将<code>promise1</code>的状态改变为<code>resolved</code>, 并将结果保存下来</li><li>碰到<code>promise1.then</code>这个微任务，将它放入微任务队列</li><li><code>promise2</code>是一个新的状态为<code>pending</code>的<code>Promise</code></li><li>执行同步代码<code>1</code>， 同时打印出<code>promise1</code>的状态是<code>resolved</code></li><li>执行同步代码<code>2</code>，同时打印出<code>promise2</code>的状态是<code>pending</code></li><li>宏任务执行完毕，查找微任务队列，发现<code>promise1.then</code>这个微任务且状态为<code>resolved</code>，执行它。</li></ul><p>结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;promise1&#39;</span></span>
<span class="line"><span>&#39;1&#39; Promise{&lt;resolved&gt;: &#39;resolve1&#39;}</span></span>
<span class="line"><span>&#39;2&#39; Promise{&lt;pending&gt;}</span></span>
<span class="line"><span>&#39;resolve1&#39;</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><h4 id="_1-5-题目五" tabindex="-1">1.5 题目五 <a class="header-anchor" href="#_1-5-题目五" aria-label="Permalink to &quot;1.5 题目五&quot;">​</a></h4><p>接下来看看这道题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fn = () =&gt; (new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  console.log(1);</span></span>
<span class="line"><span>  resolve(&#39;success&#39;)</span></span>
<span class="line"><span>}))</span></span>
<span class="line"><span>fn().then(res =&gt; {</span></span>
<span class="line"><span>  console.log(res)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(&#39;start&#39;)</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>这道题里最先执行的是<code>&#39;start&#39;</code>吗 🤔️ ？ 请仔细看看哦，<code>fn</code>函数它是直接返回了一个<code>new Promise</code>的，而且<code>fn</code>函数的调用是在<code>start</code>之前，所以它里面的内容应该会先执行。 结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1</span></span>
<span class="line"><span>&#39;start&#39;</span></span>
<span class="line"><span>&#39;success&#39;</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><h4 id="_1-6-题目六" tabindex="-1">1.6 题目六 <a class="header-anchor" href="#_1-6-题目六" aria-label="Permalink to &quot;1.6 题目六&quot;">​</a></h4><p>如果把<code>fn</code>的调用放到<code>start</code>之后呢？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fn = () =&gt;</span></span>
<span class="line"><span>  new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    console.log(1);</span></span>
<span class="line"><span>    resolve(&quot;success&quot;);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>console.log(&quot;start&quot;);</span></span>
<span class="line"><span>fn().then(res =&gt; {</span></span>
<span class="line"><span>  console.log(res);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>是的，现在<code>start</code>就在<code>1</code>之前打印出来了，因为<code>fn</code>函数是之后执行的。 <strong>注意⚠️</strong>：之前我们很容易就以为看到new Promise()就执行它的第一个参数函数了，其实这是不对的，就像这两道题中，我们得注意它是不是被包裹在函数当中，如果是的话，只有在函数调用的时候才会执行。 答案：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;start&quot;</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>&quot;success&quot;</span></span></code></pre></div><h3 id="_2-promise结合settimeout" tabindex="-1">2. Promise结合setTimeout <a class="header-anchor" href="#_2-promise结合settimeout" aria-label="Permalink to &quot;2. Promise结合setTimeout&quot;">​</a></h3><h4 id="_2-1-题目一" tabindex="-1">2.1 题目一 <a class="header-anchor" href="#_2-1-题目一" aria-label="Permalink to &quot;2.1 题目一&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>console.log(&#39;start&#39;)</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;time&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>Promise.resolve().then(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;resolve&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(&#39;end&#39;)</span></span></code></pre></div><p>过程分析：</p><ul><li>刚开始整个脚本作为一个宏任务来执行，对于同步代码直接压入执行栈进行执行，因此先打印出<code>start</code>和<code>end</code>。</li><li><code>setTimout</code>作为一个宏任务被放入宏任务队列(下一个)</li><li><code>Promise.then</code>作为一个微任务被放入微任务队列</li><li>本次宏任务执行完，检查微任务，发现<code>Promise.then</code>，执行它</li><li>接下来进入下一个宏任务，发现<code>setTimeout</code>，执行。</li></ul><p>结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;start&#39;</span></span>
<span class="line"><span>&#39;end&#39;</span></span>
<span class="line"><span>&#39;resolve&#39;</span></span>
<span class="line"><span>&#39;time&#39;</span></span></code></pre></div><h4 id="_2-2-题目二" tabindex="-1">2.2 题目二 <a class="header-anchor" href="#_2-2-题目二" aria-label="Permalink to &quot;2.2 题目二&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  console.log(1);</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;timerStart&quot;);</span></span>
<span class="line"><span>    resolve(&quot;success&quot;);</span></span>
<span class="line"><span>    console.log(&quot;timerEnd&quot;);</span></span>
<span class="line"><span>  }, 0);</span></span>
<span class="line"><span>  console.log(2);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>promise.then((res) =&gt; {</span></span>
<span class="line"><span>  console.log(res);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>console.log(4);</span></span></code></pre></div><p>过程分析： 和题目<code>1.2</code>很像，不过在<code>resolve</code>的外层加了一层<code>setTimeout</code>定时器。</p><ul><li>从上至下，先遇到<code>new Promise</code>，执行该构造函数中的代码<code>1</code></li><li>然后碰到了定时器，将这个定时器中的函数放到下一个宏任务的延迟队列中等待执行</li><li>执行同步代码<code>2</code></li><li>跳出<code>promise</code>函数，遇到<code>promise.then</code>，但其状态还是为<code>pending</code>，这里理解为先不执行</li><li>执行同步代码<code>4</code></li><li>一轮循环过后，进入第二次宏任务，发现延迟队列中有<code>setTimeout</code>定时器，执行它</li><li>首先执行<code>timerStart</code>，然后遇到了<code>resolve</code>，将<code>promise</code>的状态改为<code>resolved</code>且保存结果并将之前的<code>promise.then</code>推入微任务队列</li><li>继续执行同步代码<code>timerEnd</code></li><li>宏任务全部执行完毕，查找微任务队列，发现<code>promise.then</code>这个微任务，执行它。</li></ul><p>因此执行结果为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>&quot;timerStart&quot;</span></span>
<span class="line"><span>&quot;timerEnd&quot;</span></span>
<span class="line"><span>&quot;success&quot;</span></span></code></pre></div><h4 id="_2-3-题目三" tabindex="-1">2.3 题目三 <a class="header-anchor" href="#_2-3-题目三" aria-label="Permalink to &quot;2.3 题目三&quot;">​</a></h4><p>题目三分了两个题目，因为看着都差不多，不过执行的结果却不一样，大家不妨先猜猜下面两个题目分别执行什么： <strong>(1)</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;timer1&#39;);</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;timer3&#39;)</span></span>
<span class="line"><span>  }, 0)</span></span>
<span class="line"><span>}, 0)</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;timer2&#39;)</span></span>
<span class="line"><span>}, 0)</span></span>
<span class="line"><span>console.log(&#39;start&#39;)</span></span></code></pre></div><p><strong>(2)</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;timer1&#39;);</span></span>
<span class="line"><span>  Promise.resolve().then(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;promise&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}, 0)</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;timer2&#39;)</span></span>
<span class="line"><span>}, 0)</span></span>
<span class="line"><span>console.log(&#39;start&#39;)</span></span></code></pre></div><p><strong>执行结果：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;start&#39;</span></span>
<span class="line"><span>&#39;timer1&#39;</span></span>
<span class="line"><span>&#39;timer2&#39;</span></span>
<span class="line"><span>&#39;timer3&#39;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;start&#39;</span></span>
<span class="line"><span>&#39;timer1&#39;</span></span>
<span class="line"><span>&#39;promise&#39;</span></span>
<span class="line"><span>&#39;timer2&#39;</span></span></code></pre></div><p>这两个例子，看着好像只是把第一个定时器中的内容换了一下而已。 一个是为定时器<code>timer3</code>，一个是为<code>Promise.then</code> 但是如果是定时器<code>timer3</code>的话，它会在<code>timer2</code>后执行，而<code>Promise.then</code>却是在<code>timer2</code>之前执行。 你可以这样理解，<code>Promise.then</code>是微任务，它会被加入到本轮中的微任务列表，而定时器<code>timer3</code>是宏任务，它会被加入到下一轮的宏任务中。 理解完这两个案例，可以来看看下面一道比较难的题目了。</p><h4 id="_2-3-题目三-1" tabindex="-1">2.3 题目三 <a class="header-anchor" href="#_2-3-题目三-1" aria-label="Permalink to &quot;2.3 题目三&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Promise.resolve().then(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;promise1&#39;);</span></span>
<span class="line"><span>  const timer2 = setTimeout(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;timer2&#39;)</span></span>
<span class="line"><span>  }, 0)</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>const timer1 = setTimeout(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;timer1&#39;)</span></span>
<span class="line"><span>  Promise.resolve().then(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;promise2&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}, 0)</span></span>
<span class="line"><span>console.log(&#39;start&#39;);</span></span></code></pre></div><p>这道题稍微的难一些，在<code>promise</code>中执行定时器，又在定时器中执行<code>promise</code>； 并且要注意的是，这里的<code>Promise</code>是直接<code>resolve</code>的，而之前的<code>new Promise</code>不一样。 (偷偷告诉你，这道题往下一点有流程图) 因此过程分析为：</p><ul><li>刚开始整个脚本作为第一次宏任务来执行，我们将它标记为<strong>宏1</strong>，从上至下执行</li><li>遇到<code>Promise.resolve().then</code>这个微任务，将<code>then</code>中的内容加入第一次的微任务队列标记为<strong>微1</strong></li><li>遇到定时器<code>timer1</code>，将它加入下一次宏任务的延迟列表，标记为<strong>宏2</strong>，等待执行(先不管里面是什么内容)</li><li>执行<strong>宏1</strong>中的同步代码<code>start</code></li><li>第一次宏任务(<strong>宏1</strong>)执行完毕，检查第一次的微任务队列(<strong>微1</strong>)，发现有一个<code>promise.then</code>这个微任务需要执行</li><li>执行打印出<strong>微1</strong>中同步代码<code>promise1</code>，然后发现定时器<code>timer2</code>，将它加入<strong>宏2</strong>的后面，标记为<strong>宏3</strong></li><li>第一次微任务队列(<strong>微1</strong>)执行完毕，执行第二次宏任务(<strong>宏2</strong>)，首先执行同步代码<code>timer1</code></li><li>然后遇到了<code>promise2</code>这个微任务，将它加入此次循环的微任务队列，标记为<strong>微2</strong></li><li><strong>宏2</strong>中没有同步代码可执行了，查找本次循环的微任务队列(<strong>微2</strong>)，发现了<code>promise2</code>，执行它</li><li>第二轮执行完毕，执行<strong>宏3</strong>，打印出<code>timer2</code></li></ul><p>所以结果为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;start&#39;</span></span>
<span class="line"><span>&#39;promise1&#39;</span></span>
<span class="line"><span>&#39;timer1&#39;</span></span>
<span class="line"><span>&#39;promise2&#39;</span></span>
<span class="line"><span>&#39;timer2&#39;</span></span></code></pre></div><p>如果感觉有点绕的话，可以看下面这张图，就一目了然了。 <img src="https://cdn.nlark.com/yuque/0/2021/webp/12821255/1626357897764-38091db6-91bb-4529-9680-180cc0281583.webp#align=left&amp;display=inline&amp;height=665&amp;margin=%5Bobject%20Object%5D&amp;originHeight=665&amp;originWidth=1280&amp;size=0&amp;status=done&amp;style=none&amp;width=1280" alt=""></p><h4 id="_2-4-题目四" tabindex="-1">2.4 题目四 <a class="header-anchor" href="#_2-4-题目四" aria-label="Permalink to &quot;2.4 题目四&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const promise1 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    resolve(&#39;success&#39;)</span></span>
<span class="line"><span>  }, 1000)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const promise2 = promise1.then(() =&gt; {</span></span>
<span class="line"><span>  throw new Error(&#39;error!!!&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(&#39;promise1&#39;, promise1)</span></span>
<span class="line"><span>console.log(&#39;promise2&#39;, promise2)</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;promise1&#39;, promise1)</span></span>
<span class="line"><span>  console.log(&#39;promise2&#39;, promise2)</span></span>
<span class="line"><span>}, 2000)</span></span></code></pre></div><p>过程分析：</p><ul><li>从上至下，先执行第一个<code>new Promise</code>中的函数，碰到<code>setTimeout</code>将它加入下一个宏任务列表</li><li>跳出<code>new Promise</code>，碰到<code>promise1.then</code>这个微任务，但其状态还是为<code>pending</code>，这里理解为先不执行</li><li><code>promise2</code>是一个新的状态为<code>pending</code>的<code>Promise</code></li><li>执行同步代码<code>console.log(&#39;promise1&#39;)</code>，且打印出的<code>promise1</code>的状态为<code>pending</code></li><li>执行同步代码<code>console.log(&#39;promise2&#39;)</code>，且打印出的<code>promise2</code>的状态为<code>pending</code></li><li>碰到第二个定时器，将其放入下一个宏任务列表</li><li>第一轮宏任务执行结束，并且没有微任务需要执行，因此执行第二轮宏任务</li><li>先执行第一个定时器里的内容，将<code>promise1</code>的状态改为<code>resolved</code>且保存结果并将之前的<code>promise1.then</code>推入微任务队列</li><li>该定时器中没有其它的同步代码可执行，因此执行本轮的微任务队列，也就是<code>promise1.then</code>，它抛出了一个错误，且将<code>promise2</code>的状态设置为了<code>rejected</code></li><li>第一个定时器执行完毕，开始执行第二个定时器中的内容</li><li>打印出<code>&#39;promise1&#39;</code>，且此时<code>promise1</code>的状态为<code>resolved</code></li><li>打印出<code>&#39;promise2&#39;</code>，且此时<code>promise2</code>的状态为<code>rejected</code></li></ul><p>完整的结果为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;promise1&#39; Promise{&lt;pending&gt;}</span></span>
<span class="line"><span>&#39;promise2&#39; Promise{&lt;pending&gt;}</span></span>
<span class="line"><span>test5.html:102 Uncaught (in promise) Error: error!!! at test.html:102</span></span>
<span class="line"><span>&#39;promise1&#39; Promise{&lt;resolved&gt;: &quot;success&quot;}</span></span>
<span class="line"><span>&#39;promise2&#39; Promise{&lt;rejected&gt;: Error: error!!!}</span></span></code></pre></div><h4 id="_2-5-题目五" tabindex="-1">2.5 题目五 <a class="header-anchor" href="#_2-5-题目五" aria-label="Permalink to &quot;2.5 题目五&quot;">​</a></h4><p>如果你上面这道题搞懂了之后，我们就可以来做做这道了，你应该能很快就给出答案：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const promise1 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    resolve(&quot;success&quot;);</span></span>
<span class="line"><span>    console.log(&quot;timer1&quot;);</span></span>
<span class="line"><span>  }, 1000);</span></span>
<span class="line"><span>  console.log(&quot;promise1里的内容&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>const promise2 = promise1.then(() =&gt; {</span></span>
<span class="line"><span>  throw new Error(&quot;error!!!&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>console.log(&quot;promise1&quot;, promise1);</span></span>
<span class="line"><span>console.log(&quot;promise2&quot;, promise2);</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;timer2&quot;);</span></span>
<span class="line"><span>  console.log(&quot;promise1&quot;, promise1);</span></span>
<span class="line"><span>  console.log(&quot;promise2&quot;, promise2);</span></span>
<span class="line"><span>}, 2000);</span></span></code></pre></div><p>结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;promise1里的内容&#39;</span></span>
<span class="line"><span>&#39;promise1&#39; Promise{&lt;pending&gt;}</span></span>
<span class="line"><span>&#39;promise2&#39; Promise{&lt;pending&gt;}</span></span>
<span class="line"><span>&#39;timer1&#39;</span></span>
<span class="line"><span>test5.html:102 Uncaught (in promise) Error: error!!! at test.html:102</span></span>
<span class="line"><span>&#39;timer2&#39;</span></span>
<span class="line"><span>&#39;promise1&#39; Promise{&lt;resolved&gt;: &quot;success&quot;}</span></span>
<span class="line"><span>&#39;promise2&#39; Promise{&lt;rejected&gt;: Error: error!!!}</span></span></code></pre></div><h3 id="_3-promise中的then、catch、finally" tabindex="-1">3. Promise中的then、catch、finally <a class="header-anchor" href="#_3-promise中的then、catch、finally" aria-label="Permalink to &quot;3. Promise中的then、catch、finally&quot;">​</a></h3><p>额，可能你看到下面👇这么多的<code>1，2，3</code>脾气就上来了，不是说好了本篇文章没什么屁话嘛，怎么还是这么多一二三四。 😂，你要理解我的用心良苦啊，我这是帮你把知识点都列举出来，做个总结而已。当然，你也可以先不看，先去做后面的题，然后再回过头来看这些，你就觉得这些点都好好懂啊，甚至都不需要记。 <strong>总结：</strong></p><ol><li><code>Promise</code>的状态一经改变就不能再改变。(见3.1)</li><li><code>.then</code>和<code>.catch</code>都会返回一个新的<code>Promise</code>。(上面的👆1.4证明了)</li><li><code>catch</code>不管被连接到哪里，都能捕获上层未捕捉过的错误。(见3.2)</li><li>在<code>Promise</code>中，返回任意一个非 <code>promise</code> 的值都会被包裹成 <code>promise</code> 对象，例如<code>return 2</code>会被包装为<code>return Promise.resolve(2)</code>。</li><li><code>Promise</code> 的 <code>.then</code> 或者 <code>.catch</code> 可以被调用多次, 但如果<code>Promise</code>内部的状态一经改变，并且有了一个值，那么后续每次调用<code>.then</code>或者<code>.catch</code>的时候都会直接拿到该值。(见3.5)</li><li><code>.then</code> 或者 <code>.catch</code> 中 <code>return</code> 一个 <code>error</code> 对象并不会抛出错误，所以不会被后续的 <code>.catch</code> 捕获。(见3.6)</li><li><code>.then</code> 或 <code>.catch</code> 返回的值不能是 promise 本身，否则会造成死循环。(见3.7)</li><li><code>.then</code> 或者 <code>.catch</code> 的参数期望是函数，传入非函数则会发生值透传。(见3.8)</li><li><code>.then</code>方法是能接收两个参数的，第一个是处理成功的函数，第二个是处理失败的函数，再某些时候你可以认为<code>catch</code>是<code>.then</code>第二个参数的简便写法。(见3.9)</li><li><code>.finally</code>方法也是返回一个<code>Promise</code>，他在<code>Promise</code>结束的时候，无论结果为<code>resolved</code>还是<code>rejected</code>，都会执行里面的回调函数。</li></ol><h4 id="_3-1-题目一" tabindex="-1">3.1 题目一 <a class="header-anchor" href="#_3-1-题目一" aria-label="Permalink to &quot;3.1 题目一&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  resolve(&quot;success1&quot;);</span></span>
<span class="line"><span>  reject(&quot;error&quot;);</span></span>
<span class="line"><span>  resolve(&quot;success2&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>promise</span></span>
<span class="line"><span>.then(res =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;then: &quot;, res);</span></span>
<span class="line"><span>  }).catch(err =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;catch: &quot;, err);</span></span>
<span class="line"><span>  })</span></span></code></pre></div><p>结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;then: success1&quot;</span></span></code></pre></div><p>构造函数中的 <code>resolve</code> 或 <code>reject</code> 只有第一次执行有效，多次调用没有任何作用 。验证了第一个结论，<code>Promise</code>的状态一经改变就不能再改变。</p><h4 id="_3-2-题目二" tabindex="-1">3.2 题目二 <a class="header-anchor" href="#_3-2-题目二" aria-label="Permalink to &quot;3.2 题目二&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  reject(&quot;error&quot;);</span></span>
<span class="line"><span>  resolve(&quot;success2&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>promise</span></span>
<span class="line"><span>.then(res =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;then1: &quot;, res);</span></span>
<span class="line"><span>  }).then(res =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;then2: &quot;, res);</span></span>
<span class="line"><span>  }).catch(err =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;catch: &quot;, err);</span></span>
<span class="line"><span>  }).then(res =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;then3: &quot;, res);</span></span>
<span class="line"><span>  })</span></span></code></pre></div><p>结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;catch: &quot; &quot;error&quot;</span></span>
<span class="line"><span>&quot;then3: &quot; undefined</span></span></code></pre></div><p>验证了第三个结论，<code>catch</code>不管被连接到哪里，都能捕获上层未捕捉过的错误。 至于<code>then3</code>也会被执行，那是因为<code>catch()</code>也会返回一个<code>Promise</code>，且由于这个<code>Promise</code>没有返回值，所以打印出来的是<code>undefined</code>。</p><h4 id="_3-3-题目三" tabindex="-1">3.3 题目三 <a class="header-anchor" href="#_3-3-题目三" aria-label="Permalink to &quot;3.3 题目三&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Promise.resolve(1)</span></span>
<span class="line"><span>  .then(res =&gt; {</span></span>
<span class="line"><span>    console.log(res);</span></span>
<span class="line"><span>    return 2;</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .catch(err =&gt; {</span></span>
<span class="line"><span>    return 3;</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .then(res =&gt; {</span></span>
<span class="line"><span>    console.log(res);</span></span>
<span class="line"><span>  });</span></span></code></pre></div><p>结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1</span></span>
<span class="line"><span>2</span></span></code></pre></div><p><code>Promise</code>可以链式调用，不过<code>promise</code> 每次调用 <code>.then</code> 或者 <code>.catch</code> 都会返回一个新的 <code>promise</code>，从而实现了链式调用, 它并不像一般我们任务的链式调用一样<code>return this</code>。 上面的输出结果之所以依次打印出<code>1</code>和<code>2</code>，那是因为<code>resolve(1)</code>之后走的是第一个<code>then</code>方法，并没有走<code>catch</code>里，所以第二个<code>then</code>中的<code>res</code>得到的实际上是第一个<code>then</code>的返回值。 且<code>return 2</code>会被包装成<code>resolve(2)</code>。</p><h4 id="_3-4-题目四" tabindex="-1">3.4 题目四 <a class="header-anchor" href="#_3-4-题目四" aria-label="Permalink to &quot;3.4 题目四&quot;">​</a></h4><p>如果把<code>3.3</code>中的<code>Promise.resolve(1)</code>改为<code>Promise.reject(1)</code>又会怎么样呢？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Promise.reject(1)</span></span>
<span class="line"><span>  .then(res =&gt; {</span></span>
<span class="line"><span>    console.log(res);</span></span>
<span class="line"><span>    return 2;</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .catch(err =&gt; {</span></span>
<span class="line"><span>    console.log(err);</span></span>
<span class="line"><span>    return 3</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .then(res =&gt; {</span></span>
<span class="line"><span>    console.log(res);</span></span>
<span class="line"><span>  });</span></span></code></pre></div><p>结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1</span></span>
<span class="line"><span>3</span></span></code></pre></div><p>结果打印的当然是 <code>1 和 3</code>啦，因为<code>reject(1)</code>此时走的就是<code>catch</code>，且第二个<code>then</code>中的<code>res</code>得到的就是<code>catch</code>中的返回值。</p><h4 id="_3-5-题目五" tabindex="-1">3.5 题目五 <a class="header-anchor" href="#_3-5-题目五" aria-label="Permalink to &quot;3.5 题目五&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;timer&#39;)</span></span>
<span class="line"><span>    resolve(&#39;success&#39;)</span></span>
<span class="line"><span>  }, 1000)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const start = Date.now();</span></span>
<span class="line"><span>promise.then(res =&gt; {</span></span>
<span class="line"><span>  console.log(res, Date.now() - start)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>promise.then(res =&gt; {</span></span>
<span class="line"><span>  console.log(res, Date.now() - start)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>执行结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;timer&#39;</span></span>
<span class="line"><span>&#39;success&#39; 1001</span></span>
<span class="line"><span>&#39;success&#39; 1002</span></span></code></pre></div><p>当然，如果你足够快的话，也可能两个都是<code>1001</code>。 <code>Promise</code> 的 <code>.then</code> 或者 <code>.catch</code> 可以被调用多次，但这里 <code>Promise</code> 构造函数只执行一次。或者说 <code>promise</code> 内部状态一经改变，并且有了一个值，那么后续每次调用 <code>.then</code> 或者 <code>.catch</code> 都会直接拿到该值。</p><h4 id="_3-6-题目六" tabindex="-1">3.6 题目六 <a class="header-anchor" href="#_3-6-题目六" aria-label="Permalink to &quot;3.6 题目六&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Promise.resolve().then(() =&gt; {</span></span>
<span class="line"><span>  return new Error(&#39;error!!!&#39;)</span></span>
<span class="line"><span>}).then(res =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;then: &quot;, res)</span></span>
<span class="line"><span>}).catch(err =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;catch: &quot;, err)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>猜猜这里的结果输出的是什么 🤔️ ？ 你可能想到的是进入<code>.catch</code>然后被捕获了错误。 结果并不是这样的，它走的是<code>.then</code>里面：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;then: &quot; &quot;Error: error!!!&quot;</span></span></code></pre></div><p>这也验证了第4点和第6点，返回任意一个非 <code>promise</code> 的值都会被包裹成 <code>promise</code> 对象，因此这里的<code>return new Error(&#39;error!!!&#39;)</code>也被包裹成了<code>return Promise.resolve(new Error(&#39;error!!!&#39;))</code>。 当然如果你抛出一个错误的话，可以用下面👇两的任意一种：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>return Promise.reject(new Error(&#39;error!!!&#39;));</span></span>
<span class="line"><span>// or</span></span>
<span class="line"><span>throw new Error(&#39;error!!!&#39;)</span></span></code></pre></div><h4 id="_3-7-题目七" tabindex="-1">3.7 题目七 <a class="header-anchor" href="#_3-7-题目七" aria-label="Permalink to &quot;3.7 题目七&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const promise = Promise.resolve().then(() =&gt; {</span></span>
<span class="line"><span>  return promise;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>promise.catch(console.err)</span></span></code></pre></div><p><code>.then</code> 或 <code>.catch</code> 返回的值不能是 promise 本身，否则会造成死循环。 因此结果会报错：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Uncaught (in promise) TypeError: Chaining cycle detected for promise #&lt;Promise&gt;</span></span></code></pre></div><h4 id="_3-8-题目八" tabindex="-1">3.8 题目八 <a class="header-anchor" href="#_3-8-题目八" aria-label="Permalink to &quot;3.8 题目八&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Promise.resolve(1)</span></span>
<span class="line"><span>  .then(2)</span></span>
<span class="line"><span>  .then(Promise.resolve(3))</span></span>
<span class="line"><span>  .then(console.log)</span></span></code></pre></div><p>这道题看着好像很简单，又感觉很复杂的样子，怎么这么多个<code>.then</code>啊... 😅</p><p>其实你只要记住<strong>原则8</strong>：<code>.then</code> 或者 <code>.catch</code> 的参数期望是函数，传入非函数则会发生值透传。 第一个<code>then</code>和第二个<code>then</code>中传入的都不是函数，一个是数字类型，一个是对象类型，因此发生了透传，将<code>resolve(1)</code> 的值直接传到最后一个<code>then</code>里。 所以输出结果为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1</span></span></code></pre></div><h4 id="_3-9-题目九" tabindex="-1">3.9 题目九 <a class="header-anchor" href="#_3-9-题目九" aria-label="Permalink to &quot;3.9 题目九&quot;">​</a></h4><p>下面来介绍一下<code>.then</code>函数中的两个参数。 第一个参数是用来处理<code>Promise</code>成功的函数，第二个则是处理失败的函数。 也就是说<code>Promise.resolve(&#39;1&#39;)</code>的值会进入成功的函数，<code>Promise.reject(&#39;2&#39;)</code>的值会进入失败的函数。 让我们来看看这个例子🌰：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Promise.reject(&#39;err!!!&#39;)</span></span>
<span class="line"><span>  .then((res) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;success&#39;, res)</span></span>
<span class="line"><span>  }, (err) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;error&#39;, err)</span></span>
<span class="line"><span>  }).catch(err =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;catch&#39;, err)</span></span>
<span class="line"><span>  })</span></span></code></pre></div><p>这里的执行结果是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;error&#39; &#39;error!!!&#39;</span></span></code></pre></div><p>它进入的是<code>then()</code>中的第二个参数里面，而如果把第二个参数去掉，就进入了<code>catch()</code>中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Promise.reject(&#39;error!!!&#39;)</span></span>
<span class="line"><span>  .then((res) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;success&#39;, res)</span></span>
<span class="line"><span>  }).catch(err =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;catch&#39;, err)</span></span>
<span class="line"><span>  })</span></span></code></pre></div><p>执行结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;catch&#39; &#39;error!!!&#39;</span></span></code></pre></div><p>但是有一个问题，如果是这个案例呢？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Promise.resolve()</span></span>
<span class="line"><span>  .then(function success (res) {</span></span>
<span class="line"><span>    throw new Error(&#39;error!!!&#39;)</span></span>
<span class="line"><span>  }, function fail1 (err) {</span></span>
<span class="line"><span>    console.log(&#39;fail1&#39;, err)</span></span>
<span class="line"><span>  }).catch(function fail2 (err) {</span></span>
<span class="line"><span>    console.log(&#39;fail2&#39;, err)</span></span>
<span class="line"><span>  })</span></span></code></pre></div><p>由于<code>Promise</code>调用的是<code>resolve()</code>，因此<code>.then()</code>执行的应该是<code>success()</code>函数，可是<code>success()</code>函数抛出的是一个错误，它会被后面的<code>catch()</code>给捕获到，而不是被<code>fail1</code>函数捕获。 因此执行结果为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fail2 Error: error!!!</span></span>
<span class="line"><span>			at success</span></span></code></pre></div><h4 id="_3-10-题目十" tabindex="-1">3.10 题目十 <a class="header-anchor" href="#_3-10-题目十" aria-label="Permalink to &quot;3.10 题目十&quot;">​</a></h4><p>接着来看看<code>.finally()</code>，这个功能一般不太用在面试中，不过如果碰到了你也应该知道该如何处理。 其实你只要记住它三个很重要的知识点就可以了：</p><ol><li><code>.finally()</code>方法不管<code>Promise</code>对象最后的状态如何都会执行</li><li><code>.finally()</code>方法的回调函数不接受任何的参数，也就是说你在<code>.finally()</code>函数中是没法知道<code>Promise</code>最终的状态是<code>resolved</code>还是<code>rejected</code>的</li><li>它最终返回的默认会是一个<strong>上一次的Promise对象值</strong>，不过如果抛出的是一个异常则返回异常的<code>Promise</code>对象。</li></ol><p>来看看这个简单的例子🌰：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Promise.resolve(&#39;1&#39;)</span></span>
<span class="line"><span>  .then(res =&gt; {</span></span>
<span class="line"><span>    console.log(res)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .finally(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;finally&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>Promise.resolve(&#39;2&#39;)</span></span>
<span class="line"><span>  .finally(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;finally2&#39;)</span></span>
<span class="line"><span>  	return &#39;我是finally2返回的值&#39;</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .then(res =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;finally2后面的then函数&#39;, res)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>这两个<code>Promise</code>的<code>.finally</code>都会执行，且就算<code>finally2</code>返回了新的值，它后面的<code>then()</code>函数接收到的结果却还是<code>&#39;2&#39;</code>，因此打印结果为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;1&#39;</span></span>
<span class="line"><span>&#39;finally2&#39;</span></span>
<span class="line"><span>&#39;finally&#39;</span></span>
<span class="line"><span>&#39;finally2后面的then函数&#39; &#39;2&#39;</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>至于为什么<code>finally2</code>的打印要在<code>finally</code>前面，请看下一个例子中的解析。 不过在此之前让我们再来确认一下，<code>finally</code>中要是抛出的是一个异常是怎样的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Promise.resolve(&#39;1&#39;)</span></span>
<span class="line"><span>  .finally(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;finally1&#39;)</span></span>
<span class="line"><span>    throw new Error(&#39;我是finally中抛出的异常&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .then(res =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;finally后面的then函数&#39;, res)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .catch(err =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;捕获错误&#39;, err)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>执行结果为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;finally1&#39;</span></span>
<span class="line"><span>&#39;捕获错误&#39; Error: 我是finally中抛出的异常</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>但是如果改为<code>return new Error(&#39;我是finally中抛出的异常&#39;)</code>，打印出来的就是<code>&#39;finally后面的then函数 1&#39;</code> OK，👌，让我们来看一个比较难的例子🌰：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function promise1 () {</span></span>
<span class="line"><span>  let p = new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;promise1&#39;);</span></span>
<span class="line"><span>    resolve(&#39;1&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  return p;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function promise2 () {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    reject(&#39;error&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>promise1()</span></span>
<span class="line"><span>  .then(res =&gt; console.log(res))</span></span>
<span class="line"><span>  .catch(err =&gt; console.log(err))</span></span>
<span class="line"><span>  .finally(() =&gt; console.log(&#39;finally1&#39;))</span></span>
<span class="line"><span>promise2()</span></span>
<span class="line"><span>  .then(res =&gt; console.log(res))</span></span>
<span class="line"><span>  .catch(err =&gt; console.log(err))</span></span>
<span class="line"><span>  .finally(() =&gt; console.log(&#39;finally2&#39;))</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>执行过程：</p><ul><li>首先定义了两个函数<code>promise1</code>和<code>promise2</code>，先不管接着往下看。</li><li><code>promise1</code>函数先被调用了，然后执行里面<code>new Promise</code>的同步代码打印出<code>promise1</code></li><li>之后遇到了<code>resolve(1)</code>，将<code>p</code>的状态改为了<code>resolved</code>并将结果保存下来。</li><li>此时<code>promise1</code>内的函数内容已经执行完了，跳出该函数</li><li>碰到了<code>promise1().then()</code>，由于<code>promise1</code>的状态已经发生了改变且为<code>resolved</code>因此将<code>promise1().then()</code>这条微任务加入本轮的微任务列表(<strong>这是第一个微任务</strong>)</li><li>这时候要注意了，代码并不会接着往链式调用的下面走，也就是不会先将<code>.finally</code>加入微任务列表，那是因为<code>.then</code>本身就是一个微任务，它链式后面的内容必须得等当前这个微任务执行完才会执行，因此这里我们先不管<code>.finally()</code></li><li>再往下走碰到了<code>promise2()</code>函数，其中返回的<code>new Promise</code>中并没有同步代码需要执行，所以执行<code>reject(&#39;error&#39;)</code>的时候将<code>promise2</code>函数中的<code>Promise</code>的状态变为了<code>rejected</code></li><li>跳出<code>promise2</code>函数，遇到了<code>promise2().catch()</code>，将其加入当前的微任务队列(<strong>这是第二个微任务</strong>)，且链式调用后面的内容得等该任务执行完后才执行，和<code>.then()</code>一样。</li><li>OK， 本轮的宏任务全部执行完了，来看看微任务列表，存在<code>promise1().then()</code>，执行它，打印出<code>1</code>，然后遇到了<code>.finally()</code>这个微任务将它加入微任务列表(<strong>这是第三个微任务</strong>)等待执行</li><li>再执行<code>promise2().catch()</code>打印出<code>error</code>，执行完后将<code>finally2</code>加入微任务加入微任务列表(<strong>这是第四个微任务</strong>)</li><li>OK， 本轮又全部执行完了，但是微任务列表还有两个新的微任务没有执行完，因此依次执行<code>finally1</code>和<code>finally2</code>。</li></ul><p>结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;promise1&#39;</span></span>
<span class="line"><span>&#39;1&#39;</span></span>
<span class="line"><span>&#39;error&#39;</span></span>
<span class="line"><span>&#39;finally1&#39;</span></span>
<span class="line"><span>&#39;finally2&#39;</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>在这道题中其实能拓展的东西挺多的，之前没有提到，那就是你可以理解为<strong>链式调用</strong>后面的内容需要等前一个调用执行完才会执行。 就像是这里的<code>finally()</code>会等<code>promise1().then()</code>执行完才会将<code>finally()</code>加入微任务队列，其实如果这道题中你把<code>finally()</code>换成是<code>then()</code>也是这样的:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function promise1 () {</span></span>
<span class="line"><span>  let p = new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;promise1&#39;);</span></span>
<span class="line"><span>    resolve(&#39;1&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  return p;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function promise2 () {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    reject(&#39;error&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>promise1()</span></span>
<span class="line"><span>  .then(res =&gt; console.log(res))</span></span>
<span class="line"><span>  .catch(err =&gt; console.log(err))</span></span>
<span class="line"><span>  .then(() =&gt; console.log(&#39;finally1&#39;))</span></span>
<span class="line"><span>promise2()</span></span>
<span class="line"><span>  .then(res =&gt; console.log(res))</span></span>
<span class="line"><span>  .catch(err =&gt; console.log(err))</span></span>
<span class="line"><span>  .then(() =&gt; console.log(&#39;finally2&#39;))</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><h3 id="_4-promise中的all和race" tabindex="-1">4. Promise中的all和race <a class="header-anchor" href="#_4-promise中的all和race" aria-label="Permalink to &quot;4. Promise中的all和race&quot;">​</a></h3><p>在做下面👇的题目之前，让我们先来了解一下<code>Promise.all()</code>和<code>Promise.race()</code>的用法。 通俗来说，<code>.all()</code>的作用是接收一组异步任务，然后并行执行异步任务，并且在所有异步操作执行完后才执行回调。 <code>.race()</code>的作用也是接收一组异步任务，然后并行执行异步任务，只保留取第一个执行完成的异步操作的结果，其他的方法仍在执行，不过执行结果会被抛弃。 来看看题目一。</p><h4 id="_4-1-题目一" tabindex="-1">4.1 题目一 <a class="header-anchor" href="#_4-1-题目一" aria-label="Permalink to &quot;4.1 题目一&quot;">​</a></h4><p>我们知道如果直接在脚本文件中定义一个<code>Promise</code>，它构造函数的第一个参数是会立即执行的，就像这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const p1 = new Promise(r =&gt; console.log(&#39;立即打印&#39;))</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>控制台中会立即打印出 “立即打印”。 因此为了控制它什么时候执行，我们可以用一个函数包裹着它，在需要它执行的时候，调用这个函数就可以了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function runP1 () {</span></span>
<span class="line"><span>    const p1 = new Promise(r =&gt; console.log(&#39;立即打印&#39;))</span></span>
<span class="line"><span>    return p1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>runP1() // 调用此函数时才执行</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>OK 👌， 让我们回归正题。 现在来构建这么一个函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function runAsync (x) {</span></span>
<span class="line"><span>    const p = new Promise(r =&gt; setTimeout(() =&gt; r(x, console.log(x)), 1000))</span></span>
<span class="line"><span>    return p</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>该函数传入一个值<code>x</code>，然后间隔一秒后打印出这个<code>x</code>。 如果我用<code>.all()</code>来执行它会怎样呢？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function runAsync (x) {</span></span>
<span class="line"><span>    const p = new Promise(r =&gt; setTimeout(() =&gt; r(x, console.log(x)), 1000))</span></span>
<span class="line"><span>    return p</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Promise.all([runAsync(1), runAsync(2), runAsync(3)])</span></span>
<span class="line"><span>  .then(res =&gt; console.log(res))</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>先来想想此段代码在浏览器中会如何执行？ 没错，当你打开页面的时候，在间隔一秒后，控制台会同时打印出<code>1, 2, 3</code>，还有一个数组<code>[1, 2, 3]</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>[1, 2, 3]</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>所以你现在能理解这句话的意思了吗：<strong>有了all，你就可以并行执行多个异步操作，并且在一个回调中处理所有的返回数据。</strong><code>.all()</code>后面的<code>.then()</code>里的回调函数接收的就是所有异步操作的结果。 而且这个结果中数组的顺序和<code>Promise.all()</code>接收到的数组顺序一致！！！</p><blockquote><p>有一个场景是很适合用这个的，一些游戏类的素材比较多的应用，打开网页时，预先加载需要用到的各种资源如图片、flash以及各种静态文件。所有的都加载完后，我们再进行页面的初始化。</p></blockquote><h4 id="_4-2-题目二" tabindex="-1">4.2 题目二 <a class="header-anchor" href="#_4-2-题目二" aria-label="Permalink to &quot;4.2 题目二&quot;">​</a></h4><p>我新增了一个<code>runReject</code>函数，它用来在<code>1000 * x</code>秒后<code>reject</code>一个错误。 同时<code>.catch()</code>函数能够捕获到<code>.all()</code>里最先的那个异常，并且只执行一次。 想想这道题会怎样执行呢 🤔️？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function runAsync (x) {</span></span>
<span class="line"><span>  const p = new Promise(r =&gt; setTimeout(() =&gt; r(x, console.log(x)), 1000))</span></span>
<span class="line"><span>  return p</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function runReject (x) {</span></span>
<span class="line"><span>  const p = new Promise((res, rej) =&gt; setTimeout(() =&gt; rej(\`Error: \${x}\`, console.log(x)), 1000 * x))</span></span>
<span class="line"><span>  return p</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])</span></span>
<span class="line"><span>  .then(res =&gt; console.log(res))</span></span>
<span class="line"><span>  .catch(err =&gt; console.log(err))</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>不卖关子了 😁，让我来公布答案：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 1s后输出</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>// 2s后输出</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>Error: 2</span></span>
<span class="line"><span>// 4s后输出</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>没错，就像我之前说的，<code>.catch</code>是会捕获最先的那个异常，在这道题目中最先的异常就是<code>runReject(2)</code>的结果。 另外，如果一组异步操作中有一个异常都不会进入<code>.then()</code>的第一个回调函数参数中。 注意，为什么不说是不进入<code>.then()</code>中呢 🤔️？ 哈哈，大家别忘了<code>.then()</code>方法的第二个参数也是可以捕获错误的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])</span></span>
<span class="line"><span>  .then(res =&gt; console.log(res), </span></span>
<span class="line"><span>  err =&gt; console.log(err))</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><h4 id="_4-3-题目三" tabindex="-1">4.3 题目三 <a class="header-anchor" href="#_4-3-题目三" aria-label="Permalink to &quot;4.3 题目三&quot;">​</a></h4><p>接下来让我们看看另一个有趣的方法<code>.race</code>。 让我看看你们的英语水平如何？ 快！一秒钟告诉我<code>race</code>是什么意思？</p><p>好吧...你们果然很强... <code>race</code>，比赛，赛跑的意思。 所以使用<code>.race()</code>方法，它只会获取最先执行完成的那个结果，其它的异步任务虽然也会继续进行下去，不过<code>race</code>已经不管那些任务的结果了。 来，改造一下<code>4.1</code>这道题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function runAsync (x) {</span></span>
<span class="line"><span>  const p = new Promise(r =&gt; setTimeout(() =&gt; r(x, console.log(x)), 1000))</span></span>
<span class="line"><span>  return p</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Promise.race([runAsync(1), runAsync(2), runAsync(3)])</span></span>
<span class="line"><span>  .then(res =&gt; console.log(&#39;result: &#39;, res))</span></span>
<span class="line"><span>  .catch(err =&gt; console.log(err))</span></span></code></pre></div><p>执行结果为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1</span></span>
<span class="line"><span>&#39;result: &#39; 1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span></code></pre></div><blockquote><p>这个race有什么用呢？使用场景还是很多的，比如我们可以用race给某个异步请求设置超时时间，并且在超时后执行相应的操作</p></blockquote><h4 id="_4-4-题目四" tabindex="-1">4.4 题目四 <a class="header-anchor" href="#_4-4-题目四" aria-label="Permalink to &quot;4.4 题目四&quot;">​</a></h4><p>改造一下题目<code>4.2</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function runAsync(x) {</span></span>
<span class="line"><span>  const p = new Promise(r =&gt;</span></span>
<span class="line"><span>    setTimeout(() =&gt; r(x, console.log(x)), 1000)</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  return p;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function runReject(x) {</span></span>
<span class="line"><span>  const p = new Promise((res, rej) =&gt;</span></span>
<span class="line"><span>    setTimeout(() =&gt; rej(\`Error: \${x}\`, console.log(x)), 1000 * x)</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  return p;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])</span></span>
<span class="line"><span>  .then(res =&gt; console.log(&quot;result: &quot;, res))</span></span>
<span class="line"><span>  .catch(err =&gt; console.log(err));</span></span></code></pre></div><p>遇到错误的话，也是一样的，在这道题中，<code>runReject(0)</code>最先执行完，所以进入了<code>catch()</code>中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>0</span></span>
<span class="line"><span>&#39;Error: 0&#39;</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span></code></pre></div><h4 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h4><p>好的，让我们来总结一下<code>.then()</code>和<code>.race()</code>吧，😄</p><ul><li><code>Promise.all()</code>的作用是接收一组异步任务，然后并行执行异步任务，并且在所有异步操作执行完后才执行回调。</li><li><code>.race()</code>的作用也是接收一组异步任务，然后并行执行异步任务，只保留取第一个执行完成的异步操作的结果，其他的方法仍在执行，不过执行结果会被抛弃。</li><li><code>Promise.all().then()</code>结果中数组的顺序和<code>Promise.all()</code>接收到的数组顺序一致。</li><li><code>all和race</code>传入的数组中如果有会抛出异常的异步任务，那么只有最先抛出的错误会被捕获，并且是被<code>then</code>的第二个参数或者后面的<code>catch</code>捕获；但并不会影响数组中其它的异步任务的执行。</li></ul><h3 id="_5-async-await的几道题" tabindex="-1">5. async/await的几道题 <a class="header-anchor" href="#_5-async-await的几道题" aria-label="Permalink to &quot;5. async/await的几道题&quot;">​</a></h3><p>既然谈到了<code>Promise</code>，那就肯定得再说说<code>async/await</code>，在很多时候<code>async</code>和<code>Promise</code>的解法差不多，又有些不一样。不信你来看看题目一。</p><h4 id="_5-1-题目一" tabindex="-1">5.1 题目一 <a class="header-anchor" href="#_5-1-题目一" aria-label="Permalink to &quot;5.1 题目一&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function async1() {</span></span>
<span class="line"><span>  console.log(&quot;async1 start&quot;);</span></span>
<span class="line"><span>  await async2();</span></span>
<span class="line"><span>  console.log(&quot;async1 end&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async function async2() {</span></span>
<span class="line"><span>  console.log(&quot;async2&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async1();</span></span>
<span class="line"><span>console.log(&#39;start&#39;)</span></span></code></pre></div><p>这道基础题输出的是啥？ 答案：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;async1 start&#39;</span></span>
<span class="line"><span>&#39;async2&#39;</span></span>
<span class="line"><span>&#39;start&#39;</span></span>
<span class="line"><span>&#39;async1 end&#39;</span></span></code></pre></div><p>过程分析：</p><ul><li>首先一进来是创建了两个函数的，我们先不看函数的创建位置，而是看它的调用位置</li><li>发现<code>async1</code>函数被调用了，然后去看看调用的内容</li><li>执行函数中的同步代码<code>async1 start</code>，之后碰到了<code>await</code>，它会阻塞<code>async1</code>后面代码的执行，因此会先去执行<code>async2</code>中的同步代码<code>async2</code>，然后跳出<code>async1</code></li><li>跳出<code>async1</code>函数后，执行同步代码<code>start</code></li><li>在一轮宏任务全部执行完之后，再来执行刚刚<code>await</code>后面的内容<code>async1 end</code>。</li></ul><p>在这里，你可以理解为「紧跟着await后面的语句相当于放到了new Promise中，下一行及之后的语句相当于放在Promise.then中」。 让我们来看看将<code>await</code>转换为<code>Promise.then</code>的伪代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function async1() {</span></span>
<span class="line"><span>  console.log(&quot;async1 start&quot;);</span></span>
<span class="line"><span>  // 原来代码</span></span>
<span class="line"><span>  // await async2();</span></span>
<span class="line"><span>  // console.log(&quot;async1 end&quot;);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 转换后代码</span></span>
<span class="line"><span>  new Promise(resolve =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;async2&quot;)</span></span>
<span class="line"><span>    resolve()</span></span>
<span class="line"><span>  }).then(res =&gt; console.log(&quot;async1 end&quot;))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async function async2() {</span></span>
<span class="line"><span>  console.log(&quot;async2&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async1();</span></span>
<span class="line"><span>console.log(&quot;start&quot;)</span></span></code></pre></div><p>转换后的伪代码和前面的执行结果是一样的。(感谢评论区<a href="https://juejin.im/user/3421335914314061" target="_blank" rel="noreferrer">Wing93</a>和<a href="https://juejin.im/user/1926000100012317" target="_blank" rel="noreferrer">Jexxie</a>小伙伴的指出) 另外关于<code>await</code>和<code>Promise</code>的区别，如果我们把<code>await async2()</code>换成一个<code>new Promise</code>呢？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function async1() {</span></span>
<span class="line"><span>  console.log(&quot;async1 start&quot;);</span></span>
<span class="line"><span>  new Promise(resolve =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;promise&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  console.log(&quot;async1 end&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async1();</span></span>
<span class="line"><span>console.log(&quot;start&quot;)</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>此时的执行结果为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;async start&#39;</span></span>
<span class="line"><span>&#39;promise&#39;</span></span>
<span class="line"><span>&#39;async1 end&#39;</span></span>
<span class="line"><span>&#39;start&#39;</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>可以看到<code>new Promise()</code>并不会阻塞后面的同步代码<code>async1 end</code>的执行。</p><h4 id="_5-2-题目二" tabindex="-1">5.2 题目二 <a class="header-anchor" href="#_5-2-题目二" aria-label="Permalink to &quot;5.2 题目二&quot;">​</a></h4><p>现在将<code>async</code>结合定时器看看。 给题目一中的 <code>async2</code>函数中加上一个定时器：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function async1() {</span></span>
<span class="line"><span>  console.log(&quot;async1 start&quot;);</span></span>
<span class="line"><span>  await async2();</span></span>
<span class="line"><span>  console.log(&quot;async1 end&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async function async2() {</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;timer&#39;)</span></span>
<span class="line"><span>  }, 0)</span></span>
<span class="line"><span>  console.log(&quot;async2&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async1();</span></span>
<span class="line"><span>console.log(&quot;start&quot;)</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>没错，定时器始终还是最后执行的，它被放到下一条宏任务的延迟队列中。 答案：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;async1 start&#39;</span></span>
<span class="line"><span>&#39;async2&#39;</span></span>
<span class="line"><span>&#39;start&#39;</span></span>
<span class="line"><span>&#39;async1 end&#39;</span></span>
<span class="line"><span>&#39;timer&#39;</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><h4 id="_5-3-题目三" tabindex="-1">5.3 题目三 <a class="header-anchor" href="#_5-3-题目三" aria-label="Permalink to &quot;5.3 题目三&quot;">​</a></h4><p>来吧，小伙伴们，让我们多加几个定时器看看。😁</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function async1() {</span></span>
<span class="line"><span>  console.log(&quot;async1 start&quot;);</span></span>
<span class="line"><span>  await async2();</span></span>
<span class="line"><span>  console.log(&quot;async1 end&quot;);</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;timer1&#39;)</span></span>
<span class="line"><span>  }, 0)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async function async2() {</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;timer2&#39;)</span></span>
<span class="line"><span>  }, 0)</span></span>
<span class="line"><span>  console.log(&quot;async2&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async1();</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;timer3&#39;)</span></span>
<span class="line"><span>}, 0)</span></span>
<span class="line"><span>console.log(&quot;start&quot;)</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>思考一下🤔，执行结果会是什么？ 其实如果你能做到这里了，说明你前面的那些知识点也都掌握了，我就不需要太过详细的步骤分析了。 直接公布答案吧：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;async1 start&#39;</span></span>
<span class="line"><span>&#39;async2&#39;</span></span>
<span class="line"><span>&#39;start&#39;</span></span>
<span class="line"><span>&#39;async1 end&#39;</span></span>
<span class="line"><span>&#39;timer2&#39;</span></span>
<span class="line"><span>&#39;timer3&#39;</span></span>
<span class="line"><span>&#39;timer1&#39;</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>定时器谁先执行，你只需要关注谁先被调用的以及延迟时间是多少，这道题中延迟时间都是<code>0</code>，所以只要关注谁先被调用的。。</p><h4 id="_5-4-题目四" tabindex="-1">5.4 题目四 <a class="header-anchor" href="#_5-4-题目四" aria-label="Permalink to &quot;5.4 题目四&quot;">​</a></h4><p>正常情况下，<code>async</code>中的<code>await</code>命令是一个<code>Promise</code>对象，返回该对象的结果。 但如果不是<code>Promise</code>对象的话，就会直接返回对应的值，相当于<code>Promise.resolve()</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function fn () {</span></span>
<span class="line"><span>  // return await 1234</span></span>
<span class="line"><span>  // 等同于</span></span>
<span class="line"><span>  return 123</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fn().then(res =&gt; console.log(res))</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>123</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><h4 id="_5-5-题目五" tabindex="-1">5.5 题目五 <a class="header-anchor" href="#_5-5-题目五" aria-label="Permalink to &quot;5.5 题目五&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function async1 () {</span></span>
<span class="line"><span>  console.log(&#39;async1 start&#39;);</span></span>
<span class="line"><span>  await new Promise(resolve =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;promise1&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  console.log(&#39;async1 success&#39;);</span></span>
<span class="line"><span>  return &#39;async1 end&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(&#39;srcipt start&#39;)</span></span>
<span class="line"><span>async1().then(res =&gt; console.log(res))</span></span>
<span class="line"><span>console.log(&#39;srcipt end&#39;)</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>这道题目比较有意思，大家要注意了。 在<code>async1</code>中<code>await</code>后面的<code>Promise</code>是没有返回值的，也就是它的状态始终是<code>pending</code>状态，因此相当于一直在<code>await</code>，<code>await</code>，<code>await</code>却始终没有响应...</p><p>所以在<code>await</code>之后的内容是不会执行的，也包括<code>async1</code>后面的 <code>.then</code>。 答案为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;script start&#39;</span></span>
<span class="line"><span>&#39;async1 start&#39;</span></span>
<span class="line"><span>&#39;promise1&#39;</span></span>
<span class="line"><span>&#39;script end&#39;</span></span></code></pre></div><h4 id="_5-6-题目六" tabindex="-1">5.6 题目六 <a class="header-anchor" href="#_5-6-题目六" aria-label="Permalink to &quot;5.6 题目六&quot;">​</a></h4><p>让我们给<code>5.5</code>中的<code>Promise</code>加上<code>resolve</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function async1 () {</span></span>
<span class="line"><span>  console.log(&#39;async1 start&#39;);</span></span>
<span class="line"><span>  await new Promise(resolve =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;promise1&#39;)</span></span>
<span class="line"><span>    resolve(&#39;promise1 resolve&#39;)</span></span>
<span class="line"><span>  }).then(res =&gt; console.log(res))</span></span>
<span class="line"><span>  console.log(&#39;async1 success&#39;);</span></span>
<span class="line"><span>  return &#39;async1 end&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(&#39;srcipt start&#39;)</span></span>
<span class="line"><span>async1().then(res =&gt; console.log(res))</span></span>
<span class="line"><span>console.log(&#39;srcipt end&#39;)</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>现在<code>Promise</code>有了返回值了，因此<code>await</code>后面的内容将会被执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;script start&#39;</span></span>
<span class="line"><span>&#39;async1 start&#39;</span></span>
<span class="line"><span>&#39;promise1&#39;</span></span>
<span class="line"><span>&#39;script end&#39;</span></span>
<span class="line"><span>&#39;promise1 resolve&#39;</span></span>
<span class="line"><span>&#39;async1 success&#39;</span></span>
<span class="line"><span>&#39;async1 end&#39;</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><h4 id="_5-7-题目七" tabindex="-1">5.7 题目七 <a class="header-anchor" href="#_5-7-题目七" aria-label="Permalink to &quot;5.7 题目七&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function async1 () {</span></span>
<span class="line"><span>  console.log(&#39;async1 start&#39;);</span></span>
<span class="line"><span>  await new Promise(resolve =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;promise1&#39;)</span></span>
<span class="line"><span>    resolve(&#39;promise resolve&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  console.log(&#39;async1 success&#39;);</span></span>
<span class="line"><span>  return &#39;async1 end&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(&#39;srcipt start&#39;)</span></span>
<span class="line"><span>async1().then(res =&gt; {</span></span>
<span class="line"><span>  console.log(res)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>new Promise(resolve =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;promise2&#39;)</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;timer&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>这道题应该也不难，不过有一点需要注意的，在<code>async1</code>中的<code>new Promise</code>它的<code>resovle</code>的值和<code>async1().then()</code>里的值是没有关系的，很多小伙伴可能看到<code>resovle(&#39;promise resolve&#39;)</code>就会误以为是<code>async1().then()</code>中的返回值。 因此这里的执行结果为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;script start&#39;</span></span>
<span class="line"><span>&#39;async1 start&#39;</span></span>
<span class="line"><span>&#39;promise1&#39;</span></span>
<span class="line"><span>&#39;promise2&#39;</span></span>
<span class="line"><span>&#39;async1 success&#39;</span></span>
<span class="line"><span>&#39;async1 end&#39;</span></span>
<span class="line"><span>&#39;timer&#39;</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><h4 id="_5-8-题目八" tabindex="-1">5.8 题目八 <a class="header-anchor" href="#_5-8-题目八" aria-label="Permalink to &quot;5.8 题目八&quot;">​</a></h4><p>我们再来看一道头条曾经的面试题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function async1() {</span></span>
<span class="line"><span>  console.log(&quot;async1 start&quot;);</span></span>
<span class="line"><span>  await async2();</span></span>
<span class="line"><span>  console.log(&quot;async1 end&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async function async2() {</span></span>
<span class="line"><span>  console.log(&quot;async2&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(&quot;script start&quot;);</span></span>
<span class="line"><span>setTimeout(function() {</span></span>
<span class="line"><span>  console.log(&quot;setTimeout&quot;);</span></span>
<span class="line"><span>}, 0);</span></span>
<span class="line"><span>async1();</span></span>
<span class="line"><span>new Promise(function(resolve) {</span></span>
<span class="line"><span>  console.log(&quot;promise1&quot;);</span></span>
<span class="line"><span>  resolve();</span></span>
<span class="line"><span>}).then(function() {</span></span>
<span class="line"><span>  console.log(&quot;promise2&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>console.log(&#39;script end&#39;)</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>有了上面👆几题做基础，相信你很快也能答上来了。</p><p>自信的写下你们的答案吧。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;script start&#39;</span></span>
<span class="line"><span>&#39;async1 start&#39;</span></span>
<span class="line"><span>&#39;async2&#39;</span></span>
<span class="line"><span>&#39;promise1&#39;</span></span>
<span class="line"><span>&#39;script end&#39;</span></span>
<span class="line"><span>&#39;async1 end&#39;</span></span>
<span class="line"><span>&#39;promise2&#39;</span></span>
<span class="line"><span>&#39;setTimeout&#39;</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>(这道题最后<code>async1 end</code>和<code>promise2</code>的顺序其实在网上饱受争议，我这里使用浏览器<code>Chrome V80</code>，<code>Node v12.16.1</code>的执行结果都是上面这个答案)</p><h4 id="_5-9-题目九" tabindex="-1">5.9 题目九 <a class="header-anchor" href="#_5-9-题目九" aria-label="Permalink to &quot;5.9 题目九&quot;">​</a></h4><p>好的👌，<code>async/await</code>大法已练成，咱们继续：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function testSometing() {</span></span>
<span class="line"><span>  console.log(&quot;执行testSometing&quot;);</span></span>
<span class="line"><span>  return &quot;testSometing&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async function testAsync() {</span></span>
<span class="line"><span>  console.log(&quot;执行testAsync&quot;);</span></span>
<span class="line"><span>  return Promise.resolve(&quot;hello async&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async function test() {</span></span>
<span class="line"><span>  console.log(&quot;test start...&quot;);</span></span>
<span class="line"><span>  const v1 = await testSometing();</span></span>
<span class="line"><span>  console.log(v1);</span></span>
<span class="line"><span>  const v2 = await testAsync();</span></span>
<span class="line"><span>  console.log(v2);</span></span>
<span class="line"><span>  console.log(v1, v2);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>test();</span></span>
<span class="line"><span>var promise = new Promise(resolve =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;promise start...&quot;);</span></span>
<span class="line"><span>  resolve(&quot;promise&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>promise.then(val =&gt; console.log(val));</span></span>
<span class="line"><span>console.log(&quot;test end...&quot;);</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>答案：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;test start...&#39;</span></span>
<span class="line"><span>&#39;执行testSometing&#39;</span></span>
<span class="line"><span>&#39;promise start...&#39;</span></span>
<span class="line"><span>&#39;test end...&#39;</span></span>
<span class="line"><span>&#39;testSometing&#39;</span></span>
<span class="line"><span>&#39;执行testAsync&#39;</span></span>
<span class="line"><span>&#39;promise&#39;</span></span>
<span class="line"><span>&#39;hello async&#39;</span></span>
<span class="line"><span>&#39;testSometing&#39; &#39;hello async&#39;</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><h3 id="_6-async处理错误" tabindex="-1">6. async处理错误 <a class="header-anchor" href="#_6-async处理错误" aria-label="Permalink to &quot;6. async处理错误&quot;">​</a></h3><h4 id="_6-1-题目一" tabindex="-1">6.1 题目一 <a class="header-anchor" href="#_6-1-题目一" aria-label="Permalink to &quot;6.1 题目一&quot;">​</a></h4><p>在<code>async</code>中，如果 <code>await</code>后面的内容是一个异常或者错误的话，会怎样呢？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function async1 () {</span></span>
<span class="line"><span>  await async2();</span></span>
<span class="line"><span>  console.log(&#39;async1&#39;);</span></span>
<span class="line"><span>  return &#39;async1 success&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async function async2 () {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;async2&#39;)</span></span>
<span class="line"><span>    reject(&#39;error&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async1().then(res =&gt; console.log(res))</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>例如这道题中，<code>await</code>后面跟着的是一个状态为<code>rejected</code>的<code>promise</code>。 <strong>如果在async函数中抛出了错误，则终止错误结果，不会继续向下执行。</strong> 所以答案为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;async2&#39;</span></span>
<span class="line"><span>Uncaught (in promise) error</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>如果改为<code>throw new Error</code>也是一样的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function async1 () {</span></span>
<span class="line"><span>  console.log(&#39;async1&#39;);</span></span>
<span class="line"><span>  throw new Error(&#39;error!!!&#39;)</span></span>
<span class="line"><span>  return &#39;async1 success&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async1().then(res =&gt; console.log(res))</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>结果为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;async1&#39;</span></span>
<span class="line"><span>Uncaught (in promise) Error: error!!!</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><h4 id="_6-2-题目二" tabindex="-1">6.2 题目二 <a class="header-anchor" href="#_6-2-题目二" aria-label="Permalink to &quot;6.2 题目二&quot;">​</a></h4><p>如果想要使得错误的地方不影响<code>async</code>函数后续的执行的话，可以使用<code>try catch</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function async1 () {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    await Promise.reject(&#39;error!!!&#39;)</span></span>
<span class="line"><span>  } catch(e) {</span></span>
<span class="line"><span>    console.log(e)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  console.log(&#39;async1&#39;);</span></span>
<span class="line"><span>  return Promise.resolve(&#39;async1 success&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async1().then(res =&gt; console.log(res))</span></span>
<span class="line"><span>console.log(&#39;script start&#39;)</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>这里的结果为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;script start&#39;</span></span>
<span class="line"><span>&#39;error!!!&#39;</span></span>
<span class="line"><span>&#39;async1&#39;</span></span>
<span class="line"><span>&#39;async1 success&#39;</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>或者你可以直接在<code>Promise.reject</code>后面跟着一个<code>catch()</code>方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function async1 () {</span></span>
<span class="line"><span>  // try {</span></span>
<span class="line"><span>  //   await Promise.reject(&#39;error!!!&#39;)</span></span>
<span class="line"><span>  // } catch(e) {</span></span>
<span class="line"><span>  //   console.log(e)</span></span>
<span class="line"><span>  // }</span></span>
<span class="line"><span>  await Promise.reject(&#39;error!!!&#39;)</span></span>
<span class="line"><span>    .catch(e =&gt; console.log(e))</span></span>
<span class="line"><span>  console.log(&#39;async1&#39;);</span></span>
<span class="line"><span>  return Promise.resolve(&#39;async1 success&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>async1().then(res =&gt; console.log(res))</span></span>
<span class="line"><span>console.log(&#39;script start&#39;)</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>运行结果是一样的。</p><h3 id="_7-综合题" tabindex="-1">7. 综合题 <a class="header-anchor" href="#_7-综合题" aria-label="Permalink to &quot;7. 综合题&quot;">​</a></h3><p>上面👆的题目都是被我拆分着说一些功能点，现在让我们来做一些比较难的综合题吧。</p><h4 id="_7-1-题目一" tabindex="-1">7.1 题目一 <a class="header-anchor" href="#_7-1-题目一" aria-label="Permalink to &quot;7.1 题目一&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const first = () =&gt; (new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    console.log(3);</span></span>
<span class="line"><span>    let p = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>        console.log(7);</span></span>
<span class="line"><span>        setTimeout(() =&gt; {</span></span>
<span class="line"><span>            console.log(5);</span></span>
<span class="line"><span>            resolve(6);</span></span>
<span class="line"><span>            console.log(p)</span></span>
<span class="line"><span>        }, 0)</span></span>
<span class="line"><span>        resolve(1);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    resolve(2);</span></span>
<span class="line"><span>    p.then((arg) =&gt; {</span></span>
<span class="line"><span>        console.log(arg);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}));</span></span>
<span class="line"><span>first().then((arg) =&gt; {</span></span>
<span class="line"><span>    console.log(arg);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>console.log(4);</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>过程分析：</p><ul><li>第一段代码定义的是一个函数，所以我们得看看它是在哪执行的，发现它在<code>4</code>之前，所以可以来看看<code>first</code>函数里面的内容了。(这一步有点类似于题目<code>1.5</code>)</li><li>函数<code>first</code>返回的是一个<code>new Promise()</code>，因此先执行里面的同步代码<code>3</code></li><li>接着又遇到了一个<code>new Promise()</code>，直接执行里面的同步代码<code>7</code></li><li>执行完<code>7</code>之后，在<code>p</code>中，遇到了一个定时器，先将它放到下一个宏任务队列里不管它，接着向下走</li><li>碰到了<code>resolve(1)</code>，这里就把<code>p</code>的状态改为了<code>resolved</code>，且返回值为<code>1</code>，不过这里也先不执行</li><li>跳出<code>p</code>，碰到了<code>resolve(2)</code>，这里的<code>resolve(2)</code>，表示的是把<code>first</code>函数返回的那个<code>Promise</code>的状态改了，也先不管它。</li><li>然后碰到了<code>p.then</code>，将它加入本次循环的微任务列表，等待执行</li><li>跳出<code>first</code>函数，遇到了<code>first().then()</code>，将它加入本次循环的微任务列表(<code>p.then</code>的后面执行)</li><li>然后执行同步代码<code>4</code></li><li>本轮的同步代码全部执行完毕，查找微任务列表，发现<code>p.then</code>和<code>first().then()</code>，依次执行，打印出<code>1和2</code></li><li>本轮任务执行完毕了，发现还有一个定时器没有跑完，接着执行这个定时器里的内容，执行同步代码<code>5</code></li><li>然后又遇到了一个<code>resolve(6)</code>，它是放在<code>p</code>里的，但是<code>p</code>的状态在之前已经发生过改变了，因此这里就不会再改变，也就是说<code>resolve(6)</code>相当于没任何用处，因此打印出来的<code>p</code>为<code>Promise{&lt;resolved&gt;: 1}</code>。(这一步类似于题目<code>3.1</code>)</li></ul><p>结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>3</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>Promise{&lt;resolved&gt;: 1}</span></span></code></pre></div><h4 id="_7-2-题目二" tabindex="-1">7.2 题目二 <a class="header-anchor" href="#_7-2-题目二" aria-label="Permalink to &quot;7.2 题目二&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const async1 = async () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;async1&#39;);</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;timer1&#39;)</span></span>
<span class="line"><span>  }, 2000)</span></span>
<span class="line"><span>  await new Promise(resolve =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;promise1&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  console.log(&#39;async1 end&#39;)</span></span>
<span class="line"><span>  return &#39;async1 success&#39;</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>console.log(&#39;script start&#39;);</span></span>
<span class="line"><span>async1().then(res =&gt; console.log(res));</span></span>
<span class="line"><span>console.log(&#39;script end&#39;);</span></span>
<span class="line"><span>Promise.resolve(1)</span></span>
<span class="line"><span>  .then(2)</span></span>
<span class="line"><span>  .then(Promise.resolve(3))</span></span>
<span class="line"><span>  .catch(4)</span></span>
<span class="line"><span>  .then(res =&gt; console.log(res))</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;timer2&#39;)</span></span>
<span class="line"><span>}, 1000)</span></span></code></pre></div><p>注意的知识点：</p><ul><li><code>async</code>函数中<code>await</code>的<code>new Promise</code>要是没有返回值的话则不执行后面的内容(类似题<code>5.5</code>)</li><li><code>.then</code>函数中的参数期待的是函数，如果不是函数的话会发生透传(类似题<code>3.8</code> )</li><li>注意定时器的延迟时间</li></ul><p>因此本题答案为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;script start&#39;</span></span>
<span class="line"><span>&#39;async1&#39;</span></span>
<span class="line"><span>&#39;promise1&#39;</span></span>
<span class="line"><span>&#39;script end&#39;</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>&#39;timer2&#39;</span></span>
<span class="line"><span>&#39;timer1&#39;</span></span></code></pre></div><h4 id="_7-3-题目三" tabindex="-1">7.3 题目三 <a class="header-anchor" href="#_7-3-题目三" aria-label="Permalink to &quot;7.3 题目三&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const p1 = new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    resolve(&#39;resolve3&#39;);</span></span>
<span class="line"><span>    console.log(&#39;timer1&#39;)</span></span>
<span class="line"><span>  }, 0)</span></span>
<span class="line"><span>  resolve(&#39;resovle1&#39;);</span></span>
<span class="line"><span>  resolve(&#39;resolve2&#39;);</span></span>
<span class="line"><span>}).then(res =&gt; {</span></span>
<span class="line"><span>  console.log(res)</span></span>
<span class="line"><span>  setTimeout(() =&gt; {</span></span>
<span class="line"><span>    console.log(p1)</span></span>
<span class="line"><span>  }, 1000)</span></span>
<span class="line"><span>}).finally(res =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;finally&#39;, res)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>注意的知识点：</p><ul><li><code>Promise</code>的状态一旦改变就无法改变(类似题目<code>3.5</code>)</li><li><code>finally</code>不管<code>Promise</code>的状态是<code>resolved</code>还是<code>rejected</code>都会执行，且它的回调函数是接收不到<code>Promise</code>的结果的，所以<code>finally()</code>中的<code>res</code>是一个迷惑项(类似<code>3.10</code>)。</li><li>最后一个定时器打印出的<code>p1</code>其实是<code>.finally</code>的返回值，我们知道<code>.finally</code>的返回值如果在没有抛出错误的情况下默认会是上一个<code>Promise</code>的返回值(<code>3.10</code>中也有提到), 而这道题中<code>.finally</code>上一个<code>Promise</code>是<code>.then()</code>，但是这个<code>.then()</code>并没有返回值，所以<code>p1</code>打印出来的<code>Promise</code>的值会是<code>undefined</code>，如果你在定时器的<strong>下面</strong>加上一个<code>return 1</code>，则值就会变成<code>1</code>(感谢掘友<a href="https://juejin.im/user/2260251637193639" target="_blank" rel="noreferrer">JS丛中过</a>的指出)。</li></ul><p>答案：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;resolve1&#39;</span></span>
<span class="line"><span>&#39;finally&#39; undefined</span></span>
<span class="line"><span>&#39;timer1&#39;</span></span>
<span class="line"><span>Promise{&lt;resolved&gt;: undefined}</span></span></code></pre></div><h3 id="_8-几道大厂的面试题" tabindex="-1">8. 几道大厂的面试题 <a class="header-anchor" href="#_8-几道大厂的面试题" aria-label="Permalink to &quot;8. 几道大厂的面试题&quot;">​</a></h3><h4 id="_8-1-使用promise实现每隔1秒输出1-2-3" tabindex="-1">8.1 使用Promise实现每隔1秒输出1,2,3 <a class="header-anchor" href="#_8-1-使用promise实现每隔1秒输出1-2-3" aria-label="Permalink to &quot;8.1 使用Promise实现每隔1秒输出1,2,3&quot;">​</a></h4><p>这道题比较简单的一种做法是可以用<code>Promise</code>配合着<code>reduce</code>不停的在<code>promise</code>后面叠加<code>.then</code>，请看下面的代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const arr = [1, 2, 3]</span></span>
<span class="line"><span>arr.reduce((p, x) =&gt; {</span></span>
<span class="line"><span>  return p.then(() =&gt; {</span></span>
<span class="line"><span>    return new Promise(r =&gt; {</span></span>
<span class="line"><span>      setTimeout(() =&gt; r(console.log(x)), 1000)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}, Promise.resolve())</span></span></code></pre></div><p>或者你可以更简单一点写：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const arr = [1, 2, 3]</span></span>
<span class="line"><span>arr.reduce((p, x) =&gt; p.then(() =&gt; new Promise(r =&gt; setTimeout(() =&gt; r(console.log(x)), 1000))), Promise.resolve())</span></span></code></pre></div><p>参考链接：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fsegmentfault.com%2Fq%2F1010000010748967" target="_blank" rel="noreferrer">如何让异步操作顺序执行</a><strong>拓展题</strong> 这道拓展题来自于“万物皆可爱的<a href="https://juejin.im/user/2436173498955032" target="_blank" rel="noreferrer">LINGLONG</a> ”小姐姐，炒鸡棒 😁👍。 题目是这样的，她把我上面👆写的箭头函数版本改造了一下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const arr = [1, 2, 3];</span></span>
<span class="line"><span>const result = arr.reduce((p, x) =&gt; p.then(new Promise(r =&gt; setTimeout(() =&gt; r(console.log(x)), 1000))), Promise.resolve());</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>眼尖的小伙伴看出区别了吗？😁 <code>p.then</code>里的代码由<code>() =&gt; new Promise(...)</code>变成了<code>new Promise(...)</code>。 现在执行结果就大不相同了。 <strong>在一秒后按顺序同时打印出<code>1、2、3</code>:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>咦 🤔️？为什么会这样呢 🤔️？ 只是一个小小的改变却有大大的区别。 其实刚开始看到的时候霖呆呆我也愣了那么几秒😂。不过等我们一步一步拆分并对想不通的地方写了几个案例来看就理解了。 评论区和小姐姐扯了一大堆，结果把她越弄越糊😂。后来我改变了一种思路来描述，觉得应该直接上伪代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const arr = [1, 2, 3]</span></span>
<span class="line"><span>arr.reduce((p, x) =&gt; p.then(() =&gt; new Promise(r =&gt; setTimeout(() =&gt; r(console.log(x)), 1000))), Promise.resolve())</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>转换为伪代码就是这样： (相当于是用<code>reduce</code>不停的往后面叠加<code>.then</code>)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Promise.resolve()</span></span>
<span class="line"><span>  .then(() =&gt; {</span></span>
<span class="line"><span>    return new Promise(r =&gt; {</span></span>
<span class="line"><span>      setTimeout(() =&gt; {</span></span>
<span class="line"><span>        r(console.log(1))</span></span>
<span class="line"><span>      }, 1000)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .then(r =&gt; {</span></span>
<span class="line"><span>    return new Promise(r =&gt; {</span></span>
<span class="line"><span>      setTimeout(() =&gt; {</span></span>
<span class="line"><span>        r(console.log(2))</span></span>
<span class="line"><span>      }, 1000)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .then(r =&gt; {</span></span>
<span class="line"><span>    return new Promise(r =&gt; {</span></span>
<span class="line"><span>      setTimeout(() =&gt; {</span></span>
<span class="line"><span>        r(console.log(3))</span></span>
<span class="line"><span>      }, 1000)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>可以看到，每一个<code>.then</code>都是依赖于上一个<code>new Promise</code>何时被<code>resolve</code>了才会执行的，例如第二个<code>.then()</code>，它要等<code>r(console.log(1)</code>这段代码执行了，才会执行。 那么<code>r(console.log(1))</code>什么时候执行呢？就是在第一个定时器(也就是一秒后)触发的时候才执行。这样就保证了后面接着的<code>.then()</code>要等前一个定时器执行完才能执行，也就是隔一秒输出。 而如果是这样写的话：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const arr = [1, 2, 3];</span></span>
<span class="line"><span>const result = arr.reduce((p, x) =&gt; p.then(new Promise(r =&gt; setTimeout(() =&gt; r(console.log(x)), 1000))), Promise.resolve());</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>它的伪代码就是这样： (每个<code>then</code>里面的第一个参数不是一个函数)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Promise.resolve()</span></span>
<span class="line"><span>  .then(new Promise(r =&gt; {</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>      r(console.log(1))</span></span>
<span class="line"><span>    }, 1000)</span></span>
<span class="line"><span>  }))</span></span>
<span class="line"><span>  .then(new Promise(r =&gt; {</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>      r(console.log(2))</span></span>
<span class="line"><span>    }, 1000)</span></span>
<span class="line"><span>  }))</span></span>
<span class="line"><span>  .then(new Promise(r =&gt; {</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>      r(console.log(3))</span></span>
<span class="line"><span>    }, 1000)</span></span>
<span class="line"><span>  }))</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p><code>p.then()</code>里面的参数如果不是函数的话，会发生透传，这个在<code>3.8</code>中已经提过了。但是发生透传，<code>.then()</code>里的代码就不执行了吗？ 并不是的，我们来看这个例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const p = Promise.resolve(1).then(console.log(&#39;我不关心结果&#39;))</span></span>
<span class="line"><span>console.log(p)</span></span>
<span class="line"><span>p.then((res) =&gt; console.log(res))</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>很明显这里也发生了透传，但是<code>&#39;我不关心结果&#39;</code>也还是被打印出来了，并且由于透传，<code>p.then()</code>里获取到的<code>res</code>就是<code>1</code>，因此会打印出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;我不关心结果&#39;</span></span>
<span class="line"><span>Promise{</span></span>
<span class="line"><span>[[PromiseStatus]]: &quot;resolved&quot;</span></span>
<span class="line"><span>[[PromiseValue]]: 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>(第二行打印出<code>Promise{&lt;pending&gt;}</code>的小伙伴请把这个对象展开来看) 这个例子表明，就算发生了透传，<code>p.then()</code>中的代码依旧也是会执行的。 所以回到</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.then(new Promise(r =&gt; {</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>      r(console.log(1))</span></span>
<span class="line"><span>    }, 1000)</span></span>
<span class="line"><span>  }))</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>中，现在<code>.then()</code>中就相当于是执行一段同步代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>new Promise(r =&gt; {</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>      r(console.log(1))</span></span>
<span class="line"><span>    }, 1000)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>而这段代码的作用是向延迟队列中<code>push</code>一个一秒后执行的定时器任务。 并且在<code>push</code>完定时器之后，代码就马上进入了下一个<code>.then</code>(因为既然第一个<code>.then</code>已经是透传的了就没有必要等它的执行结果了) 下一个<code>.then</code>竟然也是一个透传，OK，那我继续<code>push</code>这个定时器，然后再执行第三个<code>.then</code>。 三个<code>.then</code>已经执行完成了，现在我们的延迟队列中已经有了三个定时器等待执行，<strong>并且三个定时器的延迟时间都是1000ms!!!</strong>。 所以等到了时间之后，就会同时打印出来了<code>1、2、3</code>。（其实准确来说，不是同时打印的，不过中间相差的时间非常非常短，大可忽略它） 现在你是否理解了其中的区别呢 😝。</p><h4 id="_8-2-使用promise实现红绿灯交替重复亮" tabindex="-1">8.2 使用Promise实现红绿灯交替重复亮 <a class="header-anchor" href="#_8-2-使用promise实现红绿灯交替重复亮" aria-label="Permalink to &quot;8.2 使用Promise实现红绿灯交替重复亮&quot;">​</a></h4><p>红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function red() {</span></span>
<span class="line"><span>    console.log(&#39;red&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function green() {</span></span>
<span class="line"><span>    console.log(&#39;green&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function yellow() {</span></span>
<span class="line"><span>    console.log(&#39;yellow&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>答案：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function red() {</span></span>
<span class="line"><span>  console.log(&quot;red&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function green() {</span></span>
<span class="line"><span>  console.log(&quot;green&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function yellow() {</span></span>
<span class="line"><span>  console.log(&quot;yellow&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const light = function (timer, cb) {</span></span>
<span class="line"><span>  return new Promise(resolve =&gt; {</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>      cb()</span></span>
<span class="line"><span>      resolve()</span></span>
<span class="line"><span>    }, timer)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const step = function () {</span></span>
<span class="line"><span>  Promise.resolve().then(() =&gt; {</span></span>
<span class="line"><span>    return light(3000, red)</span></span>
<span class="line"><span>  }).then(() =&gt; {</span></span>
<span class="line"><span>    return light(2000, green)</span></span>
<span class="line"><span>  }).then(() =&gt; {</span></span>
<span class="line"><span>    return light(1000, yellow)</span></span>
<span class="line"><span>  }).then(() =&gt; {</span></span>
<span class="line"><span>    return step()</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>step();</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><h4 id="_8-3-实现mergepromise函数" tabindex="-1">8.3 实现mergePromise函数 <a class="header-anchor" href="#_8-3-实现mergepromise函数" aria-label="Permalink to &quot;8.3 实现mergePromise函数&quot;">​</a></h4><p>实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const time = (timer) =&gt; {</span></span>
<span class="line"><span>  return new Promise(resolve =&gt; {</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>      resolve()</span></span>
<span class="line"><span>    }, timer)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const ajax1 = () =&gt; time(2000).then(() =&gt; {</span></span>
<span class="line"><span>  console.log(1);</span></span>
<span class="line"><span>  return 1</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const ajax2 = () =&gt; time(1000).then(() =&gt; {</span></span>
<span class="line"><span>  console.log(2);</span></span>
<span class="line"><span>  return 2</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const ajax3 = () =&gt; time(1000).then(() =&gt; {</span></span>
<span class="line"><span>  console.log(3);</span></span>
<span class="line"><span>  return 3</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>function mergePromise () {</span></span>
<span class="line"><span>  // 在这里写代码</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>mergePromise([ajax1, ajax2, ajax3]).then(data =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;done&quot;);</span></span>
<span class="line"><span>  console.log(data); // data 为 [1, 2, 3]</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>// 要求分别输出</span></span>
<span class="line"><span>// 1</span></span>
<span class="line"><span>// 2</span></span>
<span class="line"><span>// 3</span></span>
<span class="line"><span>// done</span></span>
<span class="line"><span>// [1, 2, 3]</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>这道题有点类似于<code>Promise.all()</code>，不过<code>.all()</code>不需要管执行顺序，只需要并发执行就行了。但是这里需要等上一个执行完毕之后才能执行下一个。 解题思路：</p><ul><li>定义一个数组<code>data</code>用于保存所有异步操作的结果</li><li>初始化一个<code>const promise = Promise.resolve()</code>，然后循环遍历数组，在<code>promise</code>后面添加执行<code>ajax</code>任务，同时要将添加的结果重新赋值到<code>promise</code>上。</li></ul><p>答案：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function mergePromise (ajaxArray) {</span></span>
<span class="line"><span>  // 存放每个ajax的结果</span></span>
<span class="line"><span>  const data = [];</span></span>
<span class="line"><span>  let promise = Promise.resolve();</span></span>
<span class="line"><span>  ajaxArray.forEach(ajax =&gt; {</span></span>
<span class="line"><span>  	// 第一次的then为了用来调用ajax</span></span>
<span class="line"><span>  	// 第二次的then是为了获取ajax的结果</span></span>
<span class="line"><span>    promise = promise.then(ajax).then(res =&gt; {</span></span>
<span class="line"><span>      data.push(res);</span></span>
<span class="line"><span>      return data; // 把每次的结果返回</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  // 最后得到的promise它的值就是data</span></span>
<span class="line"><span>  return promise;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><h4 id="_8-4-根据promisea-实现一个自己的promise" tabindex="-1">8.4 根据promiseA+实现一个自己的promise <a class="header-anchor" href="#_8-4-根据promisea-实现一个自己的promise" aria-label="Permalink to &quot;8.4 根据promiseA+实现一个自己的promise&quot;">​</a></h4><p>说真的，这道题被问到的概率还是挺高的，而且要说的内容也很多...</p><p>来吧，给你们一些好的宝典：</p><ul><li><a href="https://juejin.im/post/6844903607968481287#heading-7" target="_blank" rel="noreferrer">《Promise不会？？看这里！！！史上最通俗易懂的Promise！！！》</a></li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F23312442" target="_blank" rel="noreferrer">《写一个符合 Promises/A+ 规范并可配合 ES7 async/await 使用的 Promise》</a></li></ul><h4 id="_8-5-封装一个异步加载图片的方法" tabindex="-1">8.5 封装一个异步加载图片的方法 <a class="header-anchor" href="#_8-5-封装一个异步加载图片的方法" aria-label="Permalink to &quot;8.5 封装一个异步加载图片的方法&quot;">​</a></h4><p>这个相对简单一些，只需要在图片的<code>onload</code>函数中，使用<code>resolve</code>返回一下就可以了。 来看看具体代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function loadImg(url) {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    const img = new Image();</span></span>
<span class="line"><span>    img.onload = function() {</span></span>
<span class="line"><span>      console.log(&quot;一张图片加载完成&quot;);</span></span>
<span class="line"><span>      resolve(img);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    img.onerror = function() {</span></span>
<span class="line"><span>    	reject(new Error(&#39;Could not load image at&#39; + url));</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    img.src = url;</span></span>
<span class="line"><span>  });</span></span></code></pre></div><h4 id="_8-6-限制异步操作的并发个数并尽可能快的完成全部" tabindex="-1">8.6 限制异步操作的并发个数并尽可能快的完成全部 <a class="header-anchor" href="#_8-6-限制异步操作的并发个数并尽可能快的完成全部" aria-label="Permalink to &quot;8.6 限制异步操作的并发个数并尽可能快的完成全部&quot;">​</a></h4><p>有8个图片资源的url，已经存储在数组<code>urls</code>中。 <code>urls</code>类似于<code>[&#39;https://image1.png&#39;, &#39;https://image2.png&#39;, ....]</code> 而且已经有一个函数<code>function loadImg</code>，输入一个<code>url</code>链接，返回一个<code>Promise</code>，该<code>Promise</code>在图片下载完成的时候<code>resolve</code>，下载失败则<code>reject</code>。 但有一个要求，任何时刻同时下载的链接<strong>数量不可以超过3个</strong>。 请写一段代码实现这个需求，要求<strong>尽可能快速</strong>地将所有图片下载完成。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var urls = [</span></span>
<span class="line"><span>  &quot;https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png&quot;,</span></span>
<span class="line"><span>  &quot;https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png&quot;,</span></span>
<span class="line"><span>  &quot;https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png&quot;,</span></span>
<span class="line"><span>  &quot;https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png&quot;,</span></span>
<span class="line"><span>  &quot;https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png&quot;,</span></span>
<span class="line"><span>  &quot;https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png&quot;,</span></span>
<span class="line"><span>  &quot;https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png&quot;,</span></span>
<span class="line"><span>  &quot;https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png&quot;,</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>function loadImg(url) {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    const img = new Image();</span></span>
<span class="line"><span>    img.onload = function() {</span></span>
<span class="line"><span>      console.log(&quot;一张图片加载完成&quot;);</span></span>
<span class="line"><span>      resolve(img);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    img.onerror = function() {</span></span>
<span class="line"><span>    	reject(new Error(&#39;Could not load image at&#39; + url));</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    img.src = url;</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p>看到这道题时，我最开始的想法是：</p><ul><li>拿到<code>urls</code>，然后将这个数组每3个<code>url</code>一组创建成一个二维数组</li><li>然后用<code>Promise.all()</code>每次加载一组<code>url</code>（也就是并发3个），这一组加载完再加载下一组。</li></ul><p>这个想法从技术上说并不难实现，有点类似于第三题。不过缺点也明显，那就是每次都要等到上一组全部加载完之后，才加载下一组，那如果上一组有<code>2</code>个已经加载完了，还有<code>1</code>个特别慢，还在加载，要等这个慢的也加载完才能进入下一组。这明显会照常卡顿，影响加载效率。 但是开始没有考虑这么多，因此有了第一个版本。 <strong>如果你有兴趣可以看看想法一的代码，虽然对你没什么帮助，想直接知道比较好的做法的小伙伴请跳到想法二</strong></p><p><strong>想法一</strong>💡：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function limitLoad (urls, handler, limit) {</span></span>
<span class="line"><span>  const data = []; // 存储所有的加载结果</span></span>
<span class="line"><span>  let p = Promise.resolve();</span></span>
<span class="line"><span>  const handleUrls = (urls) =&gt; { // 这个函数是为了生成3个url为一组的二维数组</span></span>
<span class="line"><span>    const doubleDim = [];</span></span>
<span class="line"><span>    const len = Math.ceil(urls.length / limit); // Math.ceil(8 / 3) = 3</span></span>
<span class="line"><span>    console.log(len) // 3, 表示二维数组的长度为3</span></span>
<span class="line"><span>    for (let i = 0; i &lt; len; i++) {</span></span>
<span class="line"><span>      doubleDim.push(urls.slice(i * limit, (i + 1) * limit))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return doubleDim;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  const ajaxImage = (urlCollect) =&gt; { // 将一组字符串url 转换为一个加载图片的数组</span></span>
<span class="line"><span>    console.log(urlCollect)</span></span>
<span class="line"><span>    return urlCollect.map(url =&gt; handler(url))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  const doubleDim = handleUrls(urls); // 得到3个url为一组的二维数组</span></span>
<span class="line"><span>  doubleDim.forEach(urlCollect =&gt; {</span></span>
<span class="line"><span>    p = p.then(() =&gt; Promise.all(ajaxImage(urlCollect))).then(res =&gt; {</span></span>
<span class="line"><span>      data.push(...res); // 将每次的结果展开，并存储到data中 (res为：[img, img, img])</span></span>
<span class="line"><span>      return data;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  return p;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>limitLoad(urls, loadImg, 3).then(res =&gt; {</span></span>
<span class="line"><span>  console.log(res); // 最终得到的是长度为8的img数组: [img, img, img, ...]</span></span>
<span class="line"><span>  res.forEach(img =&gt; {</span></span>
<span class="line"><span>    document.body.appendChild(img);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>复制代码</span></span></code></pre></div><p><strong>想法二</strong>💡： 参考<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2F4bb1521343ba" target="_blank" rel="noreferrer">LHH大翰仔仔-Promise面试题</a> 既然题目的要求是保证每次并发请求的数量为3，那么我们可以先请求<code>urls</code>中的前面三个(下标为<code>0,1,2</code>)，并且请求的时候使用<code>Promise.race()</code>来同时请求，三个中有一个先完成了(例如下标为<code>1</code>的图片)，我们就把这个当前数组中已经完成的那一项(第<code>1</code>项)换成还没有请求的那一项(<code>urls</code>中下标为<code>3</code>)。 直到<code>urls</code>已经遍历完了，然后将最后三个没有完成的请求(也就是状态没有改变的<code>Promise</code>)用<code>Promise.all()</code>来加载它们。 不多说，流程图都给你画好了，你可以结合流程图再来看代码。 <img src="https://cdn.nlark.com/yuque/0/2021/webp/12821255/1626357897791-69df6288-2c0c-422b-b367-39ab05c6746d.webp#align=left&amp;display=inline&amp;height=804&amp;margin=%5Bobject%20Object%5D&amp;originHeight=804&amp;originWidth=1280&amp;size=0&amp;status=done&amp;style=none&amp;width=1280" alt=""> 为了方便你查看，我截了个图，不过代码在后面也有 (说真的，要我看这一大长串代码我也不愿意...) <img src="https://cdn.nlark.com/yuque/0/2021/webp/12821255/1626357897801-d7ac1182-8591-4407-8697-0327bc34953b.webp#align=left&amp;display=inline&amp;height=1280&amp;margin=%5Bobject%20Object%5D&amp;originHeight=1280&amp;originWidth=864&amp;size=0&amp;status=done&amp;style=none&amp;width=864" alt=""> 代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function limitLoad(urls, handler, limit) {</span></span>
<span class="line"><span>  let sequence = [].concat(urls); // 复制urls</span></span>
<span class="line"><span>  // 这一步是为了初始化 promises 这个&quot;容器&quot;</span></span>
<span class="line"><span>  let promises = sequence.splice(0, limit).map((url, index) =&gt; {</span></span>
<span class="line"><span>    return handler(url).then(() =&gt; {</span></span>
<span class="line"><span>      // 返回下标是为了知道数组中是哪一项最先完成</span></span>
<span class="line"><span>      return index;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  // 注意这里要将整个变量过程返回，这样得到的就是一个Promise，可以在外面链式调用</span></span>
<span class="line"><span>  return sequence</span></span>
<span class="line"><span>    .reduce((pCollect, url) =&gt; {</span></span>
<span class="line"><span>      return pCollect</span></span>
<span class="line"><span>        .then(() =&gt; {</span></span>
<span class="line"><span>          return Promise.race(promises); // 返回已经完成的下标</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        .then(fastestIndex =&gt; { // 获取到已经完成的下标</span></span>
<span class="line"><span>        	// 将&quot;容器&quot;内已经完成的那一项替换</span></span>
<span class="line"><span>          promises[fastestIndex] = handler(url).then(</span></span>
<span class="line"><span>            () =&gt; {</span></span>
<span class="line"><span>              return fastestIndex; // 要继续将这个下标返回，以便下一次变量</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          );</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        .catch(err =&gt; {</span></span>
<span class="line"><span>          console.error(err);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }, Promise.resolve()) // 初始化传入</span></span>
<span class="line"><span>    .then(() =&gt; { // 最后三个用.all来调用</span></span>
<span class="line"><span>      return Promise.all(promises);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>limitLoad(urls, loadImg, 3)</span></span>
<span class="line"><span>  .then(res =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;图片全部加载完毕&quot;);</span></span>
<span class="line"><span>    console.log(res);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .catch(err =&gt; {</span></span>
<span class="line"><span>    console.error(err);</span></span>
<span class="line"><span>  });</span></span></code></pre></div><p>作者：LinDaiDai_霖呆呆 链接：<a href="https://juejin.cn/post/6844904077537574919" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904077537574919</a> 来源：掘金 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>`,341)])])}const u=n(l,[["render",i]]);export{g as __pageData,u as default};
