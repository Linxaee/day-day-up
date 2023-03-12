import{_ as l,c as p,a as s,b as n,d as a,o}from"./app.9c025aa6.js";const h=JSON.parse('{"title":"Greater Than","description":"","frontmatter":{},"headers":[{"level":2,"title":"测试用例","slug":"测试用例","link":"#测试用例","children":[]},{"level":2,"title":"你的代码","slug":"你的代码","link":"#你的代码","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"code/TypeChallenge/Medium/04425-medium-greater-than.md","lastUpdated":1678603477000}'),e={name:"code/TypeChallenge/Medium/04425-medium-greater-than.md"},t=n(`<h1 id="greater-than" tabindex="-1">Greater Than <a class="header-anchor" href="#greater-than" aria-hidden="true">#</a></h1><hr><p>In This Challenge, You should implement a type <code>GreaterThan&lt;T, U&gt;</code> like <code>T &gt; U</code></p><p>Negative numbers do not need to be considered.</p><p>For example</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//should be true</span></span>
<span class="line"><span style="color:#A6ACCD;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//should be false</span></span>
<span class="line"><span style="color:#A6ACCD;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//should be false</span></span>
<span class="line"><span style="color:#A6ACCD;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">111</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//should be true</span></span>
<span class="line"></span></code></pre></div><p>Good Luck!</p><h2 id="测试用例" tabindex="-1">测试用例 <a class="header-anchor" href="#测试用例" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Equal</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Expect</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@type-challenges/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cases</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">true</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">true</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">false</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">false</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">true</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">false</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">false</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">111</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">true</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">1234567891011</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1234567891010</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">true</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><br>`,10),r=a("a",{href:"https://tsch.js.org/4425/answer",target:"_blank"},[a("img",{src:"https://img.shields.io/badge/-Share%20your%20Solutions-teal",alt:"Share your Solutions"})],-1),c=n(`<a href="https://tsch.js.org/4425/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&amp;logoColor=white" alt="Check out Solutions"></a><h2 id="你的代码" tabindex="-1">你的代码 <a class="header-anchor" href="#你的代码" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MakeTuple</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Temp</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Temp</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">length</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">] </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Temp</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MakeTuple</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#FFCB6B;">Temp</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MinusOne</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MakeTuple</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">infer</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">First</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...infer</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Rest</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Rest</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">length</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GreaterThan</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MinusOne</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MinusOne</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">U</span><span style="color:#89DDFF;">&gt;&gt;;</span></span>
<span class="line"></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><blockquote><ol><li>两个 number 依次减 1，先减到 0 的就是大的一方。</li><li>这里借助 <code>MakeTuple</code> 构造元组来实现的减一，不难。</li></ol></blockquote>`,5);function F(C,y,D,A,B,i){return o(),p("div",null,[t,s(),r,s(),c])}const u=l(e,[["render",F]]);export{h as __pageData,u as default};