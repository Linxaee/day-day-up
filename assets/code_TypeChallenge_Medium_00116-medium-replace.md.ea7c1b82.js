import{_ as n,c as o,a as s,b as l,d as a,o as p}from"./app.01453473.js";const g=JSON.parse('{"title":"Replace","description":"","frontmatter":{},"headers":[{"level":2,"title":"测试用例","slug":"测试用例","link":"#测试用例","children":[]},{"level":2,"title":"你的代码","slug":"你的代码","link":"#你的代码","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"code/TypeChallenge/Medium/00116-medium-replace.md","lastUpdated":1678380106000}'),e={name:"code/TypeChallenge/Medium/00116-medium-replace.md"},t=l(`<h1 id="replace" tabindex="-1">Replace <a class="header-anchor" href="#replace" aria-hidden="true">#</a></h1><hr><p>实现 <code>Replace&lt;S, From, To&gt;</code> 将字符串 <code>S</code> 中的第一个子字符串 <code>From</code> 替换为 <code>To</code> 。</p><p>例如</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">replaced</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Replace</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">types are fun!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fun</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">awesome</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 期望是 &#39;types are awesome!&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="测试用例" tabindex="-1">测试用例 <a class="header-anchor" href="#测试用例" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Equal</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Expect</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@type-challenges/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cases</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Replace</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foobar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foofoo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Replace</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foobarbar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foofoobar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Replace</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foobarbar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foobarbar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Replace</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foobarbar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foobar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Replace</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foobarbar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bra</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foobarbar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Replace</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><br>`,8),c=a("a",{href:"https://tsch.js.org/116/answer",target:"_blank"},[a("img",{src:"https://img.shields.io/badge/-Share%20your%20Solutions-teal",alt:"Share your Solutions"})],-1),r=l(`<a href="https://tsch.js.org/116/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&amp;logoColor=white" alt="Check out Solutions"></a><h2 id="你的代码" tabindex="-1">你的代码 <a class="header-anchor" href="#你的代码" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><blockquote></blockquote>`,5);function D(F,y,C,i,A,d){return p(),o("div",null,[t,s(),c,s(),r])}const u=n(e,[["render",D]]);export{g as __pageData,u as default};
