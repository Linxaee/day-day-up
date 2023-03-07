import{_ as s,c as a,o as n,d as l}from"./app.649d2332.js";const o="/day-day-up/assets/image-20230303212233075-1678201938257-12.837f10be.png",p="/day-day-up/assets/image-20230303212532455-1678201939694-14.a660568f.png",e="/day-day-up/assets/image-20230303212713901-1678201940782-16.ec7324c5.png",h=JSON.parse('{"title":"收集点面试题(JS篇)","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.==forEach 中的异步问题==","slug":"_1-foreach-中的异步问题","link":"#_1-foreach-中的异步问题","children":[]},{"level":2,"title":"2. ==defineProperty 和 Proxy的区别==","slug":"_2-defineproperty-和-proxy的区别","link":"#_2-defineproperty-和-proxy的区别","children":[]},{"level":2,"title":"3. ==MVC、MVP、MVVM 的区别==","slug":"_3-mvc、mvp、mvvm-的区别","link":"#_3-mvc、mvp、mvvm-的区别","children":[]}],"relativePath":"notes/interview/JS.md","lastUpdated":1678202973000}'),t={name:"notes/interview/JS.md"},c=l(`<h1 id="收集点面试题-js篇" tabindex="-1">收集点面试题(JS篇) <a class="header-anchor" href="#收集点面试题-js篇" aria-hidden="true">#</a></h1><hr><h2 id="_1-foreach-中的异步问题" tabindex="-1">1.==<code>forEach</code> 中的异步问题== <a class="header-anchor" href="#_1-foreach-中的异步问题" aria-hidden="true">#</a></h2><p>下面这道题的输出？</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> square </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">num</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">async</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">square</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p>一般会觉得 <code>forEach</code> 中会 await 暂停，也就是:</p><ol><li>先3s 后输出 9</li><li>再2s 后输出 4</li><li>再1s 后输出 1</li></ol><p>但实际结果是</p><ol><li>先1s 后输出 1</li><li>再1s 后输出 4</li><li>再1s 后输出 9</li></ol><p>看起来 <strong>await 并没有暂停 <code>forEach</code> 的执行而是直接同时开启三个定时器。</strong></p><blockquote><p>原因在于 <code>forEach</code> 内部是同步的，它不会等待异步回调函数返回后才进行下一步，而是一次对所有数组元素进行操作，转而使用普通 for 循环即可解决循环内的异步问题</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">list</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">square</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 这里会等待 square resolve后才继续进行</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 先3s 后输出 9 再2s 后输出 4 再1s 后输出 1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-defineproperty-和-proxy的区别" tabindex="-1">2. ==defineProperty 和 Proxy的区别== <a class="header-anchor" href="#_2-defineproperty-和-proxy的区别" aria-hidden="true">#</a></h2><ol><li><code>Proxy</code> 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。</li><li><code>defineProperty</code> 代理的是对象的属性，<code>Proxy</code> 代理的是对象。</li><li><code>Proxy</code> 是创建对象的代理，不会操作原始对象，提供了 set、get、deleteProperty 等处理器，这样就不需要通过调用<code>Vue.$set</code> 和 <code>Vue.$delete</code> 来触发响应式。</li><li><code>Proxy</code> 内部实现了对数组的全面监听，不需要因为 <code>defineProperty</code> 针对数组的边界情况而放弃对数组的监听。</li></ol><h2 id="_3-mvc、mvp、mvvm-的区别" tabindex="-1">3. ==MVC、MVP、MVVM 的区别== <a class="header-anchor" href="#_3-mvc、mvp、mvvm-的区别" aria-hidden="true">#</a></h2><p><strong>除了 MVVM</strong></p><ol><li>MVC：<img src="`+o+'" alt="image-20230303212233075" style="zoom:50%;"></li></ol><p>View的指令给Controller，Controller 改 Model，Model 通知 View 更新。这样的开发太过于繁琐，要写 MVC 三套独立的代码，维护性并没有提高。</p><ol start="2"><li>MVP：<img src="'+p+'" alt="image-20230303212532455"></li></ol><p>MVP 是 MVC 的变种，View 的指令给 Presenter ，再由 Presenter 去修改 Model ，再返回来由 Presenter 来更新 View，这样就切断了 View 和 Model 层的直接联系解耦，但这样会导致 P 层过于臃肿，大量的逻辑都堆在 P 层，项目一大就难以维护。</p><ol start="3"><li>MVVM：<img src="'+e+'" alt="image-20230303212713901" style="zoom:67%;"></li></ol><p>MVVM 取消了 controller，也就是 Model 的改变可以被监听，实时改变 View 的表现，开发过程中只需要关注 Model 的数据处理即可。</p>',22),r=[c];function y(i,F,D,d,A,C){return n(),a("div",null,r)}const f=s(t,[["render",y]]);export{h as __pageData,f as default};
