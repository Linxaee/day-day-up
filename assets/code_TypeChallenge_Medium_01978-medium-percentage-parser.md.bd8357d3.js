import{_ as l,c as p,a as s,b as n,d as a,o}from"./app.9c025aa6.js";const E=JSON.parse('{"title":"Percentage Parser","description":"","frontmatter":{},"headers":[{"level":2,"title":"测试用例","slug":"测试用例","link":"#测试用例","children":[]},{"level":2,"title":"你的代码","slug":"你的代码","link":"#你的代码","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"code/TypeChallenge/Medium/01978-medium-percentage-parser.md","lastUpdated":1678603477000}'),e={name:"code/TypeChallenge/Medium/01978-medium-percentage-parser.md"},t=n(`<h1 id="percentage-parser" tabindex="-1">Percentage Parser <a class="header-anchor" href="#percentage-parser" aria-hidden="true">#</a></h1><hr><p>实现类型 <code>PercentageParser&lt;T extends string&gt;</code>。根据规则 <code>/^(\\+|\\-)?(\\d*)?(\\%)?$/</code> 匹配类型 T。</p><p>匹配的结果由三部分组成，分别是：[<code>正负号</code>, <code>数字</code>, <code>单位</code>]，如果没有匹配，则默认是空字符串。</p><p>例如：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PString1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PString2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+85%</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PString3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-85%</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PString4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">85%</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PString5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">85</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">R1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PString1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// expected [&#39;&#39;, &#39;&#39;, &#39;&#39;]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">R2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PString2</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// expected [&quot;+&quot;, &quot;85&quot;, &quot;%&quot;]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">R3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PString3</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// expected [&quot;-&quot;, &quot;85&quot;, &quot;%&quot;]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">R4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PString4</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// expected [&quot;&quot;, &quot;85&quot;, &quot;%&quot;]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">R5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PString5</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// expected [&quot;&quot;, &quot;85&quot;, &quot;&quot;]</span></span>
<span class="line"></span></code></pre></div><h2 id="测试用例" tabindex="-1">测试用例 <a class="header-anchor" href="#测试用例" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Equal</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Expect</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@type-challenges/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case6</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case7</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case9</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case10</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case11</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cases</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case0</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case1</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case2</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case3</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+100%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case4</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">100%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case5</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-100%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case6</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case7</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case8</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case9</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case10</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Expect</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Equal</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PercentageParser</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Case11</span><span style="color:#89DDFF;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><br>`,9),c=a("a",{href:"https://tsch.js.org/1978/answer",target:"_blank"},[a("img",{src:"https://img.shields.io/badge/-Share%20your%20Solutions-teal",alt:"Share your Solutions"})],-1),r=n(`<a href="https://tsch.js.org/1978/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&amp;logoColor=white" alt="Check out Solutions"></a><h2 id="你的代码" tabindex="-1">你的代码 <a class="header-anchor" href="#你的代码" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><blockquote></blockquote>`,5);function D(F,y,C,A,B,i){return o(),p("div",null,[t,s(),c,s(),r])}const d=l(e,[["render",D]]);export{E as __pageData,d as default};