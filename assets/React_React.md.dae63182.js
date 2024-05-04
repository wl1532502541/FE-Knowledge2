import{_ as n,c as s,o as a,e}from"./app.6e58fbdc.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"组件更新生命周期","slug":"组件更新生命周期","link":"#组件更新生命周期","children":[]}],"relativePath":"React/React.md","lastUpdated":1693156821000}'),t={name:"React/React.md"},l=e(`<h2 id="组件更新生命周期" tabindex="-1">组件更新生命周期 <a class="header-anchor" href="#组件更新生命周期" aria-hidden="true">#</a></h2><p>示例：<a href="https://stackblitz.com/edit/react-7g8s8d?file=index.js" target="_blank" rel="noreferrer">https://stackblitz.com/edit/react-7g8s8d?file=index.js</a></p><p>输出</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">parent componentWillMount</span></span>
<span class="line"><span style="color:#A6ACCD;">child componentWillMount</span></span>
<span class="line"><span style="color:#A6ACCD;">child componentDidMount</span></span>
<span class="line"><span style="color:#A6ACCD;">parent componentDidMount</span></span>
<span class="line"><span style="color:#A6ACCD;">parent shouldUpdate{}{name: &quot;second time&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;">parent componentWillUpdate</span></span>
<span class="line"><span style="color:#A6ACCD;">childvwillReceiveProps{name: &quot;second time&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;">child shouldUpdate{name: &quot;second time&quot;}{}</span></span>
<span class="line"><span style="color:#A6ACCD;">child componentWillUpdate</span></span>
<span class="line"><span style="color:#A6ACCD;">child componentDidUpdate</span></span>
<span class="line"><span style="color:#A6ACCD;">parent componentDidUpdate</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),p=[l];function o(c,i,r,d,C,_){return a(),s("div",null,p)}const m=n(t,[["render",o]]);export{h as __pageData,m as default};
