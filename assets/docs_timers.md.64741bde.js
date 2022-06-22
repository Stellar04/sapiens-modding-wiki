import{_ as s,c as a,o as n,a as e}from"./app.72b3dc46.js";const C=JSON.parse('{"title":"Timers","description":"","frontmatter":{},"headers":[],"relativePath":"docs/timers.md","lastUpdated":1654549993000}'),l={name:"docs/timers.md"},o=e(`<h1 id="timers" tabindex="-1">Timers <a class="header-anchor" href="#timers" aria-hidden="true">#</a></h1><p>Timers in lua can be used to schedule events in the future:</p><div class="language-lua"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> timer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mjrequire</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">common/timer</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><div class="language-lua"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">timer</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">addCallbackTimer</span><span style="color:#A6ACCD;">(delay </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.25</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">slideOn</span><span style="color:#A6ACCD;">(subMenu)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,4),p=[o];function t(c,r,i,d,y,A){return n(),a("div",null,p)}var _=s(l,[["render",t]]);export{C as __pageData,_ as default};